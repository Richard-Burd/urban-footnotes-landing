import Stripe from "stripe";

let stripe;

export function getStripe() {
  if (!process.env.SANDBOX_STRIPE_SECRET_KEY) {
    throw new Error("Missing SANDBOX_STRIPE_SECRET_KEY env var");
  }

  if (!stripe) {
    stripe = new Stripe(process.env.SANDBOX_STRIPE_SECRET_KEY);
  }

  return stripe;
}

export function getSiteUrl(req) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (configuredUrl) return configuredUrl.replace(/\/+$/, "");

  if (process.env.NODE_ENV !== "development") {
    throw new Error("Missing NEXT_PUBLIC_SITE_URL (or SITE_URL) env var");
  }

  const protoHeader = req.headers["x-forwarded-proto"];
  const proto = (Array.isArray(protoHeader) ? protoHeader[0] : protoHeader || "http")
    .split(",")[0]
    .trim();
  const hostHeader = req.headers.host;
  const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;
  return `${proto}://${host}`;
}
