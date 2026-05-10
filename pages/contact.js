import Head from "next/head";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

const contactEmail = "contact@urbanfootnotes.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialFormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};
const maxMessageLength = 2000;

const inputBase =
  "w-full rounded-lg border bg-neutral-50 px-3 pt-6 pb-2 text-base text-neutral-950 shadow-sm transition-all duration-150 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/15 border-neutral-300";

const labelBase =
  "pointer-events-none absolute left-3 select-none transition-all duration-150 ease-in-out";
const labelFloated = "top-1.5 text-[0.68rem] text-purple-600 font-semibold";
const labelResting = "top-[1.1rem] text-base text-neutral-400 font-normal";

function FloatingLabel({ htmlFor, children, active }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${labelBase} ${active ? labelFloated : labelResting}`}
    >
      {children}
    </label>
  );
}

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const isActive = (fieldName) =>
    focusedField === fieldName || Boolean(formValues[fieldName]);

  const fieldHandlers = (fieldName) => ({
    onFocus: () => setFocusedField(fieldName),
    onBlur: () => setFocusedField(null),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const trimmedValues = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      company: formValues.company.trim(),
      phone: formValues.phone.trim(),
      subject: formValues.subject.trim(),
      message: formValues.message.trim(),
      website: formValues.website.trim(),
    };

    if (
      !trimmedValues.name ||
      !trimmedValues.email ||
      !trimmedValues.subject ||
      !trimmedValues.message
    ) {
      setStatus({
        type: "error",
        message: "Please complete your name, email, subject, and message.",
      });
      return;
    }

    if (!emailPattern.test(trimmedValues.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedValues),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setFormValues(initialFormValues);
      setStatus({
        type: "success",
        message: "Thanks. Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "We could not send your message right now. Please email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Head>
        <title>Contact Us | Urban Foot Notes</title>
      </Head>
      <PageTitle
        topTitle="Contact Us"
        textColor="text-title-text-contact"
        shadowColor={`title-shadow-contact`}
        logoColor="#d8c7f6ff"
        gradient={
          "bg-[linear-gradient(to_right,rgba(77,61,87,0.1),rgba(45,19,67,0.9))]"
        }
        mobileTitleCentered={false}
        showLogo={true}
      />
      <div className="roboto-font mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 text-white md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:px-8 lg:px-12">
        <section className="rounded-lg bg-white/[0.08] p-5 shadow-lg ring-1 ring-white/[0.15] sm:p-6 md:p-8">
          <p className="mb-6 text-lg leading-8 text-stone-100 md:text-xl">
            Send a note and we will follow up by email. We can also arrange a
            phone call or video conference at your convenience.
          </p>

          <div className="rounded-md bg-neutral-950/50 p-4 ring-1 ring-white/10">
            <h2 className="mb-2 text-lg font-bold text-white">Prefer email?</h2>
            <p className="text-base leading-7 text-stone-200">
              Reach us directly at{" "}
              <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>.
            </p>
          </div>
        </section>

        <section
          className="rounded-xl bg-white p-6 text-neutral-950 shadow-[0_4px_32px_-4px_rgba(145,119,201,0.18)] ring-1 ring-purple-100 sm:p-8"
          aria-labelledby="contact-form-title"
        >
          <h2
            id="contact-form-title"
            className="mb-6 text-2xl font-bold text-neutral-900"
          >
            Contact Form
          </h2>

          <div
            role={status.type === "error" ? "alert" : "status"}
            aria-live={status.type === "error" ? "assertive" : "polite"}
            aria-atomic="true"
            className={
              status.message
                ? `mb-6 rounded-lg border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-300 bg-green-50 text-green-900"
                      : "border-red-300 bg-red-50 text-red-900"
                  }`
                : "sr-only"
            }
          >
            {status.message}
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formValues.website}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={160}
                required
                value={formValues.name}
                onChange={handleChange}
                {...fieldHandlers("name")}
                className={inputBase}
              />
              <FloatingLabel htmlFor="name" active={isActive("name")}>
                Name{" "}
                <span aria-hidden="true" className="text-red-400">
                  *
                </span>
              </FloatingLabel>
            </div>

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                value={formValues.email}
                onChange={handleChange}
                {...fieldHandlers("email")}
                className={inputBase}
              />
              <FloatingLabel htmlFor="email" active={isActive("email")}>
                Email{" "}
                <span aria-hidden="true" className="text-red-400">
                  *
                </span>
              </FloatingLabel>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  maxLength={160}
                  value={formValues.company}
                  onChange={handleChange}
                  {...fieldHandlers("company")}
                  className={inputBase}
                />
                <FloatingLabel htmlFor="company" active={isActive("company")}>
                  Company
                </FloatingLabel>
              </div>

              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  value={formValues.phone}
                  onChange={handleChange}
                  {...fieldHandlers("phone")}
                  className={inputBase}
                />
                <FloatingLabel htmlFor="phone" active={isActive("phone")}>
                  Phone
                </FloatingLabel>
              </div>
            </div>

            <div className="relative">
              <input
                id="subject"
                name="subject"
                type="text"
                maxLength={160}
                required
                value={formValues.subject}
                onChange={handleChange}
                {...fieldHandlers("subject")}
                className={inputBase}
              />
              <FloatingLabel htmlFor="subject" active={isActive("subject")}>
                Subject{" "}
                <span aria-hidden="true" className="text-red-400">
                  *
                </span>
              </FloatingLabel>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={maxMessageLength}
                required
                value={formValues.message}
                onChange={handleChange}
                {...fieldHandlers("message")}
                className={`${inputBase} resize-y pt-7`}
              />
              <FloatingLabel htmlFor="message" active={isActive("message")}>
                Message{" "}
                <span aria-hidden="true" className="text-red-400">
                  *
                </span>
              </FloatingLabel>
              <div className="mt-1 text-right text-xs text-neutral-400">
                {formValues.message.length} / {maxMessageLength}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#9177c9] px-5 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[#7a62b5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9177c9] disabled:cursor-not-allowed disabled:bg-neutral-400"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
