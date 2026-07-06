import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getOrderProduct } from "@/lib/orderProducts";
import { MAX_COMMENT_LENGTH } from "@/lib/orderValidation";

const FORM_DRAFT_KEY = "urban-footnotes-order-form";

export default function SupplementaryForm() {
  const router = useRouter();
  const productSlug =
    typeof router.query.product === "string" ? router.query.product : "";
  const selectedProduct = useMemo(
    () => getOrderProduct(productSlug),
    [productSlug],
  );

  // Form states
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  // Discretionary options
  const discretionaryOptions = [
    "Car Wash",
    "Community Center",
    "Costco",
    "Farmers Market",
    "Gas Station",
    "Gifts/Novelties",
    "Hiking Trail",
    "Hospital",
    "Ice Skating Rink",
    "Landmark",
    "Liquor Store",
    "Sams Club",
    "Sports Stadium",
    "Target",
    "Tobacco/Vape",
    "Walmart",
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState(["", "", "", "", ""]);

  // Submission state
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const maxCommentLength = MAX_COMMENT_LENGTH;
  const customOptionsDescriptionId = "custom-options-description";

  useEffect(() => {
    try {
      const draft = window.localStorage.getItem(FORM_DRAFT_KEY);
      if (!draft) return;

      const parsed = JSON.parse(draft);
      setAddress(parsed.address || "");
      setEmail(parsed.email || "");
      setClientName(parsed.clientName || "");
      setClientCompany(parsed.clientCompany || "");
      setClientPhone(parsed.clientPhone || "");
      setSelectedOptions(
        Array.isArray(parsed.selectedOptions) ? parsed.selectedOptions : [],
      );
      setCustomOptions(
        Array.isArray(parsed.customOptions)
          ? parsed.customOptions
          : ["", "", "", "", ""],
      );
      setComments(parsed.comments || "");
    } catch (error) {
      console.error("Could not restore order form draft:", error);
    }
  }, []);

  useEffect(() => {
    const draft = {
      address,
      email,
      clientName,
      clientCompany,
      clientPhone,
      selectedOptions,
      customOptions,
      comments,
    };

    try {
      window.localStorage.setItem(FORM_DRAFT_KEY, JSON.stringify(draft));
    } catch (error) {
      console.error("Could not save order form draft:", error);
    }
  }, [
    address,
    email,
    clientName,
    clientCompany,
    clientPhone,
    selectedOptions,
    customOptions,
    comments,
  ]);

  useEffect(() => {
    if (router.query.cancelled) {
      setErrorMessage(
        "Payment was cancelled. Your form details are still here.",
      );
    }
    if (typeof router.query.orderId === "string") {
      setOrderId(router.query.orderId);
    }
  }, [router.query.cancelled, router.query.orderId]);

  // Helpers: count total selections
  const totalSelections =
    customOptions.filter((opt) => opt.trim() !== "").length +
    selectedOptions.length;

  const handleCustomOptionChange = (index, value) => {
    if (totalSelections < 5 || customOptions[index].trim() !== "") {
      const opts = [...customOptions];
      opts[index] = value;
      setCustomOptions(opts);
    }
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((o) => o !== option));
    } else if (totalSelections < 5) {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!selectedProduct) {
      setErrorMessage(
        "Please choose a valid report product from the pricing page.",
      );
      return;
    }

    if (!address || !email) {
      setErrorMessage("Please complete address and email before submitting.");
      return;
    }

    // Build payload
    const combinedOptions = [
      ...customOptions.filter((opt) => opt.trim() !== ""),
      ...selectedOptions,
    ];

    const payload = {
      orderId,
      productSlug: selectedProduct.slug,
      address,
      clientName,
      clientCompany,
      clientPhone,
      email,
      discretionaryOptions: combinedOptions.length ? combinedOptions : [],
      additionalComments: comments || "None",
    };

    // Create order and redirect to Stripe Checkout
    try {
      setIsSubmitting(true);
      const resp = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      setIsSubmitting(false);

      if (resp.ok) {
        setOrderId(data.orderId);
        setSuccessMessage(
          `Order created. Redirecting to payment for ${data.orderId}...`,
        );
        window.location.assign(data.checkoutUrl);
      } else {
        setErrorMessage(
          `Order failed: ${data.error || data.message || "Unknown error"}`,
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Error creating order.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-6 flex min-h-screen w-4/5 flex-col items-center justify-center rounded-lg bg-stone-300 text-neutral-900 shadow-sm">
      <Head>
        <title>Order Form | Urban Foot Notes</title>
      </Head>
      <h1 className="m-6 w-4/5 text-center text-2xl font-bold">
        Please fill out the supplemental information below to customize and
        complete your order:
      </h1>

      <div className="mb-4 w-full max-w-xl rounded-lg border border-stone-400 bg-white/70 px-4 py-3">
        <div className="text-sm font-semibold uppercase text-stone-600">
          Selected report
        </div>
        {selectedProduct ? (
          <>
            <div className="text-lg font-bold">{selectedProduct.name}</div>
            <div className="text-sm text-stone-700">
              {selectedProduct.description}
            </div>
          </>
        ) : (
          <div className="text-sm text-red-700">
            Choose a report package from the pricing page before submitting.
          </div>
        )}
      </div>

      {/* Inline feedback regions — must be in DOM before content changes for screen readers */}
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className={
          errorMessage
            ? "mb-4 w-full max-w-xl rounded-lg border border-red-600 bg-red-100 px-4 py-3 text-red-800"
            : "sr-only"
        }
      >
        {errorMessage}
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={
          successMessage
            ? "mb-4 w-full max-w-xl rounded-lg border border-green-600 bg-green-100 px-4 py-3 text-green-800"
            : "sr-only"
        }
      >
        {successMessage}
      </div>

      <form onSubmit={handleSubmit} className="m-6 w-full max-w-xl">
        {/* Address & Email */}
        <div className="mb-6">
          <label
            htmlFor="property-address"
            className="mb-2 block text-lg font-semibold"
          >
            Confirm Property Address:
          </label>
          <input
            id="property-address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email-address"
            className="mb-2 block text-lg font-semibold"
          >
            Email Address:
          </label>
          <input
            id="email-address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm"
            required
          />
        </div>

        {/* Client Info */}
        <div className="mb-6 grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="client-name"
              className="mb-2 block text-lg font-semibold"
            >
              Your Name:
            </label>
            <input
              id="client-name"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="What should we call you?"
              className="w-full rounded-lg border p-3 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="client-company"
              className="mb-2 block text-lg font-semibold"
            >
              Company Name:
            </label>
            <input
              id="client-company"
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              placeholder="optional"
              className="w-full rounded-lg border p-3 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="client-phone"
              className="mb-2 block text-lg font-semibold"
            >
              Phone Number:
            </label>
            <input
              id="client-phone"
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="optional"
              className="w-full rounded-lg border p-3 shadow-sm"
            />
          </div>
        </div>

        {/* Discretionary Options */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">
            Discretionary Options (up to 5)
          </h2>
          <p
            id={customOptionsDescriptionId}
            className="mb-4 text-sm text-gray-600"
          >
            Select from the list or enter custom options below.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {customOptions.map((opt, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={`h-5 w-5 rounded border border-gray-500 ${
                    opt.trim() ? "bg-green-500" : "bg-white"
                  }`}
                />
                <input
                  aria-describedby={customOptionsDescriptionId}
                  aria-label={`Custom discretionary option ${idx + 1}`}
                  type="text"
                  value={opt}
                  onChange={(e) =>
                    handleCustomOptionChange(idx, e.target.value)
                  }
                  placeholder={`Custom ${idx + 1}`}
                  className="flex-1 rounded-lg border p-2 shadow-sm"
                />
              </div>
            ))}
            {discretionaryOptions.map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(opt)}
                  disabled={
                    !selectedOptions.includes(opt) && totalSelections >= 5
                  }
                  onChange={() => handleCheckboxChange(opt)}
                  aria-describedby={customOptionsDescriptionId}
                  className="h-5 w-5"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6 rounded-lg border border-green-700/30 bg-green-50 p-4 text-sm text-green-950">
          <h2 className="mb-1 text-base font-semibold">
            Logo and source files
          </h2>
          <p>
            After payment, your confirmation page and email will include a link
            for sending us logos or source files.
          </p>
        </div>

        {/* Comments */}
        <div className="mb-6">
          <label
            htmlFor="additional-comments"
            className="mb-2 block text-lg font-semibold"
          >
            Additional Comments
          </label>
          <textarea
            id="additional-comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            maxLength={maxCommentLength}
            className="h-32 w-full resize-none rounded-lg border p-3 shadow-sm"
            placeholder="Any questions or requests?"
          />
          <p className="mt-1 text-sm text-gray-600">
            {comments.length}/{maxCommentLength}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || !selectedProduct}
          className={`rounded-lg px-6 py-2 text-base text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isSubmitting || !selectedProduct ? "cursor-not-allowed bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
        >
          {isSubmitting ? "Redirecting..." : "Continue to payment"}
        </button>
      </form>

      {orderId && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-bold">Your Order ID:</h2>
          <p className="text-lg text-green-600">{orderId}</p>
          <p className="text-sm text-gray-600">
            Please save this for your records.
          </p>
        </div>
      )}
    </div>
  );
}
