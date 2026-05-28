import { sendOrderEmail } from "@/lib/orderEmail";
import {
  createDownloadUrl,
  loadOrder,
  saveOrder,
} from "@/lib/orderStorage";
import { getStripe } from "@/lib/stripeServer";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method not allowed");
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).send("Missing STRIPE_WEBHOOK_SECRET env var");
  }

  const signature = req.headers["stripe-signature"];
  const rawBody = await readRawBody(req);

  let event;
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;
  const orderId = session.metadata?.orderId || session.client_reference_id;
  if (!orderId) {
    return res.status(400).send("Missing order ID on Checkout Session");
  }

  try {
    const order = await loadOrder(orderId);
    if (order.paymentStatus === "paid" && order.paidEmailSent) {
      return res.status(200).json({ received: true, duplicate: true });
    }

    const paymentIntent =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id || "";

    const paidOrder = {
      ...order,
      paymentStatus: "paid",
      paidEmailSent: Boolean(order.paidEmailSent),
      paidAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      stripe: {
        ...(order.stripe || {}),
        checkoutSessionId: session.id,
        paymentIntent,
        customerId:
          typeof session.customer === "string"
            ? session.customer
            : session.customer?.id || "",
      },
    };

    const fileUrl = paidOrder.upload?.key
      ? await createDownloadUrl(paidOrder.upload.key)
      : "";

    await saveOrder(paidOrder);

    await sendOrderEmail({
      order: paidOrder,
      fileUrl,
      type: "paid",
      payment: {
        sessionId: session.id,
        paymentIntent,
        amountTotal: formatAmount(session.amount_total, session.currency),
        currency: session.currency?.toUpperCase() || "USD",
      },
    });

    paidOrder.paidEmailSent = true;
    paidOrder.updatedAt = new Date().toISOString();
    await saveOrder(paidOrder);

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("Error handling Stripe webhook:", error);
    return res.status(500).send("Could not process webhook");
  }
}
