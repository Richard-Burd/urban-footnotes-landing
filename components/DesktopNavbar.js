import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LogoNoText from "./LogoNoText";
import { activeColor, defaultPathForItem, isPathActive } from "./navbarConfig";

const ChevronIcon = ({ className = "" }) => (
  <svg
    className={`h-3 w-3 shrink-0 transition-transform duration-200 ${className}`}
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
);

const topLevelControlClass = (active) =>
  `${active ? "navbar-button-shadow" : ""} roboto-font flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md bg-stone-700 px-3 py-2 text-base font-bold text-white transition-colors hover:text-navbar-home focus:outline-none`;

const topLevelSplitControlClass = (active) =>
  `${active ? "navbar-button-shadow" : ""} roboto-font flex shrink-0 items-center overflow-hidden rounded-md bg-stone-700 text-base font-bold text-white transition-colors focus-within:outline-none`;

const topLevelSplitLinkClass =
  "px-3 py-2 text-white no-underline transition-colors hover:text-navbar-home focus:outline-none";

const topLevelSplitToggleClass =
  "flex items-center px-2 py-2 text-white transition-colors hover:text-navbar-home focus:outline-none";

const dropdownItemClass = (active, color) =>
  `roboto-font flex w-full items-center justify-between px-4 py-2 text-left text-base transition-colors ${
    active
      ? `${color} font-bold text-neutral-900`
      : "text-white hover:bg-stone-700 hover:text-navbar-home"
  }`;

const topLevelBayClass = (color) =>
  `inline-flex px-5 pb-2 pt-1 ${
    color ? `${color} rounded-t-md rounded-b-none` : "rounded-md"
  }`;

export default function DesktopNavbar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const getActiveColor = (item) => activeColor(item, currentPath);
  const isItemActive = (item) => !!getActiveColor(item);

  return (
    <nav className="site-nav roboto-font bg-neutral-950 px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-16 w-full max-w-screen-xl items-stretch gap-2">
        <Link
          href="/"
          aria-label="Urban Footnotes home"
          className="flex shrink-0 items-center pr-2"
        >
          <LogoNoText className="h-12 w-12 object-contain" />
        </Link>

        <div className="flex min-w-0 flex-1 items-stretch justify-end gap-4 lg:gap-6">
          {navItems.map((item) => {
            if (item.title === "Home") {
              return null;
              /*
              return (
                <div key={item.title} className="relative flex">
                  <div className="flex items-end justify-center pt-2">
                    <div className={topLevelBayClass(getActiveColor(item))}>
                      <Link href={item.path} className={topLevelControlClass(isItemActive(item))}>
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
              */
            }

            const active = isItemActive(item);
            const itemActiveColor = getActiveColor(item);
            const hasChildren = !!item.children?.length;
            const isOpen = openMenu === item.title;
            const defaultPath = defaultPathForItem(item);

            return (
              <div
                key={item.title}
                className="relative flex"
                onMouseEnter={() => hasChildren && setOpenMenu(item.title)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenSubMenu(null);
                }}
              >
                <div className="flex items-end justify-center pt-2">
                  <div className={topLevelBayClass(itemActiveColor)}>
                    {hasChildren && defaultPath ? (
                      <div className={topLevelSplitControlClass(active)}>
                        <Link href={defaultPath} className={topLevelSplitLinkClass}>
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setOpenMenu(isOpen ? null : item.title)}
                          aria-label={`${isOpen ? "Close" : "Open"} ${item.title} menu`}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                          className={topLevelSplitToggleClass}
                        >
                          <ChevronIcon className={isOpen ? "rotate-180" : ""} />
                        </button>
                      </div>
                    ) : item.path ? (
                      <Link href={item.path} className={topLevelControlClass(active)}>
                        {item.title}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpenMenu(isOpen ? null : item.title)}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        className={topLevelControlClass(active)}
                      >
                        {item.title}
                        <ChevronIcon className={isOpen ? "rotate-180" : ""} />
                      </button>
                    )}
                  </div>
                </div>

                {hasChildren && isOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-[210px] overflow-hidden rounded-b-md bg-neutral-900 py-1 shadow-xl">
                    {item.children.map((child) => {
                      const hasGrandchildren = !!child.children?.length;
                      const childActiveColor = getActiveColor(child);
                      const childActive = !!childActiveColor;
                      const isSubOpen = openSubMenu === child.title;

                      return (
                        <div
                          key={child.title}
                          className="relative"
                          onMouseEnter={() => hasGrandchildren && setOpenSubMenu(child.title)}
                          onMouseLeave={() => hasGrandchildren && setOpenSubMenu(null)}
                        >
                          {hasGrandchildren ? (
                            child.path ? (
                              <Link
                                href={child.path}
                                className={dropdownItemClass(childActive, childActiveColor)}
                              >
                                {child.title}
                                <ChevronIcon className="ml-2 -rotate-90" />
                              </Link>
                            ) : (
                              <button
                                type="button"
                                className={dropdownItemClass(childActive, childActiveColor)}
                                aria-haspopup="true"
                                aria-expanded={isSubOpen}
                              >
                                {child.title}
                                <ChevronIcon className="ml-2 -rotate-90" />
                              </button>
                            )
                          ) : (
                            <Link
                              href={child.path}
                              className={dropdownItemClass(childActive, childActiveColor)}
                            >
                              {child.title}
                            </Link>
                          )}

                          {hasGrandchildren && isSubOpen && (
                            <div className="absolute left-full top-0 z-50 min-w-[180px] overflow-hidden rounded-r-md bg-neutral-900 py-1 shadow-xl">
                              {child.children.map((gc) => {
                                const gcActive = isPathActive(currentPath, gc.path);
                                return (
                                  <Link
                                    href={gc.path}
                                    key={gc.title}
                                    className={dropdownItemClass(gcActive, gc.bgColor)}
                                  >
                                    {gc.title}
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
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
