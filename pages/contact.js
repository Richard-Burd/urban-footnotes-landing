import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ContactUsForm from "@/components/ContactUsForm"; // 3rd Deployment Try

import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="">
        <center>
          <PageTitle
            topTitle="Contact Us"
            textColor="text-title-text-contact"
            shadowColor={`title-shadow-ordering-our-product`}
            showLogo={true} // Integrates the logo
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 lg:mx-32">
          <p className="pb-4">
            You can reach out to us directly at:{" "}
            <Link href="mailto: contact@urbanfootnotes.com">
              contact@urbanfootnotes.com
            </Link>{" "}
          </p>
          <p className="pb-4">
            Or you can use our contact form, and one of our team members will
            get in touch with you.
          </p>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}
