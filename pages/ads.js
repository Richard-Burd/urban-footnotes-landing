import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";
import { useState } from "react";
import Image from "next/image";

export default function Ads() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const [active, setActive] = useState("button1");
  return (
    <div>
      {/* The Advertisements page title is unique in size and requires custom work */}
      {/* The <PageTitle.js /> component only renders for the Desktop version */}
      <div
        id="desktop-titleblock-version"
        className="hidden min-[1000px]:block"
      >
        <div className="w-full max-w-screen-lg">
          <div id="background-and-title">
            <div className="[min-width:1000px]:hidden">
              <Image
                src={`${baseUrl}/advertisements-custom-header.svg`}
                alt={`picture of Advertisements masthead`}
                width={1024} // true width controlled by parent element
                height={1} // true height tied to width
              />
            </div>
            <div className="hidden max-[999px]:block">
              <PageTitle
                topTitle="a a a a a a a" // creates necessary spacing for bg title to span full width
                textColor="text-title-text-ads text-opacity-0" // this page has smaller text size
                shadowColor={`title-shadow-ads opacity-0`} // this page has smaller text size
                logoColor="#f6d7beff"
                gradient={
                  "bg-[linear-gradient(to_right,rgba(59,45,24,0.1),rgba(113,67,21,0.8))]"
                }
                showLogo={true} // Integrates the logo
              />
            </div>
          </div>
        </div>
      </div>
      {/* This is a custom mobile version of the  <PageTitle.js /> component */}
      <div id="mobile-titleblock-version" className="block min-[1000px]:hidden">
        <div className="bg-[linear-gradient(to_right,rgba(59,45,24,0.1),rgba(113,67,21,0.8))]">
          {/* Fixed-width container */}
          <div className="">
            {/* Wrapper for logo and title */}
            <div className="">
              {/* Logo */}

              <div className="w-screen">
                {/* large mobile logo */}
                <div className="block max-[360px]:hidden min-[1000px]:hidden">
                  <div className="py-6">
                    <center>
                      <Logo color="#f6d7beff" width="296" height="183" />
                    </center>
                  </div>
                </div>
                {/* medium mobile logo */}
                <div className="block max-[280px]:hidden min-[361px]:hidden">
                  <div className="py-6">
                    <center>
                      <Logo color="#f6d7beff" width="240" height="150" />
                    </center>
                  </div>
                </div>
                {/* small mobile logo */}
                <div className="block max-[100px]:hidden min-[281px]:hidden">
                  <div className="py-6">
                    <center>
                      <Logo color="#f6d7beff" width="200" height="124" />
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div
            id="page-title"
            className={`title-shadow-ads page-title-shadow roboto-font m-4 text-[40px] tracking-wide text-title-text-ads`}
          >
            <div className="w-full max-w-full overflow-hidden text-[9vw]">
              Advertisements
            </div>
          </div>
        </center>
      </div>
      <div
        id="buttons-and-content"
        className="flex items-center justify-center"
      >
        <div className="mx-auto mt-16 max-w-4xl p-4">
          <div className="flex flex-col gap-0 sm:flex-row">
            <div className="max-w-[280px]">
              <button
                onClick={() => setActive("button1")}
                className={`${
                  active === "button1" ? "bg-[#ba813cff]" : "bg-transparent"
                }`}
              >
                <div
                  className={
                    "m-6 rounded-xl bg-[#683816ff] p-5 text-4xl text-orange-100"
                  }
                  style={{
                    boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.8)", // x-offset, y-offset, blur, color
                    padding: "16px",
                    borderRadius: "12px",
                  }}
                >
                  Existing Projects
                </div>
              </button>
            </div>
            <div className="max-w-[280px]">
              <button
                onClick={() => setActive("button2")}
                className={`${
                  active === "button2" ? "bg-[#ba813cff]" : "bg-transparent"
                }`}
              >
                <div
                  className={
                    "m-6 rounded-xl bg-[#683816ff] p-5 text-4xl text-orange-100"
                  }
                  style={{
                    boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.8)", // x-offset, y-offset, blur, color
                    padding: "16px",
                    borderRadius: "12px",
                  }}
                >
                  Proposed Projects
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="displayed text" className="max-w-[1000px]">
        {active === "button1" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button2" && (
          <div id="paragraphs" className="columns-1 p-4 text-gray-200">
            <div className="mb-8 text-center text-[30px] md:text-[45px]">
              What if your next development proposal came with a story—the story
              of the neighborhood, told in data?
            </div>
            <div className="mb-8 text-center text-[23px]">
              Too many projects start with incomplete data. Outdated online
              listings. Empty directories. Missing the feel of the block, or the
              shift happening two streets over. That's where deals fall apart—or
              miss their mark.
            </div>
            <div className="mb-8 text-center text-[23px]">
              Urban Foot Notes delivers personal, investigative neighborhood
              reports. We analyze business presence, amenity access, land use,
              and walkability—so you can propose your project with clarity and
              confidence. Our researchers have been providing data-driven
              environmental solutions since 2014. We can add to your analysis
              with grounded, location-specific insight.
            </div>
            <div className="mb-8 text-center text-[23px]">
              Our reports can strengthen presentations to development
              authorities, zoning boards, citizens, city councils, and
              investors. They can better answer buyers or renters who ask,
              “What's it like around here?” You'll have comprehensive data to
              work with.
            </div>
            <div className="mb-8 text-center text-[23px]">
              Support your next project with insight that speaks for itself.
              Visit urbanfootnotes.com to see samples, order your own report, or
              share any concerns with us.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
