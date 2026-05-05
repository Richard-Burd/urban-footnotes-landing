// Paths that should highlight "Property Reports" under Products.
export const SAMPLES_PATHS = [
  "/samples",
  "/product",
  "/gallery-streetview",
  "/gallery-close-up-aerial",
  "/gallery-mid-range-aerial",
  "/gallery-distant-aerial",
  "/scoreboard",
];

export const navItems = [
  {
    title: "Home",
    path: "/",
    bgColor: "bg-navbar-home",
  },
  {
    title: "Products",
    bgColor: "bg-navbar-product",
    pinned: true,
    children: [
      {
        title: "Property Reports",
        path: "/samples",
        bgColor: "bg-navbar-samples",
      },
      {
        title: "Development Proposals",
        path: "/proposals",
        bgColor: "bg-navbar-product",
      },
    ],
  },
  {
    title: "Pricing",
    path: "/order",
    bgColor: "bg-navbar-order",
    pinned: true,
  },
  {
    title: "About",
    bgColor: "bg-navbar-about",
    children: [
      { title: "Company", path: "/about", bgColor: "bg-navbar-about" },
      { title: "Outreach", path: "/ads", bgColor: "bg-navbar-ads" },
      { title: "Team", path: "/team", bgColor: "bg-navbar-team" },
      {
        title: "References",
        path: "/references",
        bgColor: "bg-navbar-references",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    bgColor: "bg-navbar-contact-us",
  },
];

export const isPathActive = (currentPath, path) =>
  currentPath === path ||
  (SAMPLES_PATHS.includes(currentPath) && path === "/samples");

export const defaultPathForItem = (item) => item.path ?? item.children?.[0]?.path;

export const activeColor = (item, currentPath) => {
  for (const child of item.children ?? []) {
    const childActiveColor = activeColor(child, currentPath);
    if (childActiveColor) return childActiveColor;
  }

  if (item.path && isPathActive(currentPath, item.path)) return item.bgColor;
  return null;
};
