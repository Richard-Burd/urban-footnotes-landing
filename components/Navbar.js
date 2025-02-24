import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <div className="hidden min-[1000px]:block">
        <DesktopNavbar />
      </div>
      <div className="block min-[1000px]:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
