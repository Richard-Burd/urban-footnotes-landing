const SamplesNavbarButton = ({ title, bgColor, isActive }) => {
  return (
    <div className={`${isActive ? bgColor : "bg-inherit"} px-1 py-4`}>
      <button
        className={`${isActive ? "navbar-button-shadow" : ""} roboto-font mx-1 rounded-md bg-stone-700 px-4 py-2 text-xl font-bold text-neutral-300 focus:outline-none`}
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
