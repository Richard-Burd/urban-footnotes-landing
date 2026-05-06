import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { navItems } from "./navbarConfig";

export default function Navbar() {
  return (
    <>
      <div className="hidden desktop:block">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="block desktop:hidden">
        <MobileNavbar navItems={navItems} />
      </div>
    </>
  );
}
