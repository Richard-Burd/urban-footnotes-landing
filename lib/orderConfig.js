export const CONTACT_EMAIL = "contact@urbanfootnotes.com";

export function getLogoSubmissionUrl(orderId = "") {
  const configuredUrl = process.env.LOGO_SUBMISSION_URL?.trim();
  if (configuredUrl) {
    return configuredUrl.replace(/\{ORDER_ID\}/g, encodeURIComponent(orderId));
  }

  const subject = encodeURIComponent(
    orderId ? `Logo files for order ${orderId}` : "Logo files for my order",
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`;
}
