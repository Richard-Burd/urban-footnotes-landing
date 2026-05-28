export const ORDER_PRODUCTS = [
  {
    slug: "property-basic",
    name: "Property Report - Basic",
    shortName: "Basic",
    description: "Standard address-level walkability report.",
    priceEnvVar: "STRIPE_PRICE_PROPERTY_BASIC",
  },
  {
    slug: "property-standard",
    name: "Property Report - Standard",
    shortName: "Standard",
    description: "Property report with expanded context and customization.",
    priceEnvVar: "STRIPE_PRICE_PROPERTY_STANDARD",
  },
  {
    slug: "property-premium",
    name: "Property Report - Premium",
    shortName: "Premium",
    description: "Highest-detail property report package.",
    priceEnvVar: "STRIPE_PRICE_PROPERTY_PREMIUM",
  },
];

export function getOrderProduct(slug) {
  return ORDER_PRODUCTS.find((product) => product.slug === slug) || null;
}

export function getProductPriceId(product) {
  if (!product) return "";
  return process.env[product.priceEnvVar] || "";
}
