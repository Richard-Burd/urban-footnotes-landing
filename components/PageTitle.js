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
  const titleBaseStyles = `${textColor} ${shadowColor} page-title-shadow roboto-font break-normal tracking-wide [text-wrap:balance]`;
  const mobileTitleStyles = `flex-grow text-left ${titleBaseStyles} py-3 text-[56px] md:text-8xl lg:mb-4`;
  return (
    <div>
      <div id="desktop-version" className="hidden desktop:block">
        <div className={`${gradient} mb-8 w-full p-4`}>
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="relative flex w-full items-center gap-8 sm:flex-row sm:items-end">
              {/* Logo */}
              {showLogo && (
                <div className="shrink-0">
                  <Logo
                    type="ufn"
                    color={logoColor}
                    width="345"
                    height="214"
                  />
                </div>
              )}

              {/* Title */}
              <div
                className={`mb-4 min-w-0 flex-grow text-left ${titleBaseStyles} text-8xl`}
              >
                {topTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-version" className="block desktop:hidden">
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
