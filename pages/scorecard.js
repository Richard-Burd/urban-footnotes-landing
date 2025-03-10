import PageTitle from "@/components/PageTitle";
import samplesData from "@/lib/samplesData";
import SamplesButton from "@/components/SamplesButton";

export default function Samples() {
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
      <center>
        <PageTitle
          topTitle="Product Samples"
          textColor="text-title-text-samples"
          shadowColor="title-shadow-samples"
          logoColor="#daffd1ff"
          gradient={
            "bg-[linear-gradient(to_right,rgba(59,80,35,0.1),rgba(61,113,21,0.5))]"
          }
          mobileTitleCentered={false}
          showLogo={true} // Integrates the logo
        />
      </center>

      {/* Explanation & Button to Property Report Scorecard */}
      <div className="mx-auto max-w-screen-lg items-center justify-center">
        <div className="max-[1030px]:mx-8">
          <div
            id="explanation-and-button"
            className="flex flex-col items-center justify-between lg:flex-row"
          >
            {/* Left Side: Explanation */}
            <div
              id="explanation"
              className="roboto-font mb-4 text-2.5xl text-gray-200 md:mr-16 lg:w-2/3"
            >
              <p className="mb-10">
                Samples are presented ranked by the number of service types (out
                of 74 total) within approximately 1/4 mile of the address shown
                (0.4 kilometer in metric versions), then by those within 2/5
                mile (0.7 kilometer in metric versions), and finally by
                Walkability Score.
              </p>
            </div>

            {/* Right Side: Button */}
            <div id="buttons" className="items-right flex flex-col">
              <SamplesButton
                title="Click Here"
                text="to see a gallery of renderings of our properties with metrics, categorized"
                link="/gallery"
              />
              <SamplesButton
                title="Click Here"
                text="to go back to the product samples page"
                link="/samples"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Mobile Property Report Scorecard */}
      <div id="property-report-scorecards">
        {/* Desktop Property Report Scorecard */}
        <div
          id="desktop-scorecard"
          className="mx-auto hidden max-w-screen-lg max-[1040px]:px-4 min-[1000px]:block"
        >
          <div className="pb-4 text-center text-[75px] text-title-text-samples">
            Property Report Scoreboard
          </div>
          <div className="pb-9">
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
                    <div
                      key={entry.address}
                      className="column-layout flex w-full items-center"
                    >
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
                    <div
                      key={entry.address}
                      className="column-layout flex w-full items-center"
                    >
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
                  ))}
                </div>
              </div>
            </div>

            {/* Less Walkable */}
            <div id="Less Walkable" className="rounded-b-[45px] pt-14">
              <div className="mb-2 border-b-4 border-x-slate-200">
                <div className="pt-3 text-right text-[40px] italic text-gray-200">
                  Less Walkable
                </div>
              </div>
              <div>
                <div className="column-layout flex flex-col">
                  {lessWalkableData.map((entry, index) => (
                    <div
                      key={entry.address}
                      className="column-layout flex w-full items-center"
                    >
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Property Report Scorecard */}
        <div id="mobilw-scorecard" className="hidden px-4 max-[1001px]:block">
          <div className="rounded-t-[45px] bg-[linear-gradient(to_right,rgba(0,28,0,0.5),rgba(61,113,21,0.5))] px-4 pb-4 pt-4 text-[42px] leading-[45px] text-title-text-samples">
            Property Report Scoreboard
          </div>
          <div className="rounded-b-[45px] bg-[linear-gradient(to_right,rgba(4,28,3,0.5),rgba(26,48,26,0.5))] pb-9">
            {/* Highly Walkable */}
            <div id="Highly Walkable" className="px-4">
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

                      {/* Walkability Data */}
                      <div className="column-layout pb-8">
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
            <div id="Somewhat Walkable" className="mt-8 px-4">
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

                      {/* Walkability Data */}
                      <div className="column-layout pb-8">
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
            <div id="Less Walkable" className="mt-8 px-4">
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

                      {/* Walkability Data */}
                      <div className="column-layout pb-8">
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
