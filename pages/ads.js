import PageTitle from "@/components/PageTitle";
import Logo from "@/components/Logo";

export default function Ads() {
  return (
    <div>
      {/* The Advertisements page title is unique in size and requires custom work */}
      {/* The <PageTitle.js /> component only renders for the Desktop version */}
      <div id="desktop-version" className="hidden min-[1000px]:block">
        <div className="w-full max-w-screen-lg">
          <div id="background-and-title">
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
          </div>
          <div id="desktop-title" className="hidden min-[1000px]:block">
            <div
              id="page-title"
              className={`title-shadow-ads page-title-shadow roboto-font flex-grow -translate-y-[260px] translate-x-[450px] text-left text-[74px] tracking-wide text-title-text-ads`}
            >
              Advertisements
            </div>
          </div>
          {/* <div
            id="mobile-title"
            className="block max-[10px]:hidden min-[999px]:hidden"
          >
            <center>
              <div
                id="page-title"
                className={`title-shadow-ads page-title-shadow roboto-font m-4 -translate-y-10 text-[40px] tracking-wide text-title-text-ads`}
              >
                <div className="w-full max-w-full overflow-hidden text-[5vw]">
                  Advertisements
                </div>
              </div>
            </center>
          </div> */}

          <center>
            <div className="roboto-font pb-4 text-2xl tracking-wide text-stone-300 opacity-60 lg:pt-2 lg:text-4xl">
              Comming Soon...
            </div>
          </center>
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
  );
}
