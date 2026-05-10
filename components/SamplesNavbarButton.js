const SamplesNavbarButton = ({ title, bgColor, isActive }) => {
  return (
    <div className={`${isActive ? bgColor : "bg-inherit"} px-2 py-4`}>
      <button
        type="button"
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font mx-1 rounded-[11px] bg-[#103a15ff] px-4 py-2 text-[20px] font-bold text-[#b5f5a5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navbar-samples focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 min-[530px]:text-left`}
      >
        {title}
      </button>
    </div>
  );
};

export default SamplesNavbarButton;
