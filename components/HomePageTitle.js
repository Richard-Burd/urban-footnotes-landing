export default function HomePageTitle({ topTitle, textColor, shadowColor }) {
  return (
    <div className="mx-3 mt-10 lg:mx-0">
      <div
        className={`${shadowColor} page-title-shadow roboto-font pb-4 text-center text-4xl sm:text-5xl lg:text-6xl ${textColor}`}
      >
        {topTitle}
      </div>
    </div>
  );
}
