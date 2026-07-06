import { getStripe } from "@/lib/stripeServer";
import { getLogoSubmissionUrl } from "@/lib/orderConfig";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sessionId = req.query.session_id;
  if (!sessionId || typeof sessionId !== "string") {
    return res.status(400).json({ error: "Missing session_id." });
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    const orderId =
      session.metadata?.orderId || session.client_reference_id || "";
    return res.status(200).json({
      orderId,
      paymentStatus: session.payment_status,
      customerEmail:
        session.customer_details?.email || session.customer_email || "",
      logoSubmissionUrl: getLogoSubmissionUrl(orderId),
    });
  } catch (error) {
    console.error("Error retrieving Checkout Session:", error);
    return res.status(500).json({
      error: "Could not retrieve payment details.",
    });
  }
}
