import MobileNavbarButton from "./MobileNavbarButton";
import { useRouter } from "next/router";

export default function MobileNavBar({ navItems }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div>
      <div
        id="mobile-nav-bar-buttons"
        className="w-full bg-stone-800 text-white"
      >
        <nav className="bg-neutral-950 px-2 pb-1 pt-2 text-white">
          <div className="flex justify-center">
            <div className="grid w-full grid-cols-3 pb-[6px]">
              {navItems.map((item, index) => (
                <MobileNavbarButton
                  key={item.path || index}
                  title={item.title}
                  bgColor={item.bgColor}
                  isActive={currentPath === item.path}
                  path={item.path}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
