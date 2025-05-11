import { useState } from "react";
import PageTitle from "@/components/PageTitle";

export default function About() {
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

  const imageMap = {
    real_estate: "woman-with-key.png",
    residents: "pedestrian-icon-mix.png",
    government: "man-stamping.png",
  };

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="space-y-8 text-orange-100">
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

      {/* Body content wrapper */}
      <div className="roboto-font mx-auto w-full max-w-screen-lg space-y-6 text-xl text-gray-100 max-[1040px]:px-4 md:text-2xl">
        {/* Introductory copy */}
        <div>
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
        </div>

        {/* Desktop Benefits Section */}
        <div className="bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))] p-4 max-[700px]:hidden">
          <p className="pb-6 text-center text-3xl font-medium text-[#ffe1b3]">
            Our product benefits the . . .
          </p>
          {/* Tabs with fixed image space to prevent shifting */}
          <div className="mb-8">
            <div className="mx-auto flex justify-center px-4 md:px-0 min-[1024px]:space-x-20">
              {tabs.map(({ id, label }) => (
                <div key={id} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveTab(id)}
                    className={`rounded-lg px-4 py-2 text-lg font-medium transition md:text-2xl ${
                      activeTab === id
                        ? "bg-[#ffe1b3] text-black"
                        : "bg-stone-700 text-[#ffe1b3] hover:bg-stone-600"
                    }`}
                  >
                    {label}
                  </button>
                  <div className="mt-6 flex h-40 w-40 items-center justify-center">
                    {activeTab === id ? (
                      <img
                        src={`/images/${imageMap[id]}`}
                        alt={label}
                        className="h-full w-full rounded-lg object-contain shadow-lg"
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <ul className="list-inside list-disc space-y-2 text-[#ffe1b3]">
              {sections[activeTab].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Benefits Section */}
        <div className="min-[700px]:hidden">
          <p className="pb-6 text-center text-3xl font-medium">
            Our product benefits the . . .
          </p>
          {tabs.map((tab) => (
            <div key={tab.id} className="mb-6">
              <div className="text-[17pt] font-semibold text-gray-100">
                {tab.label}
              </div>
              <ul className="mb-16 mt-2 list-outside list-disc pl-5 text-gray-300">
                {sections[tab.id].map((item, index) => (
                  <li className="mb-4" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing body paragraphs */}
        <div className="pt-2">
          <p className="pb-4">
            <i>Urban Foot Notes</i> emerged from{" "}
            <a
              href="https://www.urbancruiseship.org"
              target="_blank"
              rel="noreferrer"
            >
              <i>Urban Cruise Ship</i>
            </a>{" "}
            's research on{" "}
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
    </div>
  );
}
