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
      <div className="bg-neutral-950 text-white px-4 py-4">
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
          <Link href="/team">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Team
            </div>
          </Link>
          <Link href="/product">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Product
            </div>
          </Link>
          <Link href="/samples">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Samples
            </div>
          </Link>
          <Link href="/order">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Order
            </div>
          </Link>
          <Link href="/references">
            <div
              className="block px-4 py-2 cursor-pointer"
              onClick={toggleMenu}
            >
              References
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
