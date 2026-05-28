import nodemailer from "nodemailer";
import { escapeHtml } from "./orderValidation";

const CONTACT_EMAIL = "contact@urbanfootnotes.com";

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
  });
}

function formatOrderText(order, fileUrl, payment = null) {
  return [
    `Order ID: ${order.orderId}`,
    `Status: ${order.paymentStatus || "pending"}`,
    `Submitted: ${order.createdAt}`,
    `Product: ${order.productName}`,
    payment ? `Stripe Session: ${payment.sessionId}` : "",
    payment ? `Stripe Payment Intent: ${payment.paymentIntent || "Not provided"}` : "",
    payment ? `Amount paid: ${payment.amountTotal || "Not provided"} ${payment.currency || ""}` : "",
    "",
    `Client Name: ${order.clientName || "Not provided"}`,
    `Email: ${order.email}`,
    `Company: ${order.clientCompany || "Not provided"}`,
    `Phone: ${order.clientPhone || "Not provided"}`,
    `Address: ${order.address}`,
    `File: ${fileUrl || "No file uploaded"}`,
    `Discretionary Options: ${
      order.discretionaryOptions?.length
        ? order.discretionaryOptions.join(", ")
        : "None"
    }`,
    "",
    "Additional Comments:",
    order.additionalComments || "None",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

function formatOrderHtml(order, fileUrl, payment = null) {
  const rows = [
    ["Order ID", order.orderId],
    ["Status", order.paymentStatus || "pending"],
    ["Submitted", order.createdAt],
    ["Product", order.productName],
    payment && ["Stripe Session", payment.sessionId],
    payment && ["Stripe Payment Intent", payment.paymentIntent || "Not provided"],
    payment && [
      "Amount paid",
      `${payment.amountTotal || "Not provided"} ${payment.currency || ""}`.trim(),
    ],
    ["Client Name", order.clientName || "Not provided"],
    ["Email", order.email],
    ["Company", order.clientCompany || "Not provided"],
    ["Phone", order.clientPhone || "Not provided"],
    ["Address", order.address],
    [
      "File",
      fileUrl
        ? `<a href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            order.upload?.filename || "View file",
          )}</a>`
        : "No file uploaded",
      Boolean(fileUrl),
    ],
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
        ([label, value, isHtml]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${
            isHtml ? value : escapeHtml(value)
          }</p>`,
      )
      .join("")}
    <p><strong>Additional Comments:</strong></p>
    <p>${escapeHtml(order.additionalComments || "None").replace(/\n/g, "<br />")}</p>
  `;
}

export async function sendOrderEmail({ order, fileUrl, type, payment }) {
  const transporter = createTransporter();
  const subjectPrefix = type === "paid" ? "Paid order" : "Order intake";

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    replyTo: order.email,
    to: CONTACT_EMAIL,
    subject: `${subjectPrefix}: ${order.orderId}`,
    text: formatOrderText(order, fileUrl, payment),
    html: formatOrderHtml(order, fileUrl, payment),
  });
}
