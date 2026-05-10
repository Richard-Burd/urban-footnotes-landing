import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  `${active ? "navbar-button-shadow" : ""} roboto-font flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md bg-stone-700 px-3 py-2 text-base font-bold text-white transition-colors hover:text-navbar-home focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navbar-home focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950`;

const topLevelSplitControlClass = (active) =>
  `${active ? "navbar-button-shadow" : ""} roboto-font flex shrink-0 items-center overflow-hidden rounded-md bg-stone-700 text-base font-bold text-white transition-colors focus-within:ring-2 focus-within:ring-navbar-home focus-within:ring-offset-2 focus-within:ring-offset-neutral-950`;

const topLevelSplitLinkClass =
  "px-3 py-2 text-white no-underline transition-colors hover:text-navbar-home focus-visible:outline-none";

const topLevelSplitToggleClass =
  "flex items-center px-2 py-2 text-white transition-colors hover:text-navbar-home focus-visible:outline-none";

const dropdownItemClass = (active, color) =>
  `roboto-font flex w-full items-center justify-between px-4 py-2 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navbar-home ${
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
  const closeMenus = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const getActiveColor = (item) => activeColor(item, currentPath);
  const isItemActive = (item) => !!getActiveColor(item);
  const focusFirstMenuItem = (menuRoot) => {
    setTimeout(() => {
      menuRoot
        ?.querySelector("[data-dropdown] a, [data-dropdown] button")
        ?.focus();
    }, 0);
  };
  const focusFirstSubMenuItem = (menuRoot) => {
    setTimeout(() => {
      menuRoot
        ?.querySelector("[data-submenu] a, [data-submenu] button")
        ?.focus();
    }, 0);
  };
  const handleNavBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeMenus();
    }
  };
  const handleTopMenuKeyDown = (event, itemTitle, isOpen) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenus();
      event.currentTarget.focus();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpenMenu(itemTitle);
      setOpenSubMenu(null);
      focusFirstMenuItem(event.currentTarget.closest("[data-nav-item]"));
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenMenu(isOpen ? null : itemTitle);
      setOpenSubMenu(null);
    }
  };
  const handleTopLinkKeyDown = (event, itemTitle) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpenMenu(itemTitle);
      setOpenSubMenu(null);
      focusFirstMenuItem(event.currentTarget.closest("[data-nav-item]"));
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenus();
      event.currentTarget.focus();
    }
  };
  const handleChildMenuKeyDown = (event, childTitle, hasGrandchildren) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenus();
      event.currentTarget
        .closest("[data-nav-item]")
        ?.querySelector("[data-top-menu-control]")
        ?.focus();
      return;
    }

    if (event.key === "ArrowRight" && hasGrandchildren) {
      event.preventDefault();
      setOpenSubMenu(childTitle);
      focusFirstSubMenuItem(event.currentTarget.closest("[data-child-menu-item]"));
      return;
    }

    if (event.key === "ArrowLeft" && hasGrandchildren) {
      event.preventDefault();
      setOpenSubMenu(null);
      event.currentTarget.focus();
    }
  };

  useEffect(() => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  }, [currentPath]);

  return (
    <nav
      className="site-nav roboto-font bg-neutral-950 px-4 text-white sm:px-6 lg:px-8"
      onBlur={handleNavBlur}
    >
      <div className="mx-auto grid min-h-16 w-full max-w-screen-xl grid-cols-[1fr_auto] items-stretch gap-2">
        <Link
          href="/"
          aria-label="Urban Footnotes home"
          onClick={closeMenus}
          className="flex items-center justify-self-center rounded-full transition duration-200 ease-out hover:-translate-y-0.5 hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.45)] focus-visible:-translate-y-0.5 focus-visible:drop-shadow-[0_0_14px_rgba(255,255,255,0.45)]"
        >
          <LogoNoText className="h-12 w-12 object-contain" />
        </Link>

        <div className="flex min-w-0 items-stretch justify-end gap-0">
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
                data-nav-item
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
                        <Link
                          href={defaultPath}
                          className={topLevelSplitLinkClass}
                          onKeyDown={(event) => handleTopLinkKeyDown(event, item.title)}
                          onClick={closeMenus}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setOpenMenu(isOpen ? null : item.title)}
                          aria-label={`${isOpen ? "Close" : "Open"} ${item.title} menu`}
                          aria-haspopup="true"
                          aria-expanded={isOpen}
                          data-top-menu-control
                          className={topLevelSplitToggleClass}
                          onKeyDown={(event) =>
                            handleTopMenuKeyDown(event, item.title, isOpen)
                          }
                        >
                          <ChevronIcon className={isOpen ? "rotate-180" : ""} />
                        </button>
                      </div>
                    ) : item.path ? (
                      <Link
                        href={item.path}
                        className={topLevelControlClass(active)}
                        onClick={closeMenus}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpenMenu(isOpen ? null : item.title)}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        data-top-menu-control
                        className={topLevelControlClass(active)}
                        onKeyDown={(event) =>
                          handleTopMenuKeyDown(event, item.title, isOpen)
                        }
                      >
                        {item.title}
                        <ChevronIcon className={isOpen ? "rotate-180" : ""} />
                      </button>
                    )}
                  </div>
                </div>

                {hasChildren && isOpen && (
                  <div
                    data-dropdown
                    className="absolute left-0 top-full z-50 min-w-[210px] overflow-hidden rounded-b-md bg-neutral-900 py-1 shadow-xl"
                  >
                    {item.children.map((child) => {
                      const hasGrandchildren = !!child.children?.length;
                      const childActiveColor = getActiveColor(child);
                      const childActive = !!childActiveColor;
                      const isSubOpen = openSubMenu === child.title;

                      return (
                        <div
                          key={child.title}
                          data-child-menu-item
                          className="relative"
                          onMouseEnter={() => hasGrandchildren && setOpenSubMenu(child.title)}
                          onMouseLeave={() => hasGrandchildren && setOpenSubMenu(null)}
                        >
                          {hasGrandchildren ? (
                            child.path ? (
                              <Link
                                href={child.path}
                                className={dropdownItemClass(childActive, childActiveColor)}
                                onFocus={() =>
                                  hasGrandchildren && setOpenSubMenu(child.title)
                                }
                                onKeyDown={(event) =>
                                  handleChildMenuKeyDown(
                                    event,
                                    child.title,
                                    hasGrandchildren,
                                  )
                                }
                                onClick={closeMenus}
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
                                onFocus={() => setOpenSubMenu(child.title)}
                                onKeyDown={(event) =>
                                  handleChildMenuKeyDown(event, child.title, true)
                                }
                              >
                                {child.title}
                                <ChevronIcon className="ml-2 -rotate-90" />
                              </button>
                            )
                          ) : (
                            <Link
                              href={child.path}
                              className={dropdownItemClass(childActive, childActiveColor)}
                              onKeyDown={(event) =>
                                handleChildMenuKeyDown(event, child.title, false)
                              }
                              onClick={closeMenus}
                            >
                              {child.title}
                            </Link>
                          )}

                          {hasGrandchildren && isSubOpen && (
                            <div
                              data-submenu
                              className="absolute left-full top-0 z-50 min-w-[180px] overflow-hidden rounded-r-md bg-neutral-900 py-1 shadow-xl"
                            >
                              {child.children.map((gc) => {
                                const gcActive = isPathActive(currentPath, gc.path);
                                return (
                                  <Link
                                    href={gc.path}
                                    key={gc.title}
                                    className={dropdownItemClass(gcActive, gc.bgColor)}
                                    onKeyDown={(event) => {
                                      if (event.key === "Escape") {
                                        event.preventDefault();
                                        closeMenus();
                                      } else if (event.key === "ArrowLeft") {
                                        event.preventDefault();
                                        setOpenSubMenu(null);
                                        event.currentTarget
                                          .closest("[data-child-menu-item]")
                                          ?.querySelector("a, button")
                                          ?.focus();
                                      }
                                    }}
                                    onClick={closeMenus}
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
