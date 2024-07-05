import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function Order() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <PageTitle
            topTitle="Ordering Our Product"
            textColor="text-title-text-order"
            shadowColor={`title-shadow-ordering-our-product`}
          />
        </center>
      </div>
      <div className="roboto-font mx-4 mt-20 text-xl text-stone-300 lg:mx-32">
        <p className="pb-4">
          Please fill out our <Link href="./contact">contact form</Link> to
          request a property report.
        </p>
        <p className="pb-4">
          Our property report is currently available in imperial measurements,
          but we plan to soon offer a metric equivalent as well.
        </p>
        {/* <p className="pb-4">
          Clicking on the order button below will take you to our secure
          checkout link. Please make sure you enter in the correct location
          address for the property you would like us to analyze.
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={() =>
              window.open(
                "https://buy.stripe.com/test_14k4gt9Kn4ZkcG49AA",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="mx-4 mt-10 rounded-xl bg-gray-200 px-4 py-2 text-2xl text-slate-900"
          >
            Order Now
          </button>
        </div> */}
      </div>
    </div>
  );
}
