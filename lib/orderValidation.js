import { getOrderProduct } from "./orderProducts";

export const MAX_UPLOAD_BYTES = 100 * 1024 * 1024;
export const MAX_COMMENT_LENGTH = 2000;
export const MAX_FIELD_LENGTH = 200;
export const MAX_EMAIL_LENGTH = 254;
export const MAX_PHONE_LENGTH = 40;
export const MAX_OPTIONS = 5;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeSingleLine(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function normalizeMessage(value) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function sanitizeFilename(filename) {
  const normalized = normalizeSingleLine(filename) || "upload";
  return normalized.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");
}

export function generateOrderId() {
  const date = new Date().toISOString().split("T")[0].replace(/-/g, "");
  const uniquePart = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${date}-${uniquePart}`;
}

export function validateUploadRequest(body = {}) {
  const filename = sanitizeFilename(body.filename);
  const contentType = normalizeSingleLine(body.contentType);
  const size = Number(body.size || 0);

  if (!filename) return { error: "Filename is required." };
  if (!contentType) return { error: "File type is required." };
  if (!Number.isFinite(size) || size <= 0) {
    return { error: "File size is required." };
  }
  if (size > MAX_UPLOAD_BYTES) {
    return { error: "File must be 100MB or smaller." };
  }

  return { filename, contentType, size };
}

export function normalizeOrderPayload(body = {}) {
  const productSlug = normalizeSingleLine(body.productSlug);
  const product = getOrderProduct(productSlug);
  const discretionaryOptions = Array.isArray(body.discretionaryOptions)
    ? body.discretionaryOptions.map(normalizeSingleLine).filter(Boolean)
    : [];

  const upload =
    body.upload && typeof body.upload === "object"
      ? {
          key: normalizeSingleLine(body.upload.key),
          filename: sanitizeFilename(body.upload.filename),
          contentType: normalizeSingleLine(body.upload.contentType),
          size: Number(body.upload.size || 0),
        }
      : null;

  return {
    productSlug,
    product,
    address: normalizeSingleLine(body.address),
    email: normalizeSingleLine(body.email).toLowerCase(),
    clientName: normalizeSingleLine(body.clientName),
    clientCompany: normalizeSingleLine(body.clientCompany),
    clientPhone: normalizeSingleLine(body.clientPhone),
    discretionaryOptions,
    additionalComments: normalizeMessage(body.additionalComments),
    upload: upload?.key ? upload : null,
  };
}

export function validateOrderPayload(order) {
  if (!order.product) return "Please choose a valid report product.";
  if (!order.address) return "Property address is required.";
  if (!order.email) return "Email is required.";
  if (!emailPattern.test(order.email)) return "Please enter a valid email address.";
  if (order.discretionaryOptions.length > MAX_OPTIONS) {
    return `Choose no more than ${MAX_OPTIONS} discretionary options.`;
  }
  if (order.additionalComments.length > MAX_COMMENT_LENGTH) {
    return `Comments must not exceed ${MAX_COMMENT_LENGTH} characters.`;
  }

  const fields = [
    order.address,
    order.clientName,
    order.clientCompany,
    ...order.discretionaryOptions,
  ];
  if (fields.some((field) => field.length > MAX_FIELD_LENGTH)) {
    return "One or more fields is too long.";
  }
  if (order.email.length > MAX_EMAIL_LENGTH || order.clientPhone.length > MAX_PHONE_LENGTH) {
    return "One or more fields is too long.";
  }
  if (order.upload && order.upload.size > MAX_UPLOAD_BYTES) {
    return "File must be 100MB or smaller.";
  }

  return "";
}
