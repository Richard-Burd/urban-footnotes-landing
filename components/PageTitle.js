export default function PageTitle({ topTitle, textColor, shadowColor }) {
  return (
    <div className="mx-3 mt-10 lg:mx-0">
      <div
        className={`${shadowColor} page-title-shadow roboto-font pb-8 text-center text-6.3xl tracking-wide sm:text-6.4xl lg:text-6.5xl ${textColor}`}
      >
        {topTitle}
      </div>
    </div>
  );
}
