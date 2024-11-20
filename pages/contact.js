import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ContactUsForm from "@/components/ContactUsForm"; // 3rd Deployment Try

import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="">
        <center>
          <PageTitle
            topTitle="Contact Us"
            textColor="text-title-text-contact"
            shadowColor={`title-shadow-ordering-our-product`}
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 lg:mx-32">
          <p className="pb-4">
            If you are interested in ordering our product as an early adopter,
            please fill in the information below and we will get back to you
            within a timely manner.
          </p>
          <p className="pb-4">
            You can reach our to Richard directly at:{" "}
            <Link href="mailto: richard@urbancruiseship.org">
              richard@urbancruiseship.org
            </Link>{" "}
            to get more information on becoming an early adopter. Thank you for
            taking an interest in Urban Foot Notes!
          </p>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}
