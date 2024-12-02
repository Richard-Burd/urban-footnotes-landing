import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function About() {
  return (
    <div>
      <div className="lg:mx-32">
        <center>
          <PageTitle
            topTitle="About Us"
            textColor="text-title-text-about"
            shadowColor={`title-shadow-about`}
            showLogo={true} // Integrates the logo
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 md:text-2xl pb-8">
          <p className="pb-4">
            Our standard-format reports rate properties on walkable access to 74
            commonly-used services, plus 5 client-or-staff-chosen ones. Reports
            for different addresses can be compared by real estate agents, home
            buyers, and renters, favoring those requiring less car usage. City
            planners and developers can use these reports to incentivize more
            pedestrian-favoring development and reduce traffic.
          </p>

          <p className="pb-4">
            Our objective is to reduce urban sprawl by incentivizing denser
            mixed-use development that serves residents' needs more completely.
            Having all needed services within a short walking distance can
            eliminate the need for cars. That can free up funds for other uses,
            like higher-quality housing.
          </p>

          <p>
            <i>Urban Foot Notes</i> was created by the researchers at <a
              href="https://www.urbancruiseship.org"
              target="_blank"
              rel="noreferrer"
            >{" "}
            <i>Urban Cruise Ship</i></a> in response to their research on{" "}
            <a
              href="https://www.urbancruiseship.org/cities"
              target="_blank"
              rel="noreferrer"
            >
              <b>cities</b> 
            </a> and interviews with real estate industry
              professionals and potential users.
          </p>
        </div>
      </div>
    </div>
  );
}
