import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function OrderSuccess() {
  const router = useRouter();
  const [status, setStatus] = useState("loading");
  const [details, setDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const sessionId = router.query.session_id;
    if (!sessionId || typeof sessionId !== "string") return;

    async function loadSession() {
      try {
        const response = await fetch(
          `/api/orders/session?session_id=${encodeURIComponent(sessionId)}`,
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Could not load payment details.");
        }
        setDetails(data);
        setStatus("ready");
        window.localStorage.removeItem("urban-footnotes-order-form");
      } catch (error) {
        setErrorMessage(error.message);
        setStatus("error");
      }
    }

    loadSession();
  }, [router.query.session_id]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-white">
      <Head>
        <title>Order Received | Urban Foot Notes</title>
      </Head>

      <main className="w-full max-w-xl rounded-lg bg-white/10 p-8 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Order received</h1>

        {status === "loading" && (
          <p className="text-lg text-gray-100">Confirming your payment...</p>
        )}

        {status === "error" && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
            {errorMessage}
          </div>
        )}

        {status === "ready" && (
          <div className="space-y-4 text-lg text-gray-100">
            <p>
              Thank you. Your payment status is{" "}
              <strong>{details.paymentStatus}</strong>.
            </p>
            {details.orderId && (
              <p>
                Your order ID is <strong>{details.orderId}</strong>.
              </p>
            )}
            {details.customerEmail && (
              <p>
                We sent confirmation and next steps to{" "}
                <strong>{details.customerEmail}</strong>.
              </p>
            )}
            {details.logoSubmissionUrl && (
              <div className="rounded-lg border border-green-300/40 bg-green-950/30 p-5">
                <h2 className="mb-2 text-xl font-bold">
                  Send us your logo or source files
                </h2>
                <p className="mb-4">
                  Use the button below to submit any logos, images, or source
                  files for your report. If you have trouble with the form,
                  email us at{" "}
                  <a
                    href="mailto:contact@urbanfootnotes.com"
                    className="text-blue-400 hover:underline"
                  >
                    contact@urbanfootnotes.com
                  </a>
                  .
                </p>
                <a
                  href={details.logoSubmissionUrl}
                  target={
                    details.logoSubmissionUrl.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-green-500 px-5 py-2 font-semibold text-white hover:bg-green-600"
                >
                  Send logo or files
                </a>
              </div>
            )}
            <p>We will use the details you submitted to prepare your report.</p>
          </div>
        )}

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-green-500 px-5 py-2 font-semibold text-white hover:bg-green-600"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
