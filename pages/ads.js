import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function Ads() {
  return (
    <div>
      <div className="w-full max-w-screen-lg">
        <center>
          <PageTitle
            topTitle="Advertisements"
            textColor="text-title-text-ads text-opacity-0" // this page has smaller text size
            shadowColor={`title-shadow-ads opacity-0`} // this page has smaller text size
            logoColor="#f6d7beff"
            gradient={
              "bg-[linear-gradient(to_right,rgba(59,45,24,0.1),rgba(113,67,21,0.8))]"
            }
            showLogo={true} // Integrates the logo
          />
          <div
            className={`title-shadow-ads page-title-shadow roboto-font flex-grow text-left text-7xl tracking-wide text-title-text-ads`}
          >
            Advertisements
          </div>
        </center>
        <center>
          <div className="roboto-font pb-4 pt-12 text-2xl tracking-wide text-stone-300 opacity-60 lg:pt-2 lg:text-4xl">
            Comming Soon...
          </div>
        </center>
      </div>
    </div>
  );
}
