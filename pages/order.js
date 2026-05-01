import { useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

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
          <div>estimated cost: $x,xxx</div>
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
          <div>estimated cost: $x,xxx</div>
        </div>
      </div>
    </div>
  );
}

export default function Order() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <center>
        <PageTitle
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
      </center>

      <div className="w-full max-w-screen-lg px-4 text-xl text-white min-[1000px]:text-2.5xl">
        <div className="mb-10">
          The team at Urban Foot Notes can create two types of reports:
        </div>
        <div id="report-descriptions" className="mx-10 max-[1000px]:mx-0">
          <div id="property-report-description" className="mb-10">
            <div className="font-bold italic">Property Report</div>
            <div className="mx-6 max-[1000px]:mx-0">
              This is a standardized address-level walkability report that
              scores access to 74 everyday services. Property reports are
              directly comparable across addresses, helping agents, buyers,
              renters, and planners make better decisions
            </div>
          </div>
          <div
            id="development-proposal-description"
            className="mb-10 max-[1000px]:mx-0"
          >
            <div className="font-bold italic">Development Proposal</div>
            <div className="mx-6 max-[1000px]:mx-0">
              This includes everything in a property report plus a set of
              architectural drawings showing how a property could be developed
              so as to maximize walkability for a given address.
            </div>
          </div>
        </div>
      </div>

      <hr class="mx-4 border-t-2 border-gray-300 pb-8" />

      <div
        id="property-reports-intro"
        className="w-full max-w-screen-lg px-4 pb-8 text-white"
      >
        <div className="pb-1 text-2xl font-semibold min-[1000px]:text-4xl min-[1000px]:underline">
          Property Reports
        </div>
        <div className="text-xl min-[1000px]:text-2xl">
          These are available for purchase online. You can select one of the
          three options below to purchase a Property Report for an address of
          your choosing
        </div>
      </div>

      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1R8ebIGN52GuXWVWPtWvx2aH"
        publishable-key="pk_live_51PWM5ZGN52GuXWVWNN9rPCsYn8nK2OK1xZl03U6AzK38Hh5I74b7o5GpPHMj9qyRrPgoVwLABMjC4ZgjrJqr8tXc004r8wQtLl"
      ></stripe-pricing-table>

      <hr class="mx-4 mt-12 border-t-2 border-gray-300 pb-14" />

      <div
        id="development-proposals-intro"
        className="w-full max-w-screen-lg px-4 pb-8 text-white"
      >
        <div
          id="title"
          className="pb-1 text-2xl font-semibold min-[1000px]:text-4xl min-[1000px]:underline"
        >
          Development Proposals
        </div>

        <div
          id="dev-proposal-main-body"
          className="flex flex-col min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:gap-8"
        >
          <div
            id="text-paragraphs"
            className="min-[1000px]:min-w-0 min-[1000px]:flex-1"
          >
            <div id="dev-paragraph-1" className="text-xl min-[1000px]:text-2xl">
              These reports explore a potential building construction
              development design for a given parcel or parcel cluster. The
              reports show how a property could be developed so as to maximize
              walkability for residents living in the immediate vicinity. These
              designs are almost always mixed-use complexes with residential,
              office, and retail spaces.
            </div>

            <div
              id="dev-paragraph-2"
              className="mt-8 text-xl min-[1000px]:text-2xl"
            >
              The cost of a development proposal depends on the development's
              size, complexity, and level of detail for both design & analysis.
              For this reason we cannot quote a fixed price but we offer the
              following examples on the right with estimated costs for each one.
            </div>

            <div
              id="mobile-image-placement"
              className="block pb-20 pt-4 min-[1000px]:hidden"
            >
              <DevelopmentProposalImages baseUrl={baseUrl} />
            </div>

            <div
              id="dev-paragraph-3"
              className="mt-8 text-xl min-[1000px]:text-2xl"
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
              className="mt-8 text-xl min-[1000px]:text-2xl"
            >
              Our development proposals have a level of planning detail
              commensurate with earlystage preliminary architectural design
              drawings. They show schematic floor plans broken down by occupancy
              type per floor. Basic IBC compliant egress schemas are included as
              well. We can provide varying levels of fidelity in terms of 3D
              modeling and presentation to meet your specific needs.
            </div>

            <div
              id="dev-paragraph-5"
              className="mt-8 text-xl min-[1000px]:text-2xl"
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
              className="mt-8 text-xl min-[1000px]:text-2xl"
            >
              <div className="max-[1000px]:mx-0">
                You can reach out to us at:
              </div>
              <div className="max-[1000px]:mx-0">
                <a href="mailto:contact@urbanfootnotes.com">
                  contact@urbanfootnotes.com
                </a>
              </div>
            </div>
          </div>
          <div
            id="desktop-image-placement"
            className="hidden min-[1000px]:block min-[1000px]:shrink-0"
          >
            <DevelopmentProposalImages baseUrl={baseUrl} />
          </div>
        </div>
      </div>

      <hr class="mx-4 mt-8 border-t-2 border-gray-300 pb-14" />

      <div className="roboto-font w-full max-w-screen-lg px-4 pb-8 text-xl text-white md:text-2xl">
        <div id="explanations-n-pie-chart">
          <div className="roboto-font mb-4 text-xl text-gray-100 md:text-2.5xl">
            <div className="pb-1 text-2xl font-semibold min-[1000px]:text-4xl min-[1000px]:underline">
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
            <div className="flex justify-center md:hidden">
              <Image
                alt="First & Second pages of the product"
                src={`${baseUrl}/allocation-pie-chart-mobile.v3.png`}
                width={360}
                height={1}
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
