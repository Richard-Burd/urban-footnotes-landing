import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";
import { useState } from "react";
import Image from "next/image";

// the is the custom ads button for this page
function SelectableButton({ activeKey, active, setActive, title, subtitle }) {
  return (
    <div className="max-w-[280px]">
      <button
        onClick={() => setActive(activeKey)}
        className={`${active === activeKey ? "bg-[#ba813cff]" : "bg-transparent"}`}
      >
        <div
          className="m-3 flex items-center rounded-xl bg-[#683816ff] text-orange-100 lg:m-6 lg:min-h-[110px]"
          style={{
            boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.8)",
            padding: "6px",
            borderRadius: "12px",
          }}
        >
          <div id="text-element" className="sm:px-2">
            <div className="text-[17px] lg:text-[25px]">{title}</div>
            <div className="text-[17px] lg:text-[25px]">{subtitle}</div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Ads() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const [active, setActive] = useState("button6");
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
        id="new-buttons-and-content"
        className="mt-8 text-[29px] text-orange-100"
      >
        <div className="mx-10 lg:mx-0">
          <div
            id="buttons-array"
            className="flex flex-col items-center sm:w-full sm:flex-row sm:justify-between"
          >
            <div id="first-row" className="flex sm:block">
              <div className="">
                <SelectableButton
                  activeKey="button1"
                  active={active}
                  setActive={setActive}
                  title="Buyers / Renters"
                  subtitle="Audio"
                />
              </div>
              <div className="">
                <SelectableButton
                  activeKey="button2"
                  active={active}
                  setActive={setActive}
                  title="Buyers / Renters"
                  subtitle="Text Only"
                />
              </div>
            </div>

            <div id="second-row" className="flex sm:block">
              <div className="">
                <SelectableButton
                  activeKey="button3"
                  active={active}
                  setActive={setActive}
                  title="Existing Projects"
                  subtitle="Audio"
                />
              </div>
              <div className="">
                <SelectableButton
                  activeKey="button4"
                  active={active}
                  setActive={setActive}
                  title="Existing Projects"
                  subtitle="Text Only"
                />
              </div>
            </div>

            <div id="third-row" className="flex sm:block">
              <div className="">
                <SelectableButton
                  activeKey="button5"
                  active={active}
                  setActive={setActive}
                  title="Proposed Projects"
                  subtitle="Audio (1:10)"
                />
              </div>
              <div className="">
                <SelectableButton
                  activeKey="button6"
                  active={active}
                  setActive={setActive}
                  title="Proposed Projects"
                  subtitle="Text Only"
                />
              </div>
            </div>

            <div id="fourth-row" className="flex sm:block">
              <div className="">
                <SelectableButton
                  activeKey="button7"
                  active={active}
                  setActive={setActive}
                  title="City Planners"
                  subtitle="Audio"
                />
              </div>
              <div className="">
                <SelectableButton
                  activeKey="button8"
                  active={active}
                  setActive={setActive}
                  title="City Planners"
                  subtitle="Text Only"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="displayed text" className="mt-2 max-w-[1000px]">
        {active === "button1" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button2" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button3" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button4" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button5" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button6" && (
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
        {active === "button7" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button8" && (
          <div id="paragraphs" className="columns-1 p-4 text-gray-200">
            <div className="mb-8 text-center text-[30px] md:text-[45px]">
              Ever wish your city could perform better by using a new tool? A
              reliable tool. One that no one can argue with.
            </div>
            <div className="mb-8 text-center text-[23px]">
              Now you face ongoing arguments. Constituents want different
              policies. Wielding notions as if they were facts. Can anyone agree
              on anything?
            </div>
            <div className="mb-8 text-center text-[23px]">
              Urban Foot Notes can provide neighborhood reports for any given
              address. We describe pedestrian access to services and businesses
              commonly desired by residents. We even include the percentage of
              residents who typically use such services. Our list is
              standardized, for comparative purposes. With some flexibility, to
              accommodate all addresses.
            </div>
            <div className="mb-8 text-center text-[23px]">
              Our reports meet Urban Cruise Ship-level independent quality
              standards. Each report's checklist of services available shows
              what is needed and not. They show likely impact on pedestrian and
              vehicle traffic. Which are consequences that often get debated the
              most.
            </div>
            <div className="mb-8 text-center text-[23px]">
              You can ask developers to provide an Urban Foot Notes report.
              Maybe both "Before" and "After" reports, to show the difference
              their projects would make. Visit urbanfootnotes.com to see
              samples, order a report, or share any concerns with us.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
