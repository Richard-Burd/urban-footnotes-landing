import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SAMPLES_PATHS } from "./Navbar";

export default function DesktopNavbar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

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

  return (
    <nav className="bg-neutral-950 px-2 text-white">
      <div className="flex justify-center">
        <div className="flex w-full max-w-screen-lg">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const hasChildren = !!item.children?.length;
            const isOpen = openMenu === item.title;

            return (
              <div
                key={item.title}
                className="relative flex-1"
                onMouseEnter={() => hasChildren && setOpenMenu(item.title)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenSubMenu(null);
                }}
              >
                <div className={`${activeColor(item) ?? "bg-inherit"} flex justify-center px-1 py-2`}>
                  {item.path ? (
                    <Link href={item.path}>
                      <button
                        className={`${active ? "navbar-button-shadow" : ""} roboto-font flex items-center gap-1 rounded-md bg-stone-700 px-2 py-2 text-sm font-bold text-white transition-colors hover:text-navbar-home focus:outline-none lg:px-3 lg:text-base xl:text-xl`}
                      >
                        {item.title}
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setOpenMenu(isOpen ? null : item.title)}
                      className={`${active ? "navbar-button-shadow" : ""} roboto-font flex items-center gap-1 rounded-md bg-stone-700 px-2 py-2 text-sm font-bold text-white transition-colors hover:text-navbar-home focus:outline-none lg:px-3 lg:text-base xl:text-xl`}
                    >
                      {item.title}
                      <svg
                        className={`h-3 w-3 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
                  )}
                </div>

                {hasChildren && isOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-[210px] rounded-b-md bg-neutral-900 py-1 shadow-xl">
                    {item.children.map((child) => {
                      const hasGrandchildren = !!child.children?.length;
                      const childActiveColor = activeColor(child);
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
                              <Link href={child.path}>
                                <div
                                  className={`roboto-font flex cursor-pointer items-center justify-between px-4 py-2 text-sm transition-colors lg:text-base xl:text-xl ${
                                    childActive
                                      ? `${childActiveColor} font-bold text-neutral-900`
                                      : "text-white hover:bg-stone-700 hover:text-navbar-home"
                                  }`}
                                >
                                  {child.title}
                                  <svg
                                    className="ml-2 h-3 w-3 shrink-0 -rotate-90"
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
                                </div>
                              </Link>
                            ) : (
                              <div
                                className={`roboto-font flex cursor-pointer items-center justify-between px-4 py-2 text-sm transition-colors lg:text-base xl:text-xl ${
                                  childActive
                                    ? `${childActiveColor} font-bold text-neutral-900`
                                    : "text-white hover:bg-stone-700 hover:text-navbar-home"
                                }`}
                              >
                                {child.title}
                                <svg
                                  className="ml-2 h-3 w-3 shrink-0 -rotate-90"
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
                              </div>
                            )
                          ) : (
                            <Link href={child.path}>
                              <div
                                className={`roboto-font cursor-pointer px-4 py-2 text-sm transition-colors lg:text-base xl:text-xl ${
                                  childActive
                                    ? `${childActiveColor} font-bold text-neutral-900`
                                    : "text-white hover:bg-stone-700 hover:text-navbar-home"
                                }`}
                              >
                                {child.title}
                              </div>
                            </Link>
                          )}

                          {hasGrandchildren && isSubOpen && (
                            <div className="absolute left-full top-0 z-50 min-w-[180px] overflow-hidden rounded-r-md bg-neutral-900 py-1 shadow-xl">
                              {child.children.map((gc) => {
                                const gcActive = isPathActive(gc.path);
                                return (
                                  <Link href={gc.path} key={gc.title}>
                                    <div
                                      className={`roboto-font cursor-pointer px-4 py-2 text-sm transition-colors lg:text-base xl:text-xl ${
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
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .navbar-button-shadow {
          box-shadow: 6px 6px 7px rgb(0, 0, 0, 0.5);
        }
      `}</style>
    </nav>
  );
}
