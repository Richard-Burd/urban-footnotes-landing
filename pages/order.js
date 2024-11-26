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
        topTitle="Order"
        textColor="text-title-text-order"
        shadowColor="title-shadow-order"
      />
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
