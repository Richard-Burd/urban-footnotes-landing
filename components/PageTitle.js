import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function PageTitle({
  topTitle,
  textColor,
  shadowColor,
  showLogo = false,
}) {
  return (
    <div
      className={` m-4 flex flex-col items-center lg:mx-32 lg:mb-8 lg:mt-6 lg:flex-row lg:items-end lg:justify-center`}
    >
      {/* Logo */}
      {showLogo && (
        <div className="flex-shrink-0">
          <PageHeaderLogo />
        </div>
      )}

      {/* Title aligned to the baseline */}
      <div
        className={`${shadowColor} page-title-shadow roboto-font lg:text-5xl text-center text-3xl tracking-wide lg:ml-4 lg:text-left ${textColor}`}
        style={{ lineHeight: "1.2em", display: "flex", alignItems: "flex-end" }} // Ensures baseline alignment
      >
        {topTitle}
      </div>
    </div>
  );
}
