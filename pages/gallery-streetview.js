import PageTitle from "@/components/PageTitle";
import SamplesButton from "@/components/SamplesButton";
import Gallery from "@/components/Gallery";

export default function GalleryStreetView() {
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

      {/* Explanation & Button to Property Report Scoreboard */}
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
                text="to see a list of our properties with metrics, categorized"
                link="/scoreboard"
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

      <Gallery
        title="Gallery of Streetscape Illustrations"
        viewType="streetView"
      />

      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
