import { useRouter } from "next/router";
import Image from "next/image";
import samplesData from "@/lib/samplesData";

const REPORT_IMAGE_SIZES = "(min-width: 992px) 1024px, calc(100vw - 2rem)";
const responsiveImageStyle = { width: "100%", height: "auto" };

const CATEGORIES = [
  {
    title: "Highly Walkable",
    desktopClassName: "",
    mobileClassName: "",
  },
  {
    title: "Somewhat Walkable",
    desktopClassName: "pt-14",
    mobileClassName: "mt-8",
  },
  {
    title: "Less Walkable",
    desktopClassName: "rounded-b-[45px] pt-14",
    mobileClassName: "mt-8",
  },
];

const sortByCategoryRank = (entries) =>
  [...entries].sort((a, b) => Number(a.categoryRank) - Number(b.categoryRank));

const scoreChipClass = (variant, kind) => {
  const desktopBase = "mx-[4px] w-12";
  const mobileBase = "mx-[2px] w-9";
  const base = variant === "desktop" ? desktopBase : mobileBase;

  const kindClass = {
    greenNear: "bg-[#73e369ff] pb-[2px]",
    yellowFarther: "bg-[#f7fc70ff]",
    redDistant: "bg-[#e37569ff]",
    walkabilityScore:
      variant === "desktop"
        ? "rounded-[10px] bg-[#cbd4e0ff] text-[#1f244dff]"
        : "rounded-[7px] bg-[#cbd4e0ff] text-[#1f244dff]",
  }[kind];

  return `${base} ${kindClass}`;
};

function ScoreChips({ entry, variant }) {
  const containerClass =
    variant === "desktop"
      ? "flex w-full gap-4 text-center text-[24px] font-semibold leading-[34px] text-gray-800"
      : "flex w-full justify-end gap-2 text-center text-[21px] font-semibold leading-[27px] text-gray-800";

  return (
    <div className={containerClass}>
      <div className={scoreChipClass(variant, "greenNear")}>{entry.greenNear}</div>
      <div className={scoreChipClass(variant, "yellowFarther")}>
        {entry.yellowFarther}
      </div>
      <div className={scoreChipClass(variant, "redDistant")}>{entry.redDistant}</div>
      <div className={scoreChipClass(variant, "walkabilityScore")}>
        {entry.walkabilityScore}
      </div>
    </div>
  );
}

function ReportImage({ baseUrl, entry, viewType }) {
  if (!entry[viewType]) return null;

  return (
    <Image
      src={`${baseUrl}/${entry[viewType]}`}
      alt={`picture of ${entry[viewType]}`}
      width={1200}
      height={1}
      sizes={REPORT_IMAGE_SIZES}
      style={responsiveImageStyle}
    />
  );
}

function WalkabilityEntry({ baseUrl, entry, onBackToTop, variant, viewType }) {
  const hasImage = !!entry[viewType];

  if (variant === "desktop") {
    return (
      <div>
        <div className="column-layout flex w-full items-center">
          <div className="column-layout w-full pr-12 text-right">
            <div className="-ml-10 text-[26px] leading-[45px] text-gray-200">
              {entry.address}
            </div>
          </div>
          <div className="column-layout">
            <ScoreChips entry={entry} variant={variant} />
          </div>
        </div>
        {hasImage ? (
          <div className="mb-28 mt-2">
            <ReportImage baseUrl={baseUrl} entry={entry} viewType={viewType} />
            <button
              type="button"
              onClick={onBackToTop}
              className="text-lg text-gray-300"
            >
              Back to top of page
            </button>
          </div>
        ) : (
          <div className="mb-20" />
        )}
      </div>
    );
  }

  return (
    <div className="column-layout">
      <div className="column-layout">
        <div className="pb-2 text-[24px] leading-[30px] text-gray-200">
          {entry.address}
        </div>
      </div>
      {hasImage ? (
        <div className="mb-4 mt-2">
          <ReportImage baseUrl={baseUrl} entry={entry} viewType={viewType} />
        </div>
      ) : (
        <div className="mb-20" />
      )}
      <div className="column-layout pb-24">
        <ScoreChips entry={entry} variant={variant} />
      </div>
    </div>
  );
}

function WalkabilitySection({
  baseUrl,
  category,
  entries,
  onBackToTop,
  variant,
  viewType,
}) {
  const headingClass =
    variant === "desktop"
      ? "pt-3 text-right text-[40px] italic text-gray-200"
      : "pt-3 text-right text-[27px] italic text-gray-200";

  const sectionClass =
    variant === "desktop" ? category.desktopClassName : category.mobileClassName;

  return (
    <div id={category.title} className={sectionClass}>
      <div className="mb-2 border-b-4 border-x-slate-200">
        <div className={headingClass}>{category.title}</div>
      </div>
      <div className={variant === "desktop" ? "column-layout flex flex-col" : "column-layout"}>
        {entries.map((entry) => (
          <WalkabilityEntry
            baseUrl={baseUrl}
            entry={entry}
            key={entry.address}
            onBackToTop={onBackToTop}
            variant={variant}
            viewType={viewType}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery({ viewType }) {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;

  const scrollToTop = () => {
    router.replace(router.asPath);
  };

  const entriesByCategory = CATEGORIES.reduce((acc, category) => {
    acc[category.title] = sortByCategoryRank(
      samplesData.filter((entry) => entry.category === category.title),
    );
    return acc;
  }, {});

  return (
    <div>
      <div id="property-report-scoreboards">
        <div
          id="desktop-scoreboard"
          className="mx-auto hidden max-w-screen-lg px-4 desktop:block xl:px-0"
        >
          {CATEGORIES.map((category) => (
            <WalkabilitySection
              baseUrl={baseUrl}
              category={category}
              entries={entriesByCategory[category.title]}
              key={category.title}
              onBackToTop={scrollToTop}
              variant="desktop"
              viewType={viewType}
            />
          ))}
        </div>

        <div id="mobile-scoreboard" className="block px-4 desktop:hidden">
          <div className="pb-9">
            {CATEGORIES.map((category) => (
              <WalkabilitySection
                baseUrl={baseUrl}
                category={category}
                entries={entriesByCategory[category.title]}
                key={category.title}
                onBackToTop={scrollToTop}
                variant="mobile"
                viewType={viewType}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
