import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SAMPLES_PATHS } from "./Navbar";

// Products and Pricing stay visible at all times; everything else lives in the hamburger
const PINNED_TITLES = ["Products", "Pricing"];

export default function MobileNavbar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const isSamplesPath = SAMPLES_PATHS.includes(currentPath);

  const isPathActive = (path) =>
    currentPath === path || (isSamplesPath && path === "/samples");

  const activeColor = (item) => {
    for (const child of item.children ?? []) {
      const childActiveColor = activeColor(child);
      if (childActiveColor) return childActiveColor;
    }

    if (item.path && isPathActive(item.path)) return item.bgColor;
    return null;
  };

  const isItemActive = (item) => !!activeColor(item);

  const toggleExpand = (title) =>
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));

  const closeAll = () => {
    setMenuOpen(false);
    setExpandedItems({});
  };

  // Clearing pinned dropdowns when hamburger opens keeps the UI uncluttered
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setExpandedItems({});
  };

  const pinnedItems = navItems.filter((item) => PINNED_TITLES.includes(item.title));
  const menuItems = navItems.filter((item) => !PINNED_TITLES.includes(item.title));

  return (
    <nav className="bg-neutral-950 text-white">
      {/* Always-visible bar: hamburger left, Products + Pricing right */}
      <div className="flex items-center justify-between px-3 py-2">
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="rounded-md bg-stone-700 p-2 text-white transition-colors hover:bg-stone-600 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="flex gap-2">
          {pinnedItems.map((item) => {
            const active = isItemActive(item);
            const expanded = expandedItems[item.title];
            const hasChildren = !!item.children?.length;
            return (
              <div key={item.title} className="relative">
                {/* Colored halo wrapper mirrors desktop active-state treatment */}
                <div className={`rounded-md p-1 ${activeColor(item) ?? ""}`}>
                  {hasChildren ? (
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className={`roboto-font flex items-center gap-1 rounded-md bg-stone-700 px-3 py-2 text-sm font-bold text-white transition-colors hover:text-navbar-home focus:outline-none ${active ? "navbar-button-shadow" : ""}`}
                    >
                      {item.title}
                      <svg
                        className={`h-3 w-3 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`roboto-font block rounded-md bg-stone-700 px-3 py-2 text-sm font-bold text-white transition-colors hover:text-navbar-home focus:outline-none ${active ? "navbar-button-shadow" : ""}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>

                {expanded && hasChildren && (
                  <div className="absolute right-0 top-full z-50 min-w-[200px] overflow-hidden rounded-b-md bg-neutral-900 py-1 shadow-xl">
                    {item.children.map((child) => {
                      const hasGrandchildren = !!child.children?.length;
                      const childActiveColor = activeColor(child);
                      const childActive = !!childActiveColor;
                      const isChildExpanded = expandedItems[child.title];

                      if (hasGrandchildren) {
                        return (
                          <div key={child.title}>
                            <div
                              className={`roboto-font flex items-center text-sm transition-colors ${
                                childActive
                                  ? `${childActiveColor} font-bold text-neutral-900`
                                  : "text-white hover:bg-stone-700 hover:text-navbar-home"
                              }`}
                            >
                              {child.path ? (
                                <Link
                                  href={child.path}
                                  onClick={closeAll}
                                  className="block flex-1 px-4 py-2 text-left"
                                >
                                  {child.title}
                                </Link>
                              ) : (
                                <button
                                  onClick={() => toggleExpand(child.title)}
                                  className="flex-1 px-4 py-2 text-left focus:outline-none"
                                >
                                  {child.title}
                                </button>
                              )}
                              <button
                                onClick={() => toggleExpand(child.title)}
                                aria-label={`${isChildExpanded ? "Collapse" : "Expand"} ${child.title}`}
                                aria-expanded={isChildExpanded}
                                className="self-stretch px-4 focus:outline-none"
                              >
                                <svg
                                  className={`h-3 w-3 shrink-0 transition-transform duration-200 ${isChildExpanded ? "rotate-180" : ""}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                            {isChildExpanded && (
                              <div className="border-t border-stone-700">
                                {child.children.map((gc) => {
                                  const gcActive = isPathActive(gc.path);
                                  return (
                                    <Link href={gc.path} key={gc.title} onClick={closeAll}>
                                      <div
                                        className={`roboto-font cursor-pointer py-2 pl-7 pr-4 text-sm transition-colors ${
                                          gcActive
                                            ? `${gc.bgColor} font-bold text-neutral-900`
                                            : "text-white hover:bg-stone-700 hover:text-navbar-home"
                                        }`}
                                      >
                                        {gc.title}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <Link href={child.path} key={child.title} onClick={closeAll}>
                          <div
                            className={`roboto-font cursor-pointer px-4 py-2 text-sm transition-colors ${
                              childActive
                                ? `${child.bgColor} font-bold text-neutral-900`
                                : "text-white hover:bg-stone-700 hover:text-navbar-home"
                            }`}
                          >
                            {child.title}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hamburger-expanded menu: Home, About (accordion), Contact */}
      {menuOpen && (
        <div className="border-t border-stone-700 px-3 py-2">
          {menuItems.map((item) => {
            const active = isItemActive(item);
            const expanded = expandedItems[item.title];

            if (item.path) {
              return (
                <Link href={item.path} key={item.title} onClick={closeAll}>
                  <div className={`mb-1 rounded-md p-1 ${activeColor(item) ?? ""}`}>
                    <div className="roboto-font rounded-md bg-stone-700 px-3 py-2 text-base font-bold text-white transition-colors hover:text-navbar-home">
                      {item.title}
                    </div>
                  </div>
                </Link>
              );
            }

            return (
              <div key={item.title} className="mb-1">
                <div className={`rounded-md p-1 ${activeColor(item) ?? ""}`}>
                  <button
                    onClick={() => toggleExpand(item.title)}
                    className="roboto-font flex w-full items-center justify-between rounded-md bg-stone-700 px-3 py-2 text-base font-bold text-white transition-colors hover:text-navbar-home focus:outline-none"
                  >
                    {item.title}
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {expanded && (
                  <div className="ml-3 mt-1 border-l-2 border-stone-600 pl-2">
                    {item.children.map((child) => {
                      const childActive = isPathActive(child.path);
                      return (
                        <Link href={child.path} key={child.title} onClick={closeAll}>
                          <div className={`mb-1 rounded-md p-1 ${childActive ? child.bgColor : ""}`}>
                            <div
                              className={`roboto-font rounded-md bg-stone-700 px-3 py-1.5 text-base text-white transition-colors hover:text-navbar-home ${childActive ? "font-bold" : ""}`}
                            >
                              {child.title}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .navbar-button-shadow {
          box-shadow: 6px 6px 7px rgb(0, 0, 0, 0.5);
        }
      `}</style>
    </nav>
  );
}
