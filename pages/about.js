import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function About() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-0">
        <center>
          <PageTitle
            topTitle="About Us"
            textColor="text-title-text-about"
            shadowColor={`title-shadow-about`}
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 md:text-2xl lg:mx-32">
          <p className="pb-4">
            Our product offers a comprehensive assessment for properties and
            provides a detailed report based on walkable proximity to essential
            services as well as public transportation availability. Our primary
            customers are real estate developers, city planners, and other
            stakeholders in the housing sector. Our secondary customers are
            people looking for a place to live who also want to reduce their use
            of (and dependence on) cars and other transportation means.
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
            <i>Urban Cruise Ship</i> in response to their research on{" "}
            <a
              href="https://www.urbancruiseship.org/cities"
              target="_blank"
              rel="noreferrer"
            >
              <b>cities</b>
            </a>
            . We are currently working with early adopters in the real estate
            industry and plan to develop an online application for general use
            in the future.
          </p>
        </div>
      </div>
    </div>
  );
}
