import { getProductPriceId } from "@/lib/orderProducts";
import { sendOrderEmail } from "@/lib/orderEmail";
import {
  createDownloadUrl,
  saveOrder,
} from "@/lib/orderStorage";
import {
  generateOrderId,
  normalizeSingleLine,
  normalizeOrderPayload,
  validateOrderPayload,
} from "@/lib/orderValidation";
import { getSiteUrl, getStripe } from "@/lib/stripeServer";

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
      error: `Missing ${normalized.product.priceEnvVar} env var.`,
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
    updatedAt: now,
    paymentStatus: "pending",
    paidEmailSent: false,
    productSlug: normalized.product.slug,
    productName: normalized.product.name,
    address: normalized.address,
    email: normalized.email,
    clientName: normalized.clientName,
    clientCompany: normalized.clientCompany,
    clientPhone: normalized.clientPhone,
    discretionaryOptions: normalized.discretionaryOptions,
    additionalComments: normalized.additionalComments || "None",
    upload: normalized.upload,
    stripe: null,
  };

  try {
    await saveOrder(order);

    const fileUrl = order.upload?.key
      ? await createDownloadUrl(order.upload.key)
      : "";
    await sendOrderEmail({ order, fileUrl, type: "intake" });

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
      },
      payment_intent_data: {
        metadata: {
          orderId: order.orderId,
          productSlug: order.productSlug,
        },
      },
    });

    order.stripe = {
      checkoutSessionId: checkoutSession.id,
    };
    order.updatedAt = new Date().toISOString();
    await saveOrder(order);

    return res.status(200).json({
      orderId: order.orderId,
      checkoutUrl: checkoutSession.url,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({
      error: error.message || "Could not create the order.",
    });
  }
}
