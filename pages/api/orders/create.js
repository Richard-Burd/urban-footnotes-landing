import { getProductPriceId } from "@/lib/orderProducts";
import { buildManualOrderEmail, sendOrderIntakeEmail } from "@/lib/orderEmail";
import {
  generateOrderId,
  normalizeSingleLine,
  normalizeOrderPayload,
  validateOrderPayload,
} from "@/lib/orderValidation";
import { getSiteUrl, getStripe } from "@/lib/stripeServer";

function shouldSendOrderIntakeEmail() {
  if (process.env.SEND_ORDER_INTAKE_EMAIL === "true") return true;
  if (process.env.SEND_ORDER_INTAKE_EMAIL === "false") return false;
  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const normalized = normalizeOrderPayload(req.body);
  const validationError = validateOrderPayload(normalized);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const priceId = getProductPriceId(normalized.product);
  if (!priceId) {
    return res.status(500).json({
      error: `Missing SANDBOX_${normalized.product.priceEnvVar} env var.`,
    });
  }

  const requestedOrderId = normalizeSingleLine(req.body.orderId);
  const orderId = /^ORD-\d{8}-[A-Z0-9]{6}$/.test(requestedOrderId)
    ? requestedOrderId
    : generateOrderId();
  const now = new Date().toISOString();
  const siteUrl = getSiteUrl(req);

  const order = {
    orderId,
    createdAt: now,
    paymentStatus: "pending",
    productSlug: normalized.product.slug,
    productName: normalized.product.name,
    address: normalized.address,
    email: normalized.email,
    clientName: normalized.clientName,
    clientCompany: normalized.clientCompany,
    clientPhone: normalized.clientPhone,
    discretionaryOptions: normalized.discretionaryOptions,
    additionalComments: normalized.additionalComments || "None",
  };

  try {
    const checkoutSession = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: order.email,
      client_reference_id: order.orderId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/form?product=${encodeURIComponent(
        order.productSlug,
      )}&cancelled=1&orderId=${encodeURIComponent(order.orderId)}`,
      metadata: {
        orderId: order.orderId,
        productSlug: order.productSlug,
        productName: order.productName,
      },
      payment_intent_data: {
        metadata: {
          orderId: order.orderId,
          productSlug: order.productSlug,
        },
      },
    });
    const sendIntakeEmail = shouldSendOrderIntakeEmail();
    let intakeEmailStatus = sendIntakeEmail ? "pending" : "skipped";
    let manualOrderEmail = null;

    if (sendIntakeEmail) {
      try {
        await sendOrderIntakeEmail({ order });
        intakeEmailStatus = "sent";
      } catch (emailError) {
        console.error("Order intake email failed:", emailError);
        intakeEmailStatus = "manual-email-required";
        manualOrderEmail = buildManualOrderEmail({
          notificationType: "order-intake",
          order,
        });
      }
    }

    return res.status(200).json({
      orderId: order.orderId,
      checkoutUrl: checkoutSession.url,
      intakeEmailStatus,
      manualOrderEmail,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({
      error: "Could not create the order.",
    });
  }
}
