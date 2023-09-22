import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <div className="hidden sm:block">
        <DesktopNavbar />
      </div>
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
