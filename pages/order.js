import { useEffect } from "react";
import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

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
      <PageHeaderLogo />
      <PageTitle
        topTitle="Ordering Your Report"
        textColor="text-title-text-order"
        shadowColor="title-shadow-order"
      />
      <div className="roboto-font mb-4 text-xl text-gray-200 md:text-2.5xl">
        <p className="mb-10">
          The graphic below is an approximate breakdown of our expenses to date,
          as applied to a typical address.
        </p>
      </div>
      <div id="pie-charts">
        <div className="hidden justify-center lg:flex">
          <Image
            alt="First & Second pages of the product"
            src={`${baseUrl}/allocation-pie-chart-desktop.jpg`}
            width={1024}
            height={1}
          />
        </div>
        <div className="hidden justify-center md:flex lg:hidden">
          <Image
            alt="First & Second pages of the product"
            src={`${baseUrl}/allocation-pie-chart-tablet.jpg`}
            width={820}
            height={1}
          />
        </div>
        <div className="flex justify-center md:hidden">
          <Image
            alt="First & Second pages of the product"
            src={`${baseUrl}/allocation-pie-chart-mobile.jpg`}
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
          may reflect conditions that have changed over time, as the imagery and
          other datasets we use may not always be up-to-date. As a result, our
          assessments are based on the most accurate information available at
          the time of review, but may not capture recent developments or
          changes.
        </p>
        <p className="my-10">
          Please select one of the three options below to purchase a report for
          your address:
        </p>
      </div>

      <div className="mt-8">
        <stripe-pricing-table
          pricing-table-id="prctbl_1QMot4GN52GuXWVWoWc0oKj7"
          publishable-key="pk_live_51PWM5ZGN52GuXWVWNN9rPCsYn8nK2OK1xZl03U6AzK38Hh5I74b7o5GpPHMj9qyRrPgoVwLABMjC4ZgjrJqr8tXc004r8wQtLl"
        ></stripe-pricing-table>
      </div>
      <div className="roboto-font mx-4 mt-20 text-xl text-stone-300 opacity-0 lg:mx-32">
        <p className="pb-4">
          After payment you will be directed to a new page which will include a
          place to send us your logo. Alternatively, you may also send us an
          email with your desired logo attached.
        </p>
      </div>
    </div>
  );
}
