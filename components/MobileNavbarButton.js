import Link from "next/link";

const MobileNavbarButton = ({ title, bgColor, isActive, path }) => {
  return (
    <div
      className={`flex w-full justify-center ${isActive ? bgColor : "bg-inherit"} p-[8px]`}
    >
      <button
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font w-full rounded-md bg-stone-700 text-xl font-bold focus:outline-none`}
      >
        <Link
          href={path}
          className="flex h-full w-full items-center justify-center text-neutral-300 no-underline"
          style={{ textDecoration: "none", color: "#d1d5db" }}
        >
          <div className="py-[2px] text-[15px]">{title}</div>
        </Link>
      </button>
      <style jsx>{`
        .navbar-button-shadow {
          box-shadow: 6px 6px 7px rgb(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default MobileNavbarButton;
