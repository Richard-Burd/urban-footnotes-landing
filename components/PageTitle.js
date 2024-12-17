import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function PageTitle({
  topTitle,
  textColor,
  shadowColor,
  showLogo = false,
}) {
  return (
    <div className="mt-4 mb-4 flex justify-center lg:mx-0 lg:mb-8">
      {/* Fixed-width container */}
      <div className="mx-auto w-full max-w-screen-xl px-6">
        {/* Wrapper for logo and title */}
        <div className="relative flex w-full items-center sm:flex-row sm:items-end">
          {/* Logo */}
          {showLogo && (
            <div className="flex flex-shrink-0 justify-start mr-12">
              <PageHeaderLogo />
            </div>
          )}

          {/* Title */}
          <div
            className={`flex-grow text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl tracking-wide sm:text-5xl lg:text-6xl lg:mb-12`}
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
