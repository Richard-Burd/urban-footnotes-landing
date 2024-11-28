import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function PageTitle({
  topTitle,
  textColor,
  shadowColor,
  showLogo = false,
}) {
  return (
    <div className="m-4 mb-8 flex justify-center lg:mx-32">
      {/* Wrapper for logo and text */}
      <div className="relative flex w-full max-w-[1200px] items-end">
        {/* Logo */}
        {showLogo && (
          <div className="flex w-1/2 flex-shrink-0 justify-end pr-4">
            <PageHeaderLogo />
          </div>
        )}

        {/* Title */}
        <div
          className={`w-1/2 pl-4 text-left ${textColor} ${shadowColor} page-title-shadow roboto-font text-4xl tracking-wide lg:text-5xl`}
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
