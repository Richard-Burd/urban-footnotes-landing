import { useRouter } from "next/router";

import Image from "next/image";
import samplesData from "@/lib/samplesData";

export default function Gallery({ title, viewType }) {
  // scroll to the top of the page
  const router = useRouter();
  const scrollToTop = () => {
    router.replace(router.asPath);
  };

  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  // Filter & sort the "Highly Walkable" data
  const highlyWalkableData = samplesData
    .filter((entry) => entry.category === "Highly Walkable")
    .sort((a, b) => Number(a.categoryRank) - Number(b.categoryRank)); // Sort by categoryRank (converted to a number)

  // Filter & sort the "Less Walkable" data
  const somewhatWalkableData = samplesData
    .filter((entry) => entry.category === "Somewhat Walkable")
    .sort((a, b) => Number(a.categoryRank) - Number(b.categoryRank)); // Sort by categoryRank (converted to a number)

  // Filter & sort the "Less Walkable" data
  const lessWalkableData = samplesData
    .filter((entry) => entry.category === "Less Walkable")
    .sort((a, b) => Number(a.categoryRank) - Number(b.categoryRank)); // Sort by categoryRank (converted to a number)

  return (
    <div>
      {/* Desktop & Mobile Property Report Scoreboard */}
      <div id="property-report-scoreboards">
        {/* Desktop Property Report Scoreboard */}
        <div
          id="desktop-scoreboard"
          className="mx-auto hidden max-w-screen-lg max-[1040px]:px-4 min-[1000px]:block"
        >
          <div>
            {/* Highly Walkable */}
            <div id="Highly Walkable" className="">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[40px] italic text-gray-200">
                  Highly Walkable
                </div>
              </div>
              <div>
                <div className="column-layout flex flex-col">
                  {highlyWalkableData.map((entry, index) => (
                    <div key={entry.address}>
                      <div className="column-layout flex w-full items-center">
                        {/* Address */}
                        <div className="column-layout w-full pr-12 text-right">
                          <div
                            key={index}
                            className="-ml-10 text-[26px] leading-[45px] text-gray-200"
                          >
                            {entry.address}
                          </div>
                        </div>

                        {/* Walkability Data */}
                        <div className="column-layout">
                          <div className="flex w-full gap-4 text-center text-[24px] font-semibold leading-[34px] text-gray-800">
                            <div className="mx-[4px] w-12 bg-[#73e369ff] pb-[2px]">
                              {entry.greenNear}
                            </div>
                            <div className="mx-[4px] w-12 bg-[#f7fc70ff]">
                              {entry.yellowFarther}
                            </div>
                            <div className="mx-[4px] w-12 bg-[#e37569ff]">
                              {entry.redDistant}
                            </div>
                            <div className="mx-[4px] w-12 rounded-[10px] bg-[#cbd4e0ff] text-[#1f244dff]">
                              {entry.walkabilityScore}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* If there is a viewType, go ahead and render it */}
                      {entry[viewType] ? (
                        <div key={entry[viewType]} className="mb-28 mt-2">
                          <Image
                            src={`${baseUrl}/${entry[viewType]}`}
                            alt={`picture of ${entry[viewType]}`}
                            width={1200} // true width controlled by parent element
                            height={1} // true height tied to width
                          />
                          <button
                            onClick={scrollToTop}
                            className="text-lg text-gray-300"
                          >
                            Back to top of page
                          </button>
                        </div>
                      ) : (
                        // If there is no viewType, add some space
                        <div className="mb-20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Somewhat Walkable */}
            <div id="Somewhat Walkable" className="pt-14">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[40px] italic text-gray-200">
                  Somewhat Walkable
                </div>
              </div>
              <div>
                <div className="column-layout flex flex-col">
                  {somewhatWalkableData.map((entry, index) => (
                    <div key={entry.address}>
                      <div className="column-layout flex w-full items-center">
                        {/* Address */}
                        <div className="column-layout w-full pr-12 text-right">
                          <div
                            key={index}
                            className="-ml-10 text-[26px] leading-[45px] text-gray-200"
                          >
                            {entry.address}
                          </div>
                        </div>

                        {/* Walkability Data */}
                        <div className="column-layout">
                          <div className="flex w-full gap-4 text-center text-[24px] font-semibold leading-[34px] text-gray-800">
                            <div className="mx-[4px] w-12 bg-[#73e369ff] pb-[2px]">
                              {entry.greenNear}
                            </div>
                            <div className="mx-[4px] w-12 bg-[#f7fc70ff]">
                              {entry.yellowFarther}
                            </div>
                            <div className="mx-[4px] w-12 bg-[#e37569ff]">
                              {entry.redDistant}
                            </div>
                            <div className="mx-[4px] w-12 rounded-[10px] bg-[#cbd4e0ff] text-[#1f244dff]">
                              {entry.walkabilityScore}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* If there is a viewType, go ahead and render it */}
                      {entry[viewType] ? (
                        <div key={entry[viewType]} className="mb-28 mt-2">
                          <Image
                            src={`${baseUrl}/${entry[viewType]}`}
                            alt={`picture of ${entry[viewType]}`}
                            width={1200} // true width controlled by parent element
                            height={1} // true height tied to width
                          />
                          <button
                            onClick={scrollToTop}
                            className="text-lg text-gray-300"
                          >
                            Back to top of page
                          </button>
                        </div>
                      ) : (
                        // If there is no viewType, add some space
                        <div className="mb-20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Less Walkable */}
            <div id="Less Walkable" className="rounded-b-[45px] px-10 pt-14">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[40px] italic text-gray-200">
                  Less Walkable
                </div>
              </div>
              <div>
                <div className="column-layout flex flex-col">
                  {lessWalkableData.map((entry, index) => (
                    <div key={entry.address}>
                      <div className="column-layout flex w-full items-center">
                        {/* Address */}
                        <div className="column-layout w-full pr-12 text-right">
                          <div
                            key={index}
                            className="-ml-10 text-[26px] leading-[45px] text-gray-200"
                          >
                            {entry.address}
                          </div>
                        </div>

                        {/* Walkability Data */}
                        <div className="column-layout">
                          <div className="flex w-full gap-4 text-center text-[24px] font-semibold leading-[34px] text-gray-800">
                            <div className="mx-[4px] w-12 bg-[#73e369ff] pb-[2px]">
                              {entry.greenNear}
                            </div>
                            <div className="mx-[4px] w-12 bg-[#f7fc70ff]">
                              {entry.yellowFarther}
                            </div>
                            <div className="mx-[4px] w-12 bg-[#e37569ff]">
                              {entry.redDistant}
                            </div>
                            <div className="mx-[4px] w-12 rounded-[10px] bg-[#cbd4e0ff] text-[#1f244dff]">
                              {entry.walkabilityScore}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* If there is a viewType, go ahead and render it */}
                      {entry[viewType] ? (
                        <div key={entry[viewType]} className="mb-28 mt-2">
                          <Image
                            src={`${baseUrl}/${entry[viewType]}`}
                            alt={`picture of ${entry[viewType]}`}
                            width={1200} // true width controlled by parent element
                            height={1} // true height tied to width
                          />
                          <button
                            onClick={scrollToTop}
                            className="text-lg text-gray-300"
                          >
                            Back to top of page
                          </button>
                        </div>
                      ) : (
                        // If there is no viewType, add some space
                        <div className="mb-20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Property Report Scoreboard */}
        <div id="mobile-scoreboard" className="hidden px-4 max-[1001px]:block">
          <div className="pb-9">
            {/* Highly Walkable */}
            <div id="Highly Walkable" className="">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[27px] italic text-gray-200">
                  Highly Walkable
                </div>
              </div>
              <div>
                <div className="column-layout">
                  {highlyWalkableData.map((entry, index) => (
                    <div key={entry.address} className="column-layout">
                      {/* Address */}
                      <div className="column-layout">
                        <div
                          key={index}
                          className="pb-2 text-[24px] leading-[30px] text-gray-200"
                        >
                          {entry.address}
                        </div>
                      </div>

                      {/* If there is a viewType, go ahead and render it */}
                      {entry[viewType] ? (
                        <div key={entry[viewType]} className="mb-4 mt-2">
                          <Image
                            src={`${baseUrl}/${entry[viewType]}`}
                            alt={`picture of ${entry[viewType]}`}
                            width={1200} // true width controlled by parent element
                            height={1} // true height tied to width
                          />
                        </div>
                      ) : (
                        // If there is no viewType, add some space
                        <div className="mb-20"></div>
                      )}

                      {/* Walkability Data */}
                      <div className="column-layout pb-24">
                        <div className="flex w-full justify-end gap-2 text-center text-[21px] font-semibold leading-[27px] text-gray-800">
                          <div className="mx-[2px] w-9 bg-[#73e369ff] pb-[2px]">
                            {entry.greenNear}
                          </div>
                          <div className="mx-[2px] w-9 bg-[#f7fc70ff]">
                            {entry.yellowFarther}
                          </div>
                          <div className="mx-[2px] w-9 bg-[#e37569ff]">
                            {entry.redDistant}
                          </div>
                          <div className="mx-[2px] w-9 rounded-[7px] bg-[#cbd4e0ff] text-[#1f244dff]">
                            {entry.walkabilityScore}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Somewhat Walkable */}
            <div id="Somewhat Walkable" className="mt-8">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[27px] italic text-gray-200">
                  Somewhat Walkable
                </div>
              </div>
              <div>
                <div className="column-layout">
                  {somewhatWalkableData.map((entry, index) => (
                    <div key={entry.address} className="column-layout">
                      {/* Address */}
                      <div className="column-layout">
                        <div
                          key={index}
                          className="pb-2 text-[24px] leading-[30px] text-gray-200"
                        >
                          {entry.address}
                        </div>
                      </div>

                      {/* If there is a viewType, go ahead and render it */}
                      {entry[viewType] ? (
                        <div key={entry[viewType]} className="mb-4 mt-2">
                          <Image
                            src={`${baseUrl}/${entry[viewType]}`}
                            alt={`picture of ${entry[viewType]}`}
                            width={1200} // true width controlled by parent element
                            height={1} // true height tied to width
                          />
                        </div>
                      ) : (
                        // If there is no viewType, add some space
                        <div className="mb-20"></div>
                      )}

                      {/* Walkability Data */}
                      <div className="column-layout pb-24">
                        <div className="flex w-full justify-end gap-2 text-center text-[21px] font-semibold leading-[27px] text-gray-800">
                          <div className="mx-[2px] w-9 bg-[#73e369ff] pb-[2px]">
                            {entry.greenNear}
                          </div>
                          <div className="mx-[2px] w-9 bg-[#f7fc70ff]">
                            {entry.yellowFarther}
                          </div>
                          <div className="mx-[2px] w-9 bg-[#e37569ff]">
                            {entry.redDistant}
                          </div>
                          <div className="mx-[2px] w-9 rounded-[7px] bg-[#cbd4e0ff] text-[#1f244dff]">
                            {entry.walkabilityScore}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Less Walkable */}
            <div id="Less Walkable" className="mt-8">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[27px] italic text-gray-200">
                  Less Walkable
                </div>
              </div>
              <div>
                <div className="column-layout">
                  {lessWalkableData.map((entry, index) => (
                    <div key={entry.address} className="column-layout">
                      {/* Address */}
                      <div className="column-layout">
                        <div
                          key={index}
                          className="pb-2 text-[24px] leading-[30px] text-gray-200"
                        >
                          {entry.address}
                        </div>
                      </div>

                      {/* If there is a viewType, go ahead and render it */}
                      {entry[viewType] ? (
                        <div key={entry[viewType]} className="mb-4 mt-2">
                          <Image
                            src={`${baseUrl}/${entry[viewType]}`}
                            alt={`picture of ${entry[viewType]}`}
                            width={1200} // true width controlled by parent element
                            height={1} // true height tied to width
                          />
                        </div>
                      ) : (
                        // If there is no viewType, add some space
                        <div className="mb-20"></div>
                      )}

                      {/* Walkability Data */}
                      <div className="column-layout pb-24">
                        <div className="flex w-full justify-end gap-2 text-center text-[21px] font-semibold leading-[27px] text-gray-800">
                          <div className="mx-[2px] w-9 bg-[#73e369ff] pb-[2px]">
                            {entry.greenNear}
                          </div>
                          <div className="mx-[2px] w-9 bg-[#f7fc70ff]">
                            {entry.yellowFarther}
                          </div>
                          <div className="mx-[2px] w-9 bg-[#e37569ff]">
                            {entry.redDistant}
                          </div>
                          <div className="mx-[2px] w-9 rounded-[7px] bg-[#cbd4e0ff] text-[#1f244dff]">
                            {entry.walkabilityScore}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
