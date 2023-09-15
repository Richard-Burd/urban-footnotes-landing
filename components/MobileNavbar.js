import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-neutral-950 text-white px-2 py-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <button onClick={toggleMenu}>
              <Image
                src="/hamburger-icon-white.svg"
                alt="Menu"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-nav-bar-links"
          className="bg-stone-800 w-full text-white"
        >
          <Link href="/">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Homepage
            </div>
          </Link>
          <Link href="/about">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              About Page
            </div>
          </Link>
          <Link href="/addresses">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Addresses
            </div>
          </Link>
          <Link href="/associations">
            <div
              className="block px-4 py-2 cursor-pointer"
              onClick={toggleMenu}
            >
              Associations
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}