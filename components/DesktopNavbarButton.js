const DesktopNavbarButton = ({ title, bgColor, isActive }) => {
  return (
    <div className={`${isActive ? bgColor : "bg-inherit"} px-1 py-4`}>
      <button
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font mx-1 rounded-md bg-stone-700 px-3 py-2 text-xl font-bold text-white focus:outline-none`}
      >
        {title}
      </button>
    </div>
  );
};

export default DesktopNavbarButton;
