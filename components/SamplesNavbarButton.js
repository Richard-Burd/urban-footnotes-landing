const SamplesNavbarButton = ({ title, bgColor, isActive }) => {
  return (
    <div className={`${isActive ? bgColor : "bg-inherit"} px-2 py-4`}>
      <button
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font mx-1 rounded-[11px] bg-[#103a15ff] px-4 py-2 text-left text-[20px] font-bold text-[#b5f5a5ff] focus:outline-none`}
      >
        {title}
      </button>
      <style jsx>{`
        .navbar-button-shadow {
          box-shadow: 6px 6px 7px rgb(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SamplesNavbarButton;
