import nodemailer from "nodemailer";

const CONTACT_EMAIL = "contact@urbanfootnotes.com";
const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTH = 160;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 40;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeSingleLine(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[\r\n]+/g, " ").trim();
}

function normalizeMessage(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPlainText(payload) {
  return [
    `Time submitted: ${payload.timestamp}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "Not provided"}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function formatHtml(payload) {
  const rows = [
    ["Time submitted", payload.timestamp],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "Not provided"],
    ["Phone", payload.phone || "Not provided"],
    ["Subject", payload.subject],
  ];

  return `
    ${rows
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
      )
      .join("")}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const name = normalizeSingleLine(req.body.name);
  const email = normalizeSingleLine(req.body.email).toLowerCase();
  const company = normalizeSingleLine(req.body.company);
  const phone = normalizeSingleLine(req.body.phone);
  const subject = normalizeSingleLine(req.body.subject);
  const message = normalizeMessage(req.body.message);
  const website = normalizeSingleLine(req.body.website);

  if (website) {
    return res.status(200).json({ message: "Message received" });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Please complete your name, email, subject, and message.",
    });
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    company.length > MAX_FIELD_LENGTH ||
    phone.length > MAX_PHONE_LENGTH ||
    subject.length > MAX_FIELD_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return res.status(400).json({
      message: "One or more fields exceeds the allowed length.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const payload = {
      name,
      email,
      company,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      replyTo: email,
      to: CONTACT_EMAIL,
      subject: `Contact form: ${subject}`,
      text: formatPlainText(payload),
      html: formatHtml(payload),
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({
      message:
        "We could not send your message right now. Please email us directly.",
    });
  }
}
