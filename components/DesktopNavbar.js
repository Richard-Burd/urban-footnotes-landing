import Link from "next/link";
import { useRouter } from "next/router";
import DesktopNavbarButton from "./DesktopNavbarButton";

export default function DesktopNavbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    { title: "Home", path: "/", bgColor: "bg-navbar-home" },
    { title: "About", path: "/about", bgColor: "bg-navbar-about" },
    { title: "Team", path: "/team", bgColor: "bg-navbar-team" },
    { title: "Product", path: "/product", bgColor: "bg-navbar-product" },
    { title: "Samples", path: "/samples", bgColor: "bg-navbar-samples" },
    {
      title: "Order",
      path: "/order",
      bgColor: "bg-navbar-order",
    },
    {
      title: "Contact",
      path: "/contact",
      bgColor: "bg-navbar-contact-us",
    },
    // removed until we have ads { title: "Ads", path: "/ads", bgColor: "bg-navbar-ads" },
    {
      title: "References",
      path: "/references",
      bgColor: "bg-navbar-references",
    },
  ];

  return (
    <nav className="bg-neutral-950 px-2 text-white">
      <div className="flex justify-center">
        <div className="flex w-full max-w-screen-lg flex-wrap justify-evenly">
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
