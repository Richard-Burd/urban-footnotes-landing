import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ContactUsForm from "@/components/ContactUsForm"; // 3rd Deployment Try

import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-0">
        <center>
          <PageTitle
            topTitle="Contact Us"
            textColor="text-title-text-contact"
            shadowColor={`title-shadow-ordering-our-product`}
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 lg:mx-32">
          <p className="pb-4">
            Thank you for taking an interest in Urban Foot Notes!
          </p>
          <p className="pb-4">
            You can reach out to us directly at:{" "}
            <Link href="mailto: contact@urbanfootnotes.org">
              contact@urbancruiseship.org
            </Link>{" "}
          </p>
        </div>
      </div>
      {/* <ContactUsForm /> removed this because it doesn't function*/}
    </div>
  );
}
