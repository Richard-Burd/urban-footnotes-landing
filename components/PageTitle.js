export default function PageTitle({ topTitle, textColor, shadowColor }) {
  return (
    <div className="m-4 lg:mt-4">
      <div
        className={`${shadowColor} page-title-shadow roboto-font pb-8 text-center text-4xl tracking-wide lg:pb-4 lg:text-5xl ${textColor}`}
      >
        {topTitle}
      </div>
    </div>
  );
}
