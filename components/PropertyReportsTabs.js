import Link from "next/link";

const tabs = [
  {
    key: "samples",
    label: "Sample Reports",
    href: "/samples",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    key: "features",
    label: "Product Features",
    href: "/product",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
];

export default function PropertyReportsTabs({ activeView }) {
  return (
    <nav
      aria-label="Property Reports sections"
      className="mx-auto mb-8 flex max-w-screen-lg justify-center px-4"
    >
      <div className="flex w-full max-w-[560px] gap-1.5 overflow-hidden rounded-xl bg-stone-800 p-1.5 ring-1 ring-white/10">
        {tabs.map((tab) => {
          const active = activeView === tab.key;
          return (
            <Link
              key={tab.key}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`roboto-font flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-center font-bold transition-all duration-200 focus:outline-none sm:px-4 text-sm sm:text-base lg:text-lg ${
                active
                  ? "bg-navbar-samples !text-neutral-900 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  : "!text-stone-300 hover:bg-stone-700 hover:!text-white"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
