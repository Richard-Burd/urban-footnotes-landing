import PageTitle from "@/components/PageTitle";
import Link from "next/link";

const CARD = "bg-[linear-gradient(to_right,rgba(178,120,120,0.15),rgba(113,22,21,0.35))]";
const BODY = "text-[clamp(1.05rem,2.5vw,1.2rem)] leading-relaxed text-gray-100";

export default function OrderProposal() {
  return (
    <div className="roboto-font w-full text-white">
      <PageTitle
        topTitle="Order a Development Proposal"
        textColor="text-title-text-product"
        shadowColor="title-shadow-product"
        logoColor="#e7c7c7ff"
        gradient="bg-[linear-gradient(to_right,rgba(178,120,120,0.1),rgba(113,22,21,0.5))]"
        showLogo={true}
      />

      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-10">
        <div className="mx-auto max-w-2xl space-y-6">

          <section className="overflow-hidden rounded-[10px]">
            <div className={`${CARD} p-6 md:p-8`}>
              <h2 className="roboto-font mb-4 text-2xl font-bold text-title-text-product title-shadow-product md:text-3xl">
                Pricing
              </h2>
              <p className={BODY}>
                The cost of a development proposal depends on the development&apos;s
                size, complexity, and level of detail for both design &amp; analysis.
                For this reason we cannot quote a fixed price.
              </p>
              <p className={`${BODY} mt-5`}>
                Please{" "}
                <a
                  href="mailto:contact@urbanfootnotes.com"
                  className="font-semibold text-title-text-product hover:underline"
                >
                  contact us for a quote
                </a>
                .
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-[10px]">
            <div className="bg-white/5 p-6 md:p-8">
              <p className={BODY}>
                Want to learn more about what a development proposal includes?{" "}
                <Link
                  href="/proposals"
                  className="font-semibold text-title-text-product hover:underline"
                >
                  View the Development Proposals page
                </Link>
                .
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
