import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <center>
        <PageTitle
          topTitle="Contact Us"
          textColor="text-title-text-contact"
          shadowColor={`title-shadow-contact`}
          logoColor="#d8c7f6ff"
          gradient={
            "bg-[linear-gradient(to_right,rgba(77,61,87,0.1),rgba(45,19,67,0.9))]"
          }
          mobileTitleCentered={false}
          showLogo={true} // Integrates the logo
        />
      </center>
      <div className="roboto-font mx-4 rounded-[40px] text-xl text-stone-300 sm:bg-[linear-gradient(to_right,rgba(77,61,87,0.3),rgba(45,19,67,1.0))] md:p-6 md:text-2xl lg:mx-32">
        <p className="mb-4">
          You can reach out to us directly at:{" "}
          <Link href="mailto: contact@urbanfootnotes.com">
            contact@urbanfootnotes.com
          </Link>
          {""}.{" "}
        </p>
        <p>
          We can also arrange a phone call or video conference at your
          convenience.
        </p>
      </div>
    </div>
  );
}
