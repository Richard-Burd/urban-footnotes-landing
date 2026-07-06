export const PRODUCT_FEATURES = [
  "Nearby Services Analysis",
  "Walkability Assessment",
  "Neighborhood Report",
  "Research References",
  "Street-level Illustration",
  "Neighborhood Illustration",
];

export const ORDER_PRODUCTS = [
  {
    slug: "property-miles",
    name: "U.S. address, distances in miles",
    shortName: "Miles",
    description:
      "Property report for a location in the United States, using imperial measurements.",
    price: "$3,600",
    priceEnvVar: "STRIPE_PRICE_PROPERTY_MILES",
  },
  {
    slug: "property-kilometers",
    name: "U.S. address, distances in kilometers",
    shortName: "Kilometers",
    description:
      "Property report for a location in the United States, using metric measurements.",
    price: "$3,600",
    priceEnvVar: "STRIPE_PRICE_PROPERTY_KILOMETERS",
  },
  {
    slug: "property-kilometers-and-miles",
    name: "U.S. address, distances in miles and kilometers",
    shortName: "Kilometers & Miles",
    description:
      "Our flagship report delivered in both metric and imperial versions.",
    price: "$3,900",
    priceEnvVar: "STRIPE_PRICE_PROPERTY_KILOMETERS_AND_MILES",
  },
];

export function getOrderProduct(slug) {
  return ORDER_PRODUCTS.find((product) => product.slug === slug) || null;
}

export function getProductPriceId(product) {
  if (!product) return "";
  return process.env[`SANDBOX_${product.priceEnvVar}`] || "";
}
