import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div id="ucs-footer-label">
      <Link href="https://urbancruiseship.org/">
        <div className="m-3 justify-center pt-1 sm:m-8 sm:pt-4 lg:flex xl:m-8 xl:pt-8">
          <div className="lg:flex">
            <p className="ucs-font my-6 text-center text-2xl tracking-wider text-stone-300 opacity-75 lg:pl-10 lg:text-right">
              A project of Urban Cruise Ship
            </p>
          </div>
          <div className="flex items-center justify-center lg:pl-8">
            <Logo type="ucs" color="#ac9c84ff" width="200" height="100" />
          </div>
        </div>
      </Link>
      <footer>
        <div className="ucs-font pb-12 pt-3 text-center tracking-widest text-stone-500 md:text-xl lg:text-2xl">
          Copyright © Urban Cruise Ship {new Date().getFullYear()}
        </div>

        <Link href="mailto:contact@urbancruiseship.org">
          <div className="roboto-font text-1xl pb-10 text-center tracking-wider text-stone-300">
            contact@urbancruiseship.org
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
