import { useEffect } from "react";
import PageTitle from "@/components/PageTitle";

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
      <div>
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
      </div>

      <div className="roboto-font mb-4 text-center text-2.5xl text-gray-200 lg:mx-32">
        Coming Soon!
      </div>

      {/* <div id="explanations-n-stripe-link">
        <div className="mt-0">
          <stripe-pricing-table
            pricing-table-id="prctbl_1QMot4GN52GuXWVWoWc0oKj7"
            publishable-key="pk_live_51PWM5ZGN52GuXWVWNN9rPCsYn8nK2OK1xZl03U6AzK38Hh5I74b7o5GpPHMj9qyRrPgoVwLABMjC4ZgjrJqr8tXc004r8wQtLl"
          ></stripe-pricing-table>
        </div>
      </div>

      <div id="explanations-n-pie-chart">
        <div className="roboto-font mb-4 text-xl text-gray-200 md:text-2.5xl">
          <p className="my-10">
            Please select one of the three options above to purchase a report
            for your address.
          </p>
          <p className="mb-10">
            The graphic below is an approximate percentage breakdown of our
            expenses so far, at present, and going forward (estimated), rounded
            to the nearest 1%, as applied to a typical address. Past cost
            percentages are expected to decrease as our volume of address
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
        <div className="roboto-font mb-4 text-xl text-gray-200 md:text-2.5xl">
          <p className="my-10">
            Our accessibility reports are designed to provide insights based on
            available data for the selected property and its surrounding area.
            Please note that coverage may be limited in regions outside of major
            metropolitan areas and suburbs. Additionally, while we strive to
            utilize the most current and reliable data sources, some information
            may reflect conditions that have changed over time, as the imagery
            and other datasets we use may not always be up-to-date. As a result,
            our assessments are based on the most accurate information available
            at the time of review, but may not capture recent developments or
            changes.
          </p>
        </div>
      </div> */}
    </div>
  );
}
