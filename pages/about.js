import PageTitle from "@/components/PageTitle";

export default function About() {
  return (
    <div>
      <center>
        <PageTitle
          topTitle="About Us"
          textColor="text-title-text-about"
          shadowColor={`title-shadow-about`}
          logoColor="#d4d4d4ff"
          gradient={
            "bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))]"
          }
          mobileTitleCentered={true}
          showLogo={true} // Integrates the logo
        />
      </center>
      <div className="roboto-font w-full max-w-screen-lg pb-8 text-xl text-stone-300 md:text-2xl">
        <div className="max-[1030px]:mx-6">
          <p className="pb-4">
            Our standard-format reports rate properties on walkable access to 74
            commonly-used services, plus five client-or-staff-chosen ones.
            Reports for different addresses can be compared by real estate
            agents, home buyers, and renters, favoring those requiring less car
            usage. City planners and developers can use these reports to
            incentivize more pedestrian-favoring development and reduce traffic.
          </p>

          <p className="pb-4">
            Our objective is to reduce urban sprawl by incentivizing denser
            mixed-use development that serves residents' needs more completely.
            Having all needed services within a short walking distance can
            eliminate the need for cars. That can free up funds for other uses,
            like higher-quality housing.
          </p>

          <p className="pb-4">
            <i>Urban Foot Notes</i> emerged from{" "}
            <a
              href="https://www.urbancruiseship.org"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i>Urban Cruise Ship</i>
            </a>
            {""}'s research on{" "}
            <a
              href="https://www.urbancruiseship.org/cities"
              target="_blank"
              rel="noreferrer"
            >
              <b>cities</b>
            </a>{" "}
            and interviews with real estate industry professionals and potential
            users.
          </p>
          <p className="pb-4">
            The concept was simple, but no one else had done it. What initially
            involved John, jye and Roseanne became a nearly two-year
            multiple-stage project involving all seven team members. That
            improved this unique, new product greatly but unfortunately also ran
            up the cost.
          </p>
          <p className="pb-4">
            We hope our reports help as many people as possible live more
            convenient and healthy lives, and reduce their polluting,
            time-consuming dependence on cars.
          </p>
        </div>
      </div>
    </div>
  );
}
