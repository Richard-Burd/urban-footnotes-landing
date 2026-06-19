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

  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  return `${proto}://${host}`;
}
