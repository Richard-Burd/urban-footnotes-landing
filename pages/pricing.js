import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ORDER_PRODUCTS, PRODUCT_FEATURES } from "@/lib/orderProducts";

function DevelopmentProposalImages({ baseUrl, id = "images", className }) {
  return (
    <div id={id} className={className}>
      <div id="image-1-container" className="mb-28">
        <div id="image-1-image">
          <Image
            alt="high fidelity rendering of Indy dev proposal"
            src={`${baseUrl}/indy-order-page.1.jpg`}
            width={450}
            height={1}
          />
        </div>
        <div id="image-1-text" className="text-xl text-white">
          <div className="pt-1 italic">
            high fidelity report available{" "}
            <a
              href="https://ufn-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-indianapolis-in-development-proposal.6.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
          <div>estimated cost: $46,000</div>
        </div>
      </div>

      <div id="image-2-container">
        <div id="image-2-image">
          <Image
            alt="low fidelity rendering of Coral Gables dev proposal"
            src={`${baseUrl}/coral-gables-order-page.1.jpg`}
            width={450}
            height={1}
          />
        </div>
        <div id="image-2-text" className="text-xl text-white">
          <div className="pt-1 italic">
            high fidelity report available{" "}
            <a
              href="https://ufn-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-coral-gables-fl-development-proposal.7.2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
          <div>estimated cost: $32,000</div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const baseUrl =
    process.env.NEXT_PUBLIC_S3_BASE_URL?.replace(/\/+$/, "") ?? "";

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Pricing | Urban Foot Notes</title>
      </Head>
      <PageTitle
        className="flex justify-center"
        topTitle="Ordering Your Report"
        textColor="text-title-text-order"
        shadowColor="title-shadow-order"
        logoColor="#eedfa2ff"
        gradient={
          "bg-[linear-gradient(to_right,rgba(123,117,92,0.1),rgba(113,96,21,0.8))]"
        }
        mobileTitleCentered={false}
        showLogo={true} // Integrates the logo
      />

      <div className="w-full max-w-screen-lg px-4 text-xl text-white min-[876px]:text-2.5xl">
        <div className="mb-5">
          Select the right product for your needs:
        </div>
      </div>



      <div
        id="property-reports-intro"
        className="w-full max-w-screen-lg px-4 pb-8 text-white"
      >
        <div className="pb-4 text-2xl font-semibold min-[876px]:text-5xl">
          Property Reports
        </div>
        <div className="text-xl min-[876px]:text-2xl">
              This is a standardized address-level walkability report that
              scores access to 74 everyday services. Property reports are
              directly comparable across addresses, helping agents, buyers,
              renters, and planners make better decisions
        </div>
      </div>

      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 px-4 pb-8 md:grid-cols-3">
        {ORDER_PRODUCTS.map((product) => (
          <div
            key={product.slug}
            className="flex flex-col rounded-2xl bg-neutral-900 p-6 text-white"
          >
            <div className="mb-1 text-2xl font-bold">{product.name}</div>
            <p className="mb-6 text-sm text-gray-400">{product.description}</p>
            <div className="mb-6 text-5xl font-bold">{product.price}</div>
            <Link
              href={`/form?product=${product.slug}`}
              className="mb-6 rounded-full bg-amber-400 py-3 text-center font-semibold text-neutral-900 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              Start order
            </Link>
            <div className="mb-3 text-sm text-gray-400">This includes:</div>
            <ul className="space-y-2">
              {PRODUCT_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="w-full max-w-screen-lg mt-12 border-t-2 border-gray-300 pb-14" />

      <div
        id="development-proposals-intro"
        className="w-full max-w-screen-lg px-4 pb-8 text-white"
      >
        <div
          id="title"
          className="pb-1 text-2xl font-semibold min-[876px]:text-5xl min-[876px]"
        >
          Development Proposals
        </div>

        <div
          id="dev-proposal-main-body"
          className="flex flex-col min-[876px]:flex-row min-[876px]:items-start min-[876px]:gap-8"
        >
          <div
            id="text-paragraphs"
            className="min-[876px]:min-w-0 min-[876px]:flex-1"
          >
            <div id="dev-paragraph-1" className="text-xl min-[876px]:text-2xl">
              These reports explore a potential building construction
              development design for a given parcel or parcel cluster. The
              reports show how a property could be developed so as to maximize
              walkability for residents living in the immediate vicinity. These
              designs are almost always mixed-use complexes with residential,
              office, and retail spaces.
            </div>

            <div
              id="dev-paragraph-2"
              className="mt-8 text-xl min-[876px]:text-2xl"
            >
              The cost of a development proposal depends on the development's
              size, complexity, and level of detail for both design & analysis.
              For this reason we cannot quote a fixed price but we offer the
              following examples{" "}
              <span className="inline min-[876px]:hidden">below</span>
              <span className="hidden min-[876px]:inline">
                on the right
              </span>{" "}
              with estimated costs for each one.
            </div>

            <div
              id="mobile-image-placement"
              className="block pb-20 pt-4 min-[876px]:hidden"
            >
              <DevelopmentProposalImages baseUrl={baseUrl} />
            </div>

            <div
              id="dev-paragraph-3"
              className="mt-8 text-xl min-[876px]:text-2xl"
            >
              Development proposals should be thought of as a tool for parcel
              optimization & discovery. They can be used to make a case for
              rezoning, conditional use permit, or a mixed-use overlay. City
              planners may be more flexible on granting these if a case can be
              made for an overall public good, which development proposals aim
              to demonstrate.
            </div>

            <div
              id="dev-paragraph-4"
              className="mt-8 text-xl min-[876px]:text-2xl"
            >
              Our development proposals have a level of planning detail
              commensurate with early-stage preliminary architectural design
              drawings. They show schematic floor plans broken down by occupancy
              type per floor. Basic IBC compliant egress schemas are included as
              well. We can provide varying levels of fidelity in terms of 3D
              modeling and presentation to meet your specific needs.
            </div>

            <div
              id="dev-paragraph-5"
              className="mt-8 text-xl min-[876px]:text-2xl"
            >
              Our team has extensive experience in both architecture/ building
              construction as well as environmental & urban solutions. We
              leverage this experience to deliver a unique product. That said,
              we may rely on you for certain due-diligence requirements unique
              to your city or region. If you have a property address or parcel
              you would like us to look at, please feel free to contact us so we
              can discuss your project.
            </div>

            <div
              id="dev-paragraph-6"
              className="mt-8 text-xl min-[876px]:text-2xl"
            >
              <div className="max-[876px]:mx-0">
                You can reach out to us at:
              </div>
              <div className="max-[876px]:mx-0">
                <a href="mailto:contact@urbanfootnotes.com">
                  contact@urbanfootnotes.com
                </a>
              </div>
            </div>
          </div>
          <div
            id="desktop-image-placement"
            className="hidden min-[876px]:block min-[876px]:shrink-0"
          >
            <DevelopmentProposalImages baseUrl={baseUrl} />
          </div>
        </div>
      </div>

      <hr className="mx-4 mt-8 border-t-2 border-gray-300 pb-14" />

      <div className="roboto-font w-full max-w-screen-lg px-4 pb-8 text-xl text-white md:text-2xl">
        <div id="explanations-n-pie-chart">
          <div className="roboto-font mb-4 text-xl text-gray-100 md:text-2.5xl">
            <div className="pb-1 text-2xl font-semibold min-[876px]:text-4xl min-[876px]">
              Costs, Coverage & Accuracy
            </div>
            <p className="mb-10">
              The graphic below is an approximate percentage breakdown of our
              expenses so far, at present, and going forward (estimated),
              rounded to the nearest 1%, as applied to a typical address. Past
              cost percentages are expected to decrease as our volume of address
              reports increases.
            </p>
          </div>
          <div id="pie-charts">
            <div className="hidden justify-center lg:flex">
              <Image
                alt="First & Second pages of the product"
                src={`${baseUrl}/allocation-pie-chart-desktop.v3.png`}
                width={898}
                height={1}
              />
            </div>
            <div className="hidden justify-center md:flex lg:hidden">
              <Image
                alt="First & Second pages of the product"
                src={`${baseUrl}/allocation-pie-chart-tablet.v3.png`}
                width={898}
                height={1}
              />
            </div>
            <div className="flex w-full justify-center md:hidden">
              <Image
                alt="First & Second pages of the product"
                src={`${baseUrl}/allocation-pie-chart-mobile.v3.png`}
                width={360}
                height={1}
                className="h-auto w-full max-w-[360px]"
                sizes="(max-width: 768px) min(100vw - 2rem, 360px), 360px"
              />
            </div>
          </div>
          <div className="roboto-font mb-4 text-xl text-gray-100 md:text-2.5xl">
            <p className="my-10">
              Our accessibility reports are designed to provide insights based
              on available data for the selected property and its surrounding
              area. Please note that coverage may be limited in regions outside
              of major metropolitan areas and suburbs. Additionally, while we
              strive to utilize the most current and reliable data sources, some
              information may reflect conditions that have changed over time, as
              the imagery and other datasets we use may not always be
              up-to-date. As a result, our assessments are based on the most
              accurate information available at the time of review, but may not
              capture recent developments or changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
