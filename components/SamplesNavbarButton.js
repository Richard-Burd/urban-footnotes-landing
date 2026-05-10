const SamplesNavbarButton = ({ title, bgColor, isActive }) => {
  return (
    <div className={`${isActive ? bgColor : "bg-inherit"} px-2 py-4`}>
      <span
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font mx-1 inline-block rounded-[11px] bg-[#103a15ff] px-4 py-2 text-[20px] font-bold text-[#b5f5a5ff] min-[530px]:text-left`}
      >
        {title}
      </span>
    </div>
  );
};

export default SamplesNavbarButton;
