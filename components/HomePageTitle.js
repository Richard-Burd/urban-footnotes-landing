export default function HomePageTitle({ topTitle, textColor, shadowColor }) {
  return (
    <div className="lg:mx-0 lg:mb-16 mx-3 mb-6 mt-20">
      <div
        className={`${shadowColor} page-title-shadow roboto-font pb-4 text-center text-4xl sm:text-5xl lg:text-6xl ${textColor}`}
      >
        {topTitle}
      </div>
    </div>
  );
}
