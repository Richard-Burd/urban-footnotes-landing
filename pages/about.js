import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function About() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <div className="roboto-font pb-4 pt-12 text-2xl tracking-wide text-stone-300 opacity-60 lg:pt-2 lg:text-4xl">
            About Us
          </div>
        </center>
        <div className="roboto-font text-1xl mx-4 text-stone-300 lg:mx-32">
          <p className="pb-4">
            We want to create the best walkability assessment for a given
            property or location. Our primary customers are people looking for a
            place to live who also want to reduce their use of, and dependence
            on, cars and other transportation means. Our secondary customers are
            realtors, real estate developers and others involved in deciding
            where people live, work, shop, and play.
          </p>

          <p className="pb-4">
            Our objective is to slow the rate of urban sprawl through
            highlighting the benefits of living in more concentrated locations.
            We seek to encourage the better use of those locations through
            encouraging development of mixed use properties which would reduce
            the need for personal car ownership.
          </p>

          <p>
            <i>Urban Foot Notes</i> was created by researchers at{" "}
            <i>Urban Cruise Ship</i> in response to their research on
            <a
              href="https://www.urbancruiseship.org/cities"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
              <b>cities</b>
            </a>
            . We are currently working with early adapters in the real estate
            industry and plan to develop an online application for general use
            in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
