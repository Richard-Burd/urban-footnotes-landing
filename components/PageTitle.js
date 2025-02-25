import Logo from "./Logo";

export default function PageTitle({
  topTitle,
  textColor,
  logoColor,
  shadowColor,
  gradient,
  showLogo = false,
}) {
  return (
    <div>
      <div id="desktop-version" className="hidden min-[1000px]:block">
        <div className="w-full max-w-screen-lg">
          <div
            className={`${gradient} flex justify-center p-4 lg:mx-0 lg:mb-8`}
          >
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
                  className={`flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl tracking-wide sm:text-5xl lg:mb-4 lg:text-8xl`}
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
                <div>
                  {/* large mobile logo */}
                  <div className="block max-[359px]:hidden min-[999px]:hidden">
                    <div className="py-5">
                      <Logo color={logoColor} width="296" height="183" />
                    </div>
                  </div>
                  {/* medium mobile logo */}
                  <div className="block max-[280px]:hidden min-[358px]:hidden">
                    <div className="py-5">
                      <Logo color={logoColor} width="240" height="150" />
                    </div>
                  </div>
                  {/* small mobile logo */}
                  <div className="block max-[100px]:hidden min-[279px]:hidden">
                    <div className="py-5">
                      <Logo color={logoColor} width="200" height="124" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Title */}
        <div
          className={`flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl tracking-wide sm:text-5xl lg:mb-4 lg:text-8xl`}
        >
          {topTitle}
        </div>
      </div>
    </div>
  );
}
