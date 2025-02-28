import Link from "next/link";
import { useRouter } from "next/router";
import DesktopNavbarButton from "./DesktopNavbarButton";

export default function DesktopNavbar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="bg-neutral-950 px-2 text-white">
      <div className="flex justify-center">
        <div className="flex w-full max-w-screen-lg justify-evenly">
          {navItems.map((item) => (
            <Link href={item.path} key={item.title}>
              <DesktopNavbarButton
                title={item.title}
                bgColor={item.bgColor}
                isActive={currentPath === item.path}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
