import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Ads() {
  // for animating the dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div id="header">
        {/* The Advertisements page title is unique in size and requires custom work */}
        {/* The <PageTitle.js /> component only renders for the Desktop version */}
        <div id="desktop-version" className="hidden min-[1000px]:block">
          <div className="w-full max-w-screen-lg">
            <div id="background-and-title">
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
            <div id="desktop-title" className="hidden min-[1000px]:block">
              <div className="flex justify-center">
                <div
                  id="page-title"
                  className={`title-shadow-ads page-title-shadow roboto-font -translate-y-[160px] translate-x-[180px] text-left text-[74px] tracking-wide text-title-text-ads`}
                >
                  Advertisements
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* This is a custom mobile version of the  <PageTitle.js /> component */}
        <div id="mobile-version" className="block min-[1000px]:hidden">
          <div className="bg-[linear-gradient(to_right,rgba(59,45,24,0.1),rgba(113,67,21,0.8))]">
            {/* Fixed-width container */}
            <div className="">
              {/* Wrapper for logo and title */}
              <div className="">
                {/* Logo */}

                <div className="w-screen">
                  {/* large mobile logo */}
                  <div className="block max-[360px]:hidden min-[999px]:hidden">
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
      </div>
      <div id="body" className="translate-y-[-100px]">
        <div className="max-lg:translate-y-[100px]">
          <div className="mx-auto max-w-[1024px] p-4">
            {/* Button 1 */}
            <div className="mx-auto mb-8 max-w-[600px]">
              <button
                onClick={() => toggleDropdown(1)}
                className={`w-full rounded-xl px-4 py-3 text-[25px] text-white transition-colors duration-300 ${
                  openDropdown === 1 ? "bg-[#aa622f]" : "bg-[#683816]" // orange-500
                }`}
              >
                Written transcript of Advertisement Coming Soon for Proposed
                Developments
              </button>
              <AnimatePresence>
                {openDropdown === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 space-y-4 overflow-hidden rounded-md bg-neutral-950 p-4"
                  >
                    <div className="mb-4">
                      <div className="mb-1 text-xl font-bold text-[#e0e0e0]">
                        Hook (0:00–0:10)
                      </div>
                      <div className="text-lg text-[#e0e0e0]">
                        What if your next development proposal came with a
                        story—the story of the neighborhood, told in data?
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-1 text-xl font-bold text-[#e0e0e0]">
                        Problem Definition (0:10–0:30)
                      </div>
                      <div className="text-lg text-[#e0e0e0]">
                        Too many projects start with incomplete data. Outdated
                        online listings. Empty directories. Missing the feel of
                        the block, or the shift happening two streets over.
                        That&apos;s where deals fall apart—or miss their mark.
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-1 text-xl font-bold text-[#e0e0e0]">
                        Solution Introduction (0:30–0:50)
                      </div>
                      <div className="text-lg text-[#e0e0e0]">
                        Urban Foot Notes delivers personal, investigative
                        neighborhood reports. We analyze business presence,
                        amenity access, land use, and walkability—so you can
                        propose your project with clarity and confidence. Our
                        researchers have been providing data-driven
                        environmental solutions since 2014. We can add to your
                        analysis with grounded, location-specific insight.
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-1 text-xl font-bold text-[#e0e0e0]">
                        Demonstration of Value (0:50–1:10)
                      </div>
                      <div className="text-lg text-[#e0e0e0]">
                        Our reports can strengthen presentations to development
                        authorities, zoning boards, citizens, city councils, and
                        investors. They can better answer buyers or renters who
                        ask, “What&apos;s it like around here?” You&apos;ll have
                        comprehensive data to work with.
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-1 text-xl font-bold text-[#e0e0e0]">
                        Call to Action (1:10–1:20)
                      </div>
                      <div className="text-lg text-[#e0e0e0]">
                        Support your next project with insight that speaks for
                        itself. Visit urbanfootnotes.com to see samples, order
                        your own report, or share any concerns with us.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Button 2 */}
            <div className="mx-auto max-w-[600px]">
              <button
                onClick={() => toggleDropdown(2)}
                className={`w-full rounded-xl px-4 py-3 text-[25px] text-white transition-colors duration-300 ${
                  openDropdown === 2 ? "bg-[#aa622f]" : "bg-[#683816]" // orange-500
                }`}
              >
                Written Transcript of Advertisement Coming Soon for Existing
                Developments
              </button>
              <AnimatePresence>
                {openDropdown === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 space-y-4 overflow-hidden rounded-md bg-neutral-950 p-4"
                  >
                    <div className="mb-4">
                      <div className="mb-1 text-xl font-bold text-[#e0e0e0]">
                        placeholder text
                      </div>
                      <div className="text-lg text-[#e0e0e0]"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
