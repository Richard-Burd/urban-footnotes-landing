import PageTitle from "./PageTitle";
import SamplesNavbar from "./SamplesNavbar";

export default function SamplesHeader() {
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
      <div
        id="blurb-and-samples-navbar"
        className="mx-auto max-w-screen-lg sm:flex"
      >
        <div
          id="explanation"
          className="roboto-font mb-4 text-2.5xl text-gray-200 max-[1036px]:ml-8 sm:mr-8 lg:w-2/3"
        >
          <p className="pt-2">
            Samples are presented ranked by the number of service types (out of
            74 total) within approximately 1/4 mile of the address shown (0.4
            kilometer in metric versions), then by those within 2/5 mile (0.7
            kilometer in metric versions), and finally by Walkability Score.
          </p>
        </div>
        <SamplesNavbar />
      </div>
    </div>
  );
}
