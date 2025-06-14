import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const navItems = [
  { title: "Home", path: "/", bgColor: "bg-navbar-home" },
  { title: "About", path: "/about", bgColor: "bg-navbar-about" },
  { title: "Outreach", path: "/ads", bgColor: "bg-navbar-ads" },  
  { title: "Team", path: "/team", bgColor: "bg-navbar-team" },
  { title: "Product", path: "/product", bgColor: "bg-navbar-product" },
  { title: "Samples", path: "/samples", bgColor: "bg-navbar-samples" },
  { title: "Order", path: "/order", bgColor: "bg-navbar-order" },
  { title: "Contact", path: "/contact", bgColor: "bg-navbar-contact-us" },
  { title: "Reference", path: "/references", bgColor: "bg-navbar-references" },
];

export default function Navbar() {
  return (
    <>
      <div className="hidden min-[1000px]:block">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="block min-[1000px]:hidden">
        <MobileNavbar navItems={navItems} />
      </div>
    </>
  );
}
