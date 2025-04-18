import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";
import { useState } from "react";
import Image from "next/image";

// the is the custom ads button for this page
function SelectableButton({ activeKey, active, setActive, title, subtitle }) {
  const isActive = active === activeKey;
  return (
    <div className="">
      <button
        onClick={() => setActive(activeKey)}
        className={`${active === activeKey ? "bg-[#ba813cff]" : "bg-transparent"}`}
      >
        <div
          className="m-3 flex items-center rounded-xl bg-[#683816ff] text-orange-100 lg:m-5"
          style={{
            padding: "6px",
            borderRadius: "12px",
            ...(isActive && { boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.8)" }),
          }}
        >
          <div id="text-element" className="sm:px-2">
            <div className="text-[17px] lg:text-[24px]">{title}</div>
            <div className="text-[17px] lg:text-[24px]">{subtitle}</div>
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
          <div id="paragraphs" className="columns-1 p-4 text-gray-200">
            <div className="mb-8 text-center text-[30px] md:text-[45px]">
            Want to spend less on driving—and more on living?
Start by choosing the right neighborhood.

            </div>
            <div className="mb-8 text-center text-[23px]">
            You can only walk so far without resorting to a vehicle.
But what if daily errands, food, and fun were all just steps from home?
How do you find places like that?

            </div>
            <div className="mb-8 text-center text-[23px]">
              Can you walk to what you need? Do people use the same places you
              would? Is the neighborhood changing?
            </div>
            <div className="mb-8 text-center text-[23px]">
              Without those answers— you’re left guessing.
            </div>
            <div className="mb-8 text-center text-[23px]">
            An Urban Foot Notes report gives you a scored, rating of pedestrian access to 
commonly-desired services, showing how easy it is to live at an address without needing to drive.

            </div>
            <div className="mb-8 text-center text-[23px]">
            It answers the big question: “What’s it really like to live there?”
A higher walk score means more freedom, better health, and lower costs.

            </div>
            <div className="mb-8 text-center text-[23px]">
            Ask your agent, landlord, or builder for an Urban Foot Notes report.
            Or visit urbanfootnotes.com to check out sample reports yourself.
            </div>
          </div>
        )}
        {active === "button3" && (
          <div className="flex items-center justify-center text-3xl font-medium text-gray-200">
            Coming soon!
          </div>
        )}
        {active === "button4" && (
          <div id="paragraphs" className="columns-1 p-4 text-gray-200">
            <div className="mb-8 text-center text-[30px] md:text-[45px]">
            Trying to attract the right buyers or renters?

            </div>
            <div className="mb-8 text-center text-[23px]">
            People often lack insight on how an address’ neighborhood meets their needs. 
That's when hasty, less-than-ideal judgements get made.

            </div>
            <div className="mb-8 text-center text-[23px]">
            Urban Foot Notes delivers standardized, address-specific, comparative, neighborhood reports.

            </div>
            <div className="mb-8 text-center text-[23px]">
            We describe pedestrian access to services and businesses that many residents desire.
This is scored.

            </div>
            <div className="mb-8 text-center text-[23px]">
            Walkability means convenience, lower car costs, and a better day-to-day life.
            </div>
            <div className="mb-8 text-center text-[23px]">
            That translates into higher satisfaction—and more money freed up for housing.            </div>
          
            <div className="mb-8 text-center text-[23px]">
            So, providing an Urban Foot Notes report can attract and please your most preferred residents.

            </div>
            <div className="mb-8 text-center text-[23px]">
            Visit urbanfootnotes.com to see samples, contact us, or order your report. 

            </div>
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
            What if you could add a story to your development proposal—its neighborhood's story, told in data?

            </div>
            <div className="mb-8 text-center text-[23px]">
            Too many projects start with incomplete neighborhood data. That’s where deals can fall apart—or additional opportunities get missed.
            </div>
            <div className="mb-8 text-center text-[23px]">
            Urban Foot Notes delivers personal, investigative neighborhood reports.
We analyze business presence, amenity access, land use, and walkability—so you can propose your project with clarity and confidence. 

            </div>
            <div className="mb-8 text-center text-[23px]">
            Our reports strengthen your presentations—to development authorities, zoning boards, citizens, city councils, investors and others. They will see a report that will likely attract more buyers and renters. 
            </div>
            <div className="mb-8 text-center text-[23px]">
            Support your next project with the targeted data our reports provide.
            Visit urbanfootnotes.com to see samples, contact us, or order your report. 
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
            Tired of the same fights over traffic and density?
Blame’s easy. Solutions aren’t.

            </div>
            <div className="mb-8 text-center text-[23px]">
              Sprawling NIMBYs battle developers’ densities.
Now often unpleasant compromises seem like the only path forward.

            </div>
            <div className="mb-8 text-center text-[23px]">
              Urban Foot Notes offers standardized, comparative, address-specific neighborhood reports,
describing pedestrian access to commonly-used services and businesses.
 including the percentage of those typically using such services.
It’s all scored in the report.

            </div>
            <div className="mb-8 text-center text-[23px]">
            A higher score means more walking, and less driving.
The data can shift the discussion to facts. 

            </div>
            <div className="mb-8 text-center text-[23px]">
            You can ask or require developers to provide an Urban Foot Notes report.
            Visit urbanfootnotes.com to see samples, contact us, or order a report. 
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
