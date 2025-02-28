import Logo from "./Logo";

export default function PageTitle({
  topTitle,
  textColor,
  logoColor,
  shadowColor,
  gradient,
  mobileTitleCentered = false,
  showLogo = false,
}) {
  const mobileTitleStyles = `flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-[56px] tracking-wide lg:mb-4 md:text-8xl py-3`;
  return (
    <div>
      <div id="desktop-version" className="hidden min-[1000px]:block">
        <div className="w-full max-w-screen-lg">
          <div className={`${gradient} mb-8 flex justify-center p-4`}>
            {/* Fixed-width container */}
            <div className="mx-auto w-full px-6">
              {/* Wrapper for logo and title */}
              <div className="relative flex w-full items-center sm:flex-row sm:items-end">
                {/* Logo */}
                {showLogo && (
                  <div className="mr-12">
                    <Logo color={logoColor} width="345" height="214" />
                  </div>
                )}

                {/* Title */}
                <div
                  className={`flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font mb-4 text-8xl tracking-wide`}
                >
                  {topTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-version" className="block min-[1000px]:hidden">
        <div className={`${gradient}`}>
          {/* Fixed-width container */}
          <div className="">
            {/* Wrapper for logo and title */}
            <div className="">
              {/* Logo */}
              {showLogo && (
                <div className="w-screen">
                  {/* large mobile logo */}
                  <div className="block max-[360px]:hidden min-[999px]:hidden">
                    <div className="py-6">
                      <center>
                        <Logo color={logoColor} width="296" height="183" />
                      </center>
                    </div>
                  </div>
                  {/* medium mobile logo */}
                  <div className="block max-[280px]:hidden min-[361px]:hidden">
                    <div className="py-6">
                      <center>
                        <Logo color={logoColor} width="240" height="150" />
                      </center>
                    </div>
                  </div>
                  {/* small mobile logo */}
                  <div className="block max-[100px]:hidden min-[281px]:hidden">
                    <div className="py-6">
                      <center>
                        <Logo color={logoColor} width="200" height="124" />
                      </center>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* if mobileTitleCentered = false, else show */}
        {mobileTitleCentered ? (
          <div className="px-2 leading-none">
            <div className={mobileTitleStyles}>
              <center>{topTitle}</center>
            </div>
          </div>
        ) : (
          <div className="px-3 leading-none">
            <div className={mobileTitleStyles}>{topTitle}</div>
          </div>
        )}
      </div>
    </div>
  );
}
