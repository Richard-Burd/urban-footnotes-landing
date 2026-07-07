import nodemailer from "nodemailer";
import { CONTACT_EMAIL, getLogoSubmissionUrl } from "./orderConfig";
import { escapeHtml } from "./orderValidation";

function getTimeoutMs(envVar, fallbackMs) {
  const value = Number(process.env[envVar]);
  return Number.isFinite(value) && value > 0 ? value : fallbackMs;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure:
      process.env.SMTP_SECURE === undefined
        ? Number(process.env.SMTP_PORT || 465) === 465
        : process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: getTimeoutMs("SMTP_CONNECTION_TIMEOUT_MS", 4000),
    greetingTimeout: getTimeoutMs("SMTP_GREETING_TIMEOUT_MS", 4000),
    socketTimeout: getTimeoutMs("SMTP_SOCKET_TIMEOUT_MS", 6000),
    dnsTimeout: getTimeoutMs("SMTP_DNS_TIMEOUT_MS", 4000),
  });
}

function formatPaymentText(payment) {
  if (!payment) return [];
  return [
    `Stripe Session: ${payment.sessionId}`,
    `Stripe Payment Intent: ${payment.paymentIntent || "Not provided"}`,
    `Amount paid: ${payment.amountTotal || "Not provided"} ${payment.currency || ""}`.trim(),
  ];
}

function formatOrderText(order, payment = null) {
  return [
    `Order ID: ${order.orderId}`,
    `Status: ${order.paymentStatus || "pending"}`,
    `Submitted: ${order.createdAt}`,
    `Product: ${order.productName}`,
    ...formatPaymentText(payment),
    "",
    `Client Name: ${order.clientName || "Not provided"}`,
    `Email: ${order.email}`,
    `Company: ${order.clientCompany || "Not provided"}`,
    `Phone: ${order.clientPhone || "Not provided"}`,
    `Address: ${order.address || "See order intake email"}`,
    `Discretionary Options: ${
      order.discretionaryOptions?.length
        ? order.discretionaryOptions.join(", ")
        : "None"
    }`,
    "",
    "Additional Comments:",
    order.additionalComments || "See order intake email",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export function buildManualOrderEmail({
  order,
  payment = null,
  notificationType = "order-intake",
}) {
  const subject =
    notificationType === "order-intake"
      ? `Order intake: ${order.orderId}`
      : `Order notification: ${order.orderId}`;
  const body = [
    "Automatic order email delivery failed. Please process this order manually.",
    "",
    formatOrderText(order, payment),
  ].join("\n");

  return {
    to: CONTACT_EMAIL,
    subject,
    body,
    mailtoUrl: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`,
  };
}

function formatOrderHtml(order, payment = null) {
  const rows = [
    ["Order ID", order.orderId],
    ["Status", order.paymentStatus || "pending"],
    ["Submitted", order.createdAt],
    ["Product", order.productName],
    payment && ["Stripe Session", payment.sessionId],
    payment && [
      "Stripe Payment Intent",
      payment.paymentIntent || "Not provided",
    ],
    payment && [
      "Amount paid",
      `${payment.amountTotal || "Not provided"} ${payment.currency || ""}`.trim(),
    ],
    ["Client Name", order.clientName || "Not provided"],
    ["Email", order.email],
    ["Company", order.clientCompany || "Not provided"],
    ["Phone", order.clientPhone || "Not provided"],
    ["Address", order.address || "See order intake email"],
    [
      "Discretionary Options",
      order.discretionaryOptions?.length
        ? order.discretionaryOptions.join(", ")
        : "None",
    ],
  ].filter(Boolean);

  return `
    ${rows
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
      )
      .join("")}
    <p><strong>Additional Comments:</strong></p>
    <p>${escapeHtml(order.additionalComments || "See order intake email").replace(/\n/g, "<br />")}</p>
  `;
}

export async function sendOrderIntakeEmail({ order }) {
  await createTransporter().sendMail({
    from: process.env.SMTP_FROM,
    replyTo: order.email,
    to: CONTACT_EMAIL,
    subject: `Order intake: ${order.orderId}`,
    text: formatOrderText(order),
    html: formatOrderHtml(order),
  });
}

export async function sendPaidOrderEmail({ order, payment }) {
  await createTransporter().sendMail({
    from: process.env.SMTP_FROM,
    replyTo: order.email,
    to: CONTACT_EMAIL,
    subject: `Paid order: ${order.orderId}`,
    text: formatOrderText(order, payment),
    html: formatOrderHtml(order, payment),
  });
}

export async function sendCustomerOrderConfirmationEmail({ order, payment }) {
  const logoSubmissionUrl = getLogoSubmissionUrl(order.orderId);
  const amountLine = payment?.amountTotal
    ? `Payment received: ${payment.amountTotal} ${payment.currency || ""}`.trim()
    : "Your payment has been received.";
  const text = [
    "Thank you for your Urban Foot Notes order.",
    "",
    `Order ID: ${order.orderId}`,
    `Product: ${order.productName}`,
    amountLine,
    "",
    "Logo or source files are collected after payment.",
    `Send your files or sharing link here: ${logoSubmissionUrl}`,
    "",
    `Questions? Reply to this email or contact ${CONTACT_EMAIL}.`,
  ].join("\n");
  const html = `
    <p>Thank you for your Urban Foot Notes order.</p>
    <p><strong>Order ID:</strong> ${escapeHtml(order.orderId)}</p>
    <p><strong>Product:</strong> ${escapeHtml(order.productName)}</p>
    <p>${escapeHtml(amountLine)}</p>
    <h2>Send us your logo or source files</h2>
    <p>Logo and source files are collected after payment.</p>
    <p><a href="${escapeHtml(logoSubmissionUrl)}">Send your files or sharing link</a></p>
    <p>Questions? Reply to this email or contact <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
  `;

  await createTransporter().sendMail({
    from: process.env.SMTP_FROM,
    replyTo: CONTACT_EMAIL,
    to: order.email,
    subject: `Your Urban Foot Notes order ${order.orderId}`,
    text,
    html,
  });
}
