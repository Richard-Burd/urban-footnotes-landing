import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNavbarButton from "./MobileNavbarButton";
import { useRouter } from "next/router";

export default function MobileNavBar({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div>
      <div className="bg-neutral-950 px-4 py-4 text-white">
        <button onClick={toggleMenu}>
          <Image
            src="/images/hamburger-icon-white.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-nav-bar-buttons"
          className="w-full bg-stone-800 text-white"
        >
          <nav className="bg-neutral-950 px-2 text-white">
            <div className="flex justify-center">
              <div className="grid w-full grid-cols-3 pb-[6px]">
                {navItems.map((item) => (
                  <MobileNavbarButton
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
      )}
    </div>
  );
}
