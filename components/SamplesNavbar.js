import Link from "next/link";
import SamplesNavbarButton from "./SamplesNavbarButton";
import { useRouter } from "next/router";

const sampleNavItems = [
  {
    title: "Property Report Sets, ranked by metrics",
    path: "/samples",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Property Report Metrics Scoreboard",
    path: "/scoreboard",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Gallery of Streetscape Illustrations",
    path: "/gallery-streetview",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Gallery of Close-Up Aerial Illustrations",
    path: "/gallery-close-up-aerial",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Gallery of Mid-Range Aerial Illustrations",
    path: "/gallery-mid-range-aerial",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Gallery of Distant Aerial Illustrations",
    path: "/gallery-distant-aerial",
    bgColor: "bg-navbar-samples",
  },
];

export default function SamplesNavbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div className="text-5xl text-slate-50">This is the Samples Navbar</div>
      return (
      <nav className="bg-neutral-950 px-2 text-white">
        <div className="flex justify-center">
          <div className="flex w-full max-w-screen-lg justify-evenly">
            {sampleNavItems.map((item, index) => (
              <Link href={item.path} key={item.title}>
                <SamplesNavbarButton
                  key={item.path || index}
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
    </>
  );
}
