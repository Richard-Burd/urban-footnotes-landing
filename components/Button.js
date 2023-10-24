const Button = ({ title, bgColor }) => {
  return (
    <button
      className={`${bgColor} roboto-font text-xl font-bold mx-1 text-neutral-300 py-2 px-4 rounded focus:outline-none`}
    >
      {title}
    </button>
  );
};

export default Button;
