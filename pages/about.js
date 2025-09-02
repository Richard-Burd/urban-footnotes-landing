import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

/* ---- static content (out of component) ---- */
const HOME_TITLE = "Our Mission";
const HOME_TEXT =
  "To enhance our society and planet's health, our reports display how many commonly-used services are within short walking distance of a given address — in a standardized, comparative format — incentivizing and promoting development that allows more residents to conveniently live without owning cars.";

const TABS = [
  { id: "real_estate", label: "Real Estate Professionals" },
  { id: "residents", label: "Local Residents" },
  { id: "city_planners", label: "City Planners" },
  { id: "government", label: "Government Employees" },
];

const SECTIONS = {
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
    "Reduce traffic",
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

const IMAGE_MAP = {
  real_estate: "about-page-icon-woman-with-key.png",
  residents: "about-page-icon-pedestrian-icon-mix.png",
  city_planners: "about-page-icon-blueprints.png",
  government: "about-page-icon-man-stamping.png",
};

/* ---- presentational helpers ---- */
const WRAP = "mx-auto max-w-screen-xl 2xl:max-w-[1600px] px-6 md:px-10";
const CARD = "rounded-[10px] group-hover:shadow-lg p-4 transition-shadow";
const SOFT_CARD = "rounded-[10px] p-4 transition-shadow group-hover:shadow-lg";

export default function About() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const baseUrl = (process.env.NEXT_PUBLIC_S3_BASE_URL || "").replace(
    /\/+$/,
    "",
  );

  return (
    <div className="roboto-font text-white ">
      {/* TITLE */}
      <div className="flex justify-center w-full">
        <div className="">
            <div className="">
              <PageTitle
                topTitle="About Us"
                textColor="text-white"
                shadowColor="title-shadow-about"
                logoColor="#d4d4d4ff"
                gradient="bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))]"
                mobileTitleCentered
                showLogo
              />
            </div>
          </div>
        </div>
      

      {/* GRID */}
      <main className={`grid grid-cols-12 gap-4 py-6 ${WRAP}`}>
        {/* Mission */}
        <section className="col-span-12 md:col-span-5">
          <div className="group overflow-hidden rounded-[10px]">
            <div className={`${CARD} bg-[rgba(126,120,29,0.4)]`}>
              <h2 className="page-title-shadow title-shadow-home my-2 text-center text-[32px] md:text-[40px]">
                {HOME_TITLE}
              </h2>
              <p className="px-4 pt-2 text-[clamp(1.05rem,3.6vw,1.25rem)] tracking-wide md:px-6">
                {HOME_TEXT}
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="col-span-12 md:col-span-7">
          <div className="group overflow-hidden rounded-[10px]">
            <div className={`${CARD} bg-blue-800/20`}>
              <h2 className="page-title-shadow title-shadow-home my-2 text-center text-[32px] md:text-[40px]">
                What We Do
              </h2>
              <div className="space-y-4 text-[clamp(1.05rem,3.6vw,1.25rem)] leading-relaxed">
                <p>
                  We produce standardized, address-level walkability reports
                  that score access to 74 everyday services (plus 5 custom).
                  Reports are directly comparable across addresses, helping
                  agents, buyers, renters, and planners make better decisions.
                </p>
                <p>
                  Our goal: reduce sprawl and traffic by supporting denser,
                  mixed-use development. When daily needs are a short walk away,
                  people spend less on transport and can invest more in better
                  housing.
                </p>
              </div>
            </div>
          </div>
        </section>

{/* Benefits (desktop) */}
<section className="col-span-12 lg:col-span-7 col-start-1 max-[400px]:hidden">
  <div className="group rounded-[10px] overflow-hidden">
    <div className="rounded-[10px] p-6 transition-shadow group-hover:shadow-lg bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))]">
      <p className="pb-6 text-center text-3xl font-medium text-[#ffe1b3]">
        Our product benefits . . .
      </p>

      {/* Buttons row */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 ">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            type="button"
            aria-pressed={activeTab === id}
            className={`rounded-lg px-4 py-2 text-lg font-medium transition md:text-2xl ${
              activeTab === id
                ? "bg-[#ffe1b3] text-black"
                : "bg-stone-950 text-[#ffe1b3] hover:bg-[#1a1207]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image left + list right */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        {/* Image box */}
        <div className="flex h-40 w-40 flex-shrink-0 items-center justify-center">
          <Image
            width={160}
            height={160}
            src={`${baseUrl}/${IMAGE_MAP[activeTab]}`}
            alt={TABS.find(t => t.id === activeTab)?.label}
            className="h-full w-full rounded-lg object-contain shadow-lg"
          />
        </div>

        {/* List */}
        <ul className="list-disc pl-5 text-[#ffe1b3] space-y-2 text-lg md:text-xl">
          {SECTIONS[activeTab].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


        {/* Benefits (mobile) */}
        <section className="col-span-12 min-[700px]:hidden">
          <div className="group overflow-hidden rounded-[10px]">
            <div className={CARD}>
              <p className="pb-6 text-center text-3xl font-medium">
                Our product benefits . . .
              </p>
              {TABS.map((tab) => (
                <div key={tab.id} className="mb-6">
                  <h3 className="text-[17pt] font-semibold">{tab.label}</h3>
                  <ul className="mb-10 mt-2 list-outside list-disc pl-5 text-stone-200">
                    {SECTIONS[tab.id].map((item) => (
                      <li className="mb-3" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Company History card */}
        <section className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-5 max-w-[7000px] justify-items-center">
          <div className="group overflow-hidden rounded-[10px]">
            <div className={`${CARD} bg-blue-800/20`}>
              <h2 className="page-title-shadow title-shadow-home my-2 text-center text-[32px] md:text-[40px]">
                Company History
              </h2>
              <div className="space-y-4 text-[clamp(1.05rem,3.6vw,1.25rem)] leading-relaxed">
                <p>
                  <i>Urban Foot Notes</i> emerged from research at {" "}
                  <a
                    href="https://www.urbancruiseship.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>Urban Cruise Ship</i>
                  </a>{" "}
                    on{" "}
                  <a
                    href="https://www.urbancruiseship.org/cities"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b>cities</b>
                  </a>{" "}
                  and interviews with real estate industry professionals and
                  potential users.
                </p>
                <p>
                  We saw a need for walkability and area reports that utilized  real researchers instead of just relying on big data. What
                  initially involved John, Jye and Roseanne became a nearly
                  two-year multiple-stage project involving all seven team
                  members. We have worked hard to refine our product with extensive research.
                </p>
                <p>
                  We hope our reports help as many people as possible live more
                  convenient and healthy lives, and reduce their polluting,
                  time-consuming dependence on cars.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
