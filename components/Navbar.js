import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

// Paths that should highlight "Neighborhood Reports" under Products
export const SAMPLES_PATHS = [
  "/samples",
  "/product",
  "/gallery-streetview",
  "/gallery-close-up-aerial",
  "/gallery-mid-range-aerial",
  "/gallery-distant-aerial",
  "/scoreboard",
];

const navItems = [
  {
    title: "Home",
    path: "/",
    bgColor: "bg-navbar-home",
  },
  {
    title: "Products",
    bgColor: "bg-navbar-product",
    children: [
      {
        title: "Neighborhood Reports",
        path: "/samples",
        bgColor: "bg-navbar-samples",
      },
      { title: "Development Proposals", path: "/proposals", bgColor: "bg-navbar-product" },
    ],
  },
  {
    title: "Pricing",
    path: "/order",
    bgColor: "bg-navbar-order",
  },
  {
    title: "About",
    bgColor: "bg-navbar-about",
    children: [
      { title: "Company", path: "/about", bgColor: "bg-navbar-about" },
      { title: "Outreach", path: "/ads", bgColor: "bg-navbar-ads" },
      { title: "Team", path: "/team", bgColor: "bg-navbar-team" },
      { title: "References", path: "/references", bgColor: "bg-navbar-references" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    bgColor: "bg-navbar-contact-us",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="block md:hidden">
        <MobileNavbar navItems={navItems} />
      </div>
    </>
  );
}
