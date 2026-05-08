import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LogoNoText from "./LogoNoText";
import { activeColor, isPathActive } from "./navbarConfig";

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

const activeBayClass = (color, tab = false) =>
  `inline-flex px-2 ${tab ? "pb-2 pt-1" : "py-1"} ${
    color ? `${color} ${tab ? "rounded-t-md rounded-b-none" : "rounded-md"}` : "rounded-md"
  }`;

const menuControlClass = (active) =>
  `${active ? "navbar-button-shadow" : ""} roboto-font rounded-md bg-stone-700 px-3 py-2 text-base font-bold text-white transition-colors hover:text-navbar-home focus:outline-none`;

export default function MobileNavbar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const getActiveColor = (item) => activeColor(item, currentPath);
  const isItemActive = (item) => !!getActiveColor(item);

  const toggleExpand = (title) =>
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));

  const closeAll = () => {
    setMenuOpen(false);
    setExpandedItems({});
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setExpandedItems({});
  };

  const menuItems = navItems;

  return (
    <nav className="site-nav roboto-font bg-neutral-950 text-white">
      <div className="grid min-h-16 grid-cols-[auto_minmax(2.5rem,1fr)_auto] items-end gap-2 px-3 pt-2">
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="mb-2 rounded-md bg-stone-700 p-2 text-white transition-colors hover:bg-stone-600 focus:outline-none"
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

        <Link
          href="/"
          aria-label="Urban Footnotes home"
          className="mb-2 flex min-w-0 justify-center"
          onClick={closeAll}
        >
          <LogoNoText className="h-9 w-9 object-contain xs:h-10 xs:w-10" />
        </Link>

        <div className="mb-2 h-10 w-10" aria-hidden="true" />
      </div>

      {menuOpen && (
        <div className="border-t border-stone-700 px-3 py-2">
          {menuItems.map((item) => {
            const active = isItemActive(item);
            const expanded = expandedItems[item.title];
            const itemActiveColor = getActiveColor(item);
            const hasChildren = !!item.children?.length;

            if (item.path) {
              return (
                <div key={item.title} className="mb-1">
                  <div className={activeBayClass(itemActiveColor)}>
                    <Link
                      href={item.path}
                      onClick={closeAll}
                      className={menuControlClass(active)}
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div key={item.title} className="mb-1">
                <div className={activeBayClass(itemActiveColor)}>
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.title)}
                    aria-haspopup="true"
                    aria-expanded={expanded}
                    className={`${menuControlClass(active)} flex items-center justify-between`}
                  >
                    {item.title}
                    <ChevronIcon className={`ml-2 h-4 w-4 ${expanded ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {expanded && hasChildren && (
                  <div className="ml-3 mt-1 border-l-2 border-stone-600 pl-2">
                    {item.children.map((child) => {
                      const childActive = isPathActive(currentPath, child.path);
                      return (
                        <div key={child.title} className="mb-1">
                          <div className={activeBayClass(childActive ? child.bgColor : null)}>
                            <Link
                              href={child.path}
                              onClick={closeAll}
                              className={`rounded-md bg-stone-700 px-3 py-1.5 text-base text-white transition-colors hover:text-navbar-home ${
                                childActive ? "navbar-button-shadow font-bold" : ""
                              }`}
                            >
                              {child.title}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </nav>
  );
}
