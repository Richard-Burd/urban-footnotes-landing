import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function PageTitle({
  topTitle,
  textColor,
  shadowColor,
  showLogo = false,
}) {
  return (
    <div className="m-4 mb-8 flex justify-center lg:mx-16 lg:mb-16">
      {/* Wrapper for logo and text */}
      <div className="relative flex w-full max-w-[1200px] flex-col items-center sm:flex-row sm:items-end">
        {/* Logo */}
        {showLogo && (
          <div className="mb-4 flex w-full flex-shrink-0 justify-center pr-4 sm:mb-0 sm:w-1/2 sm:justify-end">
            <PageHeaderLogo />
          </div>
        )}

        {/* Title */}
        <div
          className={`w-full pl-0 text-center sm:w-1/2 sm:pl-4 sm:text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl tracking-wide lg:text-5xl`}
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
  );
}
