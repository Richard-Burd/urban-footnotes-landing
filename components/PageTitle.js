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
  const titleBaseStyles = `${textColor} ${shadowColor} page-title-shadow roboto-font whitespace-normal break-normal tracking-wide [overflow-wrap:normal] [word-break:normal]`;
  const mobileTitleStyles = `flex-grow text-left ${titleBaseStyles} py-3 text-[55px]`;
  return (
    <div>
      <div id="desktop-version" className="hidden md:block">
        <div className={`${gradient} mb-8 w-full p-4`}>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="relative flex w-full items-start gap-4 sm:flex-row desktop:gap-8">
              {/* Logo */}
              {showLogo && (
                <div className="w-[min(30vw,345px)] min-w-[180px] shrink-0">
                  <Logo
                    type="ufn"
                    color={logoColor}
                    width="345"
                    height="214"
                    className="h-auto w-full"
                  />
                </div>
              )}

              {/* Title */}
              <div
                className={`mb-4 min-w-0 flex-grow text-left ${titleBaseStyles} text-[5.25rem] leading-none`}
              >
                {topTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-version" className="block md:hidden">
        <div className={`${gradient}`}>
          <div>
            {showLogo && (
              <div className="flex w-full justify-center px-4 py-6">
                <div className="w-[min(78vw,296px)] min-w-[200px] max-w-[296px]">
                  <Logo
                    type="ufn"
                    color={logoColor}
                    width="296"
                    height="183"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {mobileTitleCentered ? (
          <div className="px-2 leading-none">
            <div className={`${mobileTitleStyles} text-center`}>{topTitle}</div>
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
