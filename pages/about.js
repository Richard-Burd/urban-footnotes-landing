import { useState } from "react";
import PageTitle from "@/components/PageTitle";

export default function About() {
  // define tabs with id + label
  const tabs = [
    { id: "real_estate", label: "Real Estate Industry" },
    { id: "residents", label: "Residents" },
    { id: "government", label: "Government" },
  ];


  const sections = {
    real_estate: [
      "More buyers and renters can evaluate each address",
      "Those not needing a car can spend more on housing",
      "Independent evaluation brings credibility",
      "Increased certainty comforts investors",
      "Gaps in development types are made obvious",
      "Reports become additional sales material",
    ],
    residents: [
      "Independent evaluation brings more certainty",
      "Standardized format allows easier comparison",
      "Less need for cars boosts options",
      "Scores for services availability and walkability save time",
    ],
    government: [
      "Less traffic possible",
      "Less contention likely",
      "Less pollution possible",
      "Easier comparisons with other places",
    ],
  };

    // 3. Map each tab to one of your image files in public/images/
    const imageMap = {
      real_estate: "woman-with-key.png",
      residents:   "pedestrian-icon-mix.png",
      government:  "man-stamping.png",
    };


  // state now holds an id (no spaces!)
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="space-y-8">
      <center>
        <PageTitle
          topTitle="About Us"
          textColor="text-title-text-about"
          shadowColor="title-shadow-about"
          logoColor="#d4d4d4ff"
          gradient="bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))]"
          mobileTitleCentered
          showLogo
        />
      </center>

      {/* Introductory copy */}
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


      {/* Our product benefits section */}
      <div className="roboto-font w-full max-w-screen-lg mx-auto text-stone-300">
        <p className="pb-4 text-2xl font text-center">Our product benefits the . . . </p>

        {/* Tabs */}
        <div className="border-b border-stone-600 mb-4">
          <div className="flex justify-center space-x-4">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`
                  pb-2 text-lg md:text-2xl font-medium
                  ${
                    activeTab === id
                      ? "border-b-2 border-orange-100 text-orange-100"
                      : "text-stone-400 hover:text-orange-100"
                  }
                  transition
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic image */}
        <div className="flex justify-center my-6">
          <img
            src={`/images/${imageMap[activeTab]}`}
            alt={tabs.find(t => t.id === activeTab).label}
            className="w-1/3 object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Content for activeTab */}
        <ul className="list-disc list-inside px-6 md:px-0 space-y-2 text-xl md:text-2xl">
          {sections[activeTab].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <br>
    </br>          
    <p className="pb-4">
            <i>Urban Foot Notes</i> emerged from{' '}
            <a
              href="https://www.urbancruiseship.org"
              target="_blank"
              rel="noreferrer"
            >
              <i>Urban Cruise Ship</i>
            </a>{' '}'s research on{' '}
            <a
              href="https://www.urbancruiseship.org/cities"
              target="_blank"
              rel="noreferrer"
            >
              <b>cities</b>
            </a>{' '}
            and interviews with real estate industry professionals and potential
            users.
          </p>
          <p className="pb-4">
            The concept was simple, but no one else had done it. What initially
            involved John, Jye and Roseanne became a nearly two-year
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


  );
}
