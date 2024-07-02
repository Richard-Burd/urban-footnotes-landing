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
          id="mobile-nav-bar-links"
          className="w-full bg-stone-800 text-white"
        >
          <Link href="/">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Homepage
            </div>
          </Link>
          <Link href="/about">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              About Page
            </div>
          </Link>
          <Link href="/team">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Team
            </div>
          </Link>
          <Link href="/product">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Product
            </div>
          </Link>
          <Link href="/samples">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Samples
            </div>
          </Link>
          <Link href="/order">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Order
            </div>
          </Link>
          <Link href="/contact">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Contact Us
            </div>
          </Link>
          <Link href="/ads">
            <div
              className="block cursor-pointer border-b border-stone-600 px-4 py-2"
              onClick={toggleMenu}
            >
              Ads
            </div>
          </Link>
          <Link href="/references">
            <div
              className="block cursor-pointer px-4 py-2"
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
