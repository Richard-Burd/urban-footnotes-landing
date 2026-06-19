import {
  sendCustomerOrderConfirmationEmail,
  sendPaidOrderEmail,
} from "@/lib/orderEmail";
import { getOrderProduct } from "@/lib/orderProducts";
import { getStripe } from "@/lib/stripeServer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const PAID_CHECKOUT_EVENTS = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
]);

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

function formatAmount(amountTotal, currency) {
  if (typeof amountTotal !== "number") return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: (currency || "usd").toUpperCase(),
  }).format(amountTotal / 100);
}

function getEntityId(value) {
  return typeof value === "string" ? value : value?.id || "";
}

async function markNotificationSent(stripe, sessionId, metadataKey) {
  await stripe.checkout.sessions.update(sessionId, {
    metadata: { [metadataKey]: "true" },
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method not allowed");
  }

  const webhookSecret = process.env.SANDBOX_STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return res
      .status(500)
      .send("Missing SANDBOX_STRIPE_WEBHOOK_SECRET env var");
  }

  const stripe = getStripe();
  const signature = req.headers["stripe-signature"];
  const rawBody = await readRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (!PAID_CHECKOUT_EVENTS.has(event.type)) {
    return res.status(200).json({ received: true });
  }

  try {
    const eventSession = event.data.object;
    const session = await stripe.checkout.sessions.retrieve(eventSession.id);

    if (session.payment_status !== "paid") {
      return res.status(200).json({ received: true, paymentPending: true });
    }

    const orderId = session.metadata?.orderId || session.client_reference_id;
    if (!orderId) {
      return res.status(400).send("Missing order ID on Checkout Session");
    }

    const product = getOrderProduct(session.metadata?.productSlug);
    const order = {
      orderId,
      createdAt: new Date(session.created * 1000).toISOString(),
      paymentStatus: "paid",
      productSlug: session.metadata?.productSlug || "",
      productName:
        session.metadata?.productName || product?.name || "Property Report",
      email: session.customer_details?.email || session.customer_email || "",
    };
    const payment = {
      sessionId: session.id,
      paymentIntent: getEntityId(session.payment_intent),
      amountTotal: formatAmount(session.amount_total, session.currency),
      currency: session.currency?.toUpperCase() || "USD",
    };

    if (session.metadata?.paidOrderEmailSent !== "true") {
      await sendPaidOrderEmail({ order, payment });
      await markNotificationSent(stripe, session.id, "paidOrderEmailSent");
    }

    if (
      order.email &&
      session.metadata?.customerConfirmationEmailSent !== "true"
    ) {
      await sendCustomerOrderConfirmationEmail({ order, payment });
      await markNotificationSent(
        stripe,
        session.id,
        "customerConfirmationEmailSent",
      );
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("Error handling Stripe webhook:", error);
    return res.status(500).send("Could not process webhook");
  }
}
