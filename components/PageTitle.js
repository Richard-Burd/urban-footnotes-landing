export default function PageTitle({ topTitle, textColor, shadowColor }) {
  return (
    <div className="mt-4 lg:mt-4">
      <div
        className={`${shadowColor} page-title-shadow roboto-font text-6.3xl sm:text-6.4xl pb-8 text-center tracking-wide lg:text-5.5xl ${textColor}`}
      >
        {topTitle}
      </div>
    </div>
  );
}
