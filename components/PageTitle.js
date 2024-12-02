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
      <div className="relative flex w-full max-w-[1200px] items-center">
        {/* Logo */}
        {showLogo && (
          <div className="flex flex-shrink-0 items-center pr-4">
            <PageHeaderLogo />
          </div>
        )}

        {/* Title */}
        <div
          className={`flex-grow ${textColor} ${shadowColor} page-title-shadow roboto-font pb-0 text-4xl tracking-wide sm:text-5xl lg:text-6.5xl`}
          style={{
            display: "flex",
            alignItems: "flex-end", // Aligns text to the bottom
            justifyContent: "flex-start", // Aligns text to the left
            lineHeight: "1",
            height: "100%", // Ensures container spans full height
          }}
        >
          {topTitle}
        </div>
      </div>
    </div>
  );
}
