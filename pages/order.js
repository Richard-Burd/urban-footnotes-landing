import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ContactUsForm from "@/components/ContactUsForm"; // 3rd Deployment Try

import Link from "next/link";

export default function Order() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <PageTitle
            topTitle="Ordering Our Product"
            textColor="text-title-text-ordering-our-product"
            shadowColor={`title-shadow-ordering-our-product`}
          />
        </center>
        <div className="roboto-font text-1xl mx-4 text-stone-300 lg:mx-32">
          <p className="pb-4">
            We are currently developing our product, please check back or
            contact Richard at:{" "}
            <Link href="mailto: richard@urbancruiseship.org">
              richard@urbancruiseship.org
            </Link>{" "}
            to get more information on the timeline for availability, or ask
            about becoming an early adopter.
          </p>
        </div>
      </div>
      {/* <ContactUsForm /> */}
    </div>
  );
}
