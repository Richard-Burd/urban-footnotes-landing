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
    <div className={`${gradient} flex justify-center p-4 lg:mx-0 lg:mb-8`}>
      {/* Fixed-width container */}
      <div className="mx-auto w-full max-w-screen-xl px-6">
        {/* Wrapper for logo and title */}
        <div className="relative flex w-full items-center sm:flex-row sm:items-end">
          {/* Logo */}
          {showLogo && (
            <div className="mr-12 flex flex-shrink-0 justify-start">
              <Logo color={logoColor} width="345" height="214" />
            </div>
          )}

          {/* Title */}
          <div
            className={`flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl tracking-wide sm:text-5xl lg:mb-4 lg:text-8xl`}
            style={{
              lineHeight: "1",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {topTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
