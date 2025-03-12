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
    title: "Gallery of Close-Up Aerial Illustrations",
    path: "/gallery-close-up-aerial",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Property Report Metrics Scoreboard",
    path: "/scoreboard",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Gallery of Mid-Range Aerial Illustrations",
    path: "/gallery-mid-range-aerial",
    bgColor: "bg-navbar-samples",
  },
  {
    title: "Gallery of Streetscape Illustrations",
    path: "/gallery-streetview",
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
    <div className="flex justify-center">
      <div className="grid gap-x-2 gap-y-0 min-[530px]:w-[530px] min-[530px]:grid-cols-2">
        {sampleNavItems.map((item, index) => (
          <Link href={item.path} key={item.title} className="m-0 block p-0">
            <SamplesNavbarButton
              key={item.path || index}
              title={item.title}
              bgColor={item.bgColor}
              isActive={currentPath === item.path}
              className="m-0 block p-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
