import { useState } from "react";
import PageTitle from "@/components/PageTitle";

// Next.js <Image> component for optimized images, lazy loading, and responsive images
import Image from "next/image";

export default function About() {
    const homeTitle = "Our Mission";
  const homeText =
    "To enhance our society and planet's health, our reports display how many commonly-used services are within short walking distance of a given address -- in a standardized, comparative format -- incentivizing and promoting development that allows more residents to conveniently live without owning cars.";

    
  const tabs = [
    { id: "real_estate", label: "Real Estate Professionals" },
    { id: "residents", label: "Local Residents" },
    { id: "city_planners", label: "City Planners" },
    { id: "government", label: "Government Employees" },
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
    city_planners: [
      "Make more neighborhood informed choices",
      "Reduce Traffic",
      "Resolve conflicts with data",
      "Highlight pedestrian access",
      "Put the focus on the community",
    ],
    government: [
      "Less traffic possible",
      "Less contention likely",
      "Less pollution possible",
      "Easier comparisons with other places",
    ],
  };

  const imageMap = {
    real_estate: "about-page-icon-woman-with-key.png",
    residents: "about-page-icon-pedestrian-icon-mix.png",
    city_planners: "about-page-icon-blueprints.png",
    government: "about-page-icon-man-stamping.png",
  };

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Base URL for images, set in environment variables for flexibility
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;

  return (
    <div className="space-y-8 text-white">
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

    {/* GRID CONTAINER */}
    <main className="mx-auto max-w-screen-xl 2xl:max-w-[1600px] grid grid-cols-12 gap-4 px-6 md:px-10 py-6">

      {/* MISSION (card, left column) */}
      <section className="col-span-12 md:col-span-6">
        <div className="relative group rounded-[10px] overflow-hidden">
          <div id="mission-statement-box"
               className="rounded-[10px] bg-[rgba(86,85,70,0.4)] p-4 transition-shadow group-hover:shadow-lg group-hover:bg-[rgba(86,85,70,0.6)]">
            <div id="mission-statement-title"
                 className="my-2 title-shadow-home page-title-shadow roboto-font text-center text-[32px] md:text-[40px]">
              {homeTitle}
            </div>
            <div className="roboto-font px-4 md:px-6 pb-2 pt-2 text-[clamp(1.1rem,3.6vw,1.25rem)] tracking-wide">
              <p>{homeText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO COPY (card, right column) */}
      <section className="col-span-12 md:col-span-6">
        <div className="relative group rounded-[10px] overflow-hidden">
          <div className="rounded-[10px] bg-stone-900/20 p-6 transition-shadow group-hover:shadow-lg group-hover:bg-stone-900/30">
            
                        <div id="what-we-do-title"
                 className="my-2 title-shadow-home page-title-shadow roboto-font text-center text-[32px] md:text-[40px]">
              What We Do
            </div>
            <div className="roboto-font leading-relaxed space-y-4 text-[clamp(1.05rem,3.6vw,1.25rem)]">
              <p>
                We produce standardized, address-level walkability reports that score access to 74 everyday
                services (plus 5 custom). Reports are directly comparable across addresses, helping agents,
                buyers, renters, and planners make better decisions.
              </p>
              <p>
                Our goal: reduce sprawl and traffic by supporting denser, mixed-use development. When daily needs
                are a short walk away, people spend less on transport and can invest more in better housing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS (desktop card spans full width) */}
      <section className="col-span-12 max-[700px]:hidden">
        <div className="relative group rounded-[10px] overflow-hidden">
          <div className="rounded-[10px] bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))] p-6 transition-shadow group-hover:shadow-lg">
            <p className="pb-6 text-center text-3xl font-medium text-[#ffe1b3]">Our product benefits . . .</p>

            {/* Tabs + image */}
            <div className="mb-8">
              <div className="mx-auto flex justify-center px-4 md:px-0 min-[1024px]:space-x-20">
                {tabs.map(({ id, label }) => (
                  <div key={id} className="flex flex-col items-center">
                    <button
                      onClick={() => setActiveTab(id)}
                      className={`rounded-lg px-4 py-2 text-lg font-medium transition md:text-2xl ${
                        activeTab === id
                          ? "bg-[#ffe1b3] text-black"
                          : "bg-stone-950 text-[#ffe1b3] hover:bg-[#1a1207]"
                      }`}
                    >
                      {label}
                    </button>
                    <div className="mt-6 flex h-40 w-40 items-center justify-center">
                      {activeTab === id ? (
                        <Image
                          width={160}
                          height={160}
                          src={`${baseUrl}/${imageMap[id]}`}
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

            {/* Bulleted list */}
            <div className="flex justify-center">
              <ul className="list-inside list-disc space-y-2 text-[#ffe1b3]">
                {sections[activeTab].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS (mobile card) */}
      <section className="col-span-12 min-[700px]:hidden">
        <div className="relative group rounded-[10px] overflow-hidden">
          <div className="rounded-[10px] bg-stone-900/20 p-6 transition-shadow group-hover:shadow-lg group-hover:bg-stone-900/30">
            <p className="pb-6 text-center text-3xl font-medium">Our product benefits . . .</p>
            {tabs.map((tab) => (
              <div key={tab.id} className="mb-6">
                <div className="text-[17pt] font-semibold">{tab.label}</div>
                <ul className="mb-10 mt-2 list-outside list-disc pl-5 text-stone-200">
                  {sections[tab.id].map((item, index) => (
                    <li className="mb-3" key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY HISTORY (card) */}
      <section className="col-span-12">
        <div className="relative group rounded-[10px] overflow-hidden">
          <div className="rounded-[10px] bg-stone-900/20 p-6 transition-shadow group-hover:shadow-lg group-hover:bg-stone-900/30">
            <div className="text-center text-3xl font-medium mb-6">Company History</div>
            <div className="space-y-4">
              <p>
                <i>Urban Foot Notes</i> emerged from{" "}
                <a href="https://www.urbancruiseship.org" target="_blank" rel="noreferrer"><i>Urban Cruise Ship</i></a>{" "}
                ’s research on{" "}
                <a href="https://www.urbancruiseship.org/cities" target="_blank" rel="noreferrer"><b>cities</b></a>{" "}
                and interviews with real estate industry professionals and potential users.
              </p>
              <p>
                The concept was simple, but no one else had done it. What initially involved John, Jye and Roseanne
                became a nearly two-year multiple-stage project involving all seven team members. That improved this
                unique, new product greatly but unfortunately also ran up the cost.
              </p>
              <p>
                We hope our reports help as many people as possible live more convenient and healthy lives, and reduce
                their polluting, time-consuming dependence on cars.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
);

}
