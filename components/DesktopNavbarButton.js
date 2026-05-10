const DesktopNavbarButton = ({ title, bgColor, isActive }) => {
  return (
    <div className={`${isActive ? bgColor : "bg-inherit"} px-1 py-4`}>
      <button
        type="button"
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font mx-1 rounded-md bg-stone-700 px-3 py-2 text-xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navbar-home focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950`}
      >
        {title}
      </button>
    </div>
  );
};

export default DesktopNavbarButton;
