import { useState } from "react";
import PageTitle from "@/components/PageTitle";

// Next.js <Image> component for optimized images, lazy loading, and responsive images
import Image from "next/image";

function VideoPlayer({ src, poster }) {
  return (
    <div className="mx-auto mb-8 w-full max-w-screen-md px-4">
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        className="block w-full max-h-[520px] rounded-lg shadow-lg bg-black"
        
      />
    </div>
  );
}


export default function About() {
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
  const videoUrl = `${baseUrl}/ads/vid-about-us.mp4`;



console.log("videoUrl:", videoUrl);
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

<section aria-labelledby="overview-video" className="mx-auto max-w-screen-md">
  <h2 id="overview-video" className="text-center text-2xl font-semibold text-[#ffe1b3] mb-3">
    Our Reports
  </h2>
  <VideoPlayer src={videoUrl} />
  


  
</section>
      {/* Body content wrapper */}
      <div className="roboto-font mx-auto w-full max-w-screen-lg space-y-6 text-xl text-gray-100 max-[1040px]:px-4 md:text-2xl">
        {/* Introductory copy */}
        <section aria-labelledby="what-we-do" className="mx-auto max-w-prose leading-relaxed">
        <h2 id="what-we-do" className="sr-only">What we do</h2>
        <p className="pb-4">
          We produce standardized, address-level walkability reports that score access to 74 everyday services (plus 5 custom). Reports are directly comparable across addresses, helping agents, buyers, renters, and planners make better decisions.
        </p>
        <p>
          Our goal: reduce sprawl and traffic by supporting denser, mixed-use
          development. When daily needs are a short walk away, people spend less on
          transport and can invest more in better housing.
        </p>
      </section>

        {/* Desktop Benefits Section */}
        <div className="bg-[linear-gradient(to_right,rgba(90,90,90,0.1),rgba(90,90,90,0.5))] p-4 max-[700px]:hidden">
          <p className="pb-6 text-center text-3xl font-medium text-[#ffe1b3]">
            Our product benefits . . .
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
                        : "bg-stone-950 text-[#ffe1b3] hover:bg-[#1a1207]"
                    }`}
                  >
                    {label}
                  </button>
                  <div className="mt-6 flex h-40 w-40 items-center justify-center">
                    {activeTab === id ? (
                      // Next.js <Image> component for optimized images, lazy loading, and responsive images
                      <Image
                        // width & height req'd by Next.js to prevent layout shift
                        width={160} // size in pixels in browser, AWS S3 ver. same size
                        height={160} // size in pixels in browser, AWS S3 ver. same size
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
  <h2 className="pb-4 text-center text-2xl font-semibold">Our product benefits…</h2>
  <div className="space-y-3">
    {tabs.map((tab) => (
      <details key={tab.id} className="rounded-lg bg-stone-900/60 p-3">
        <summary className="cursor-pointer text-[17pt] font-semibold text-gray-100">
          {tab.label}
        </summary>
        <ul className="mt-3 list-disc pl-6 text-gray-300">
          {sections[tab.id].map((item, i) => <li key={i} className="mb-2">{item}</li>)}
        </ul>
      </details>
    ))}
  </div>
</div>


<section aria-labelledby="next-steps" className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
  <h2 id="next-steps" className="sr-only">Next steps</h2>
  <a href="/samples" className="rounded-lg bg-amber-300 px-5 py-2 font-semibold text-black hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300">View Samples</a>
  <a href="/order" className="rounded-lg bg-stone-800 px-5 py-2 font-semibold text-amber-200 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300">Order a Report</a>
  <a href="/contact" className="rounded-lg border border-amber-300 px-5 py-2 font-semibold text-amber-200 hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300">Talk to Us</a>
</section>

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
