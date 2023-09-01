import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <Link href="https://urbancruiseship.org/">
        <div className="lg:flex justify-center lg:m-20 mx-4 mt-24">
          <div className="lg:flex">
            <p className="ucs-font tracking-wider text-2xl lg:text-right text-center text-stone-300 lg:pl-10 opacity-75 my-6">
              A project of Urban Cruise Ship
            </p>
          </div>
          <div className="flex lg:pl-8 items-center justify-center">
            <Image
              src="/ucs-logo-light.svg"
              alt="Urban Cruise Ship Logo"
              width={200}
              height={100}
              unoptimized={true}
              style={{ minWidth: "200px", opacity: 0.8 }}
            />
          </div>
        </div>
      </Link>
      <footer>
        <Link href="mailto:richard@urbancruiseship.org">
          <div className="pt-20 roboto-font pb-40 tracking-wider text-1xl text-center text-stone-300">
            contact: richard@urbancruiseship.org
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
