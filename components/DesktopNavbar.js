import Link from "next/link";
import { useRouter } from "next/router";
import DesktopNavbarButton from "./DesktopNavbarButton";

export default function DesktopNavbar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;

  // Define logic for gallery and scoreboard pages which share the '/samples' button
  const isSamplesSection = [
    "/samples",
    "/gallery-streetview",
    "/gallery-close-up-aerial",
    "/gallery-mid-range-aerial",
    "/gallery-distant-aerial",
    "/scoreboard",
  ].includes(currentPath);

  return (
    <nav className="bg-neutral-950 px-2 text-white">
      <div className="flex justify-center">
        <div className="flex w-full max-w-screen-lg justify-evenly">
          {navItems.map((item, index) => (
            <Link href={item.path} key={item.title}>
              <DesktopNavbarButton
                key={item.path || index}
                title={item.title}
                bgColor={
                  isSamplesSection && item.path === "/samples"
                    ? "bg-navbar-samples"
                    : item.bgColor
                }
                isActive={
                  (isSamplesSection && item.path === "/samples") ||
                  currentPath === item.path
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
