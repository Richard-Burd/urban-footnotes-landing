import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function PageTitle({
  topTitle,
  textColor,
  shadowColor,
  showLogo = false,
}) {
  return (
    <div className="m-4 mb-8 flex justify-center lg:mx-0 lg:mb-16">
      {/* Outer container spanning the full width */}
      <div className="w-full max-w-screen-xl">
        {/* Wrapper for logo and text */}
        <div className="relative flex w-full flex-col items-center sm:flex-row sm:items-end">
          {/* Logo */}
          {showLogo && (
            <div className="mb-4 flex flex-shrink-0 justify-start pb-2 pr-16 sm:mb-0 sm:justify-end">
              <PageHeaderLogo />
            </div>
          )}

          {/* Title */}
          <div
            className={`flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl !font-bold tracking-wide sm:text-5xl lg:text-6xl`}
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
