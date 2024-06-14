import PageHeaderLogo from "@/components/PageHeaderLogo";

import Link from "next/link";

export default function Order() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <div className="roboto-font pb-4 pt-12 text-2xl tracking-wide text-stone-300 opacity-60 lg:pt-2 lg:text-4xl">
            Ordering Our Product
          </div>
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
    </div>
  );
}
