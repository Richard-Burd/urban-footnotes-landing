export default function PageTitle({ topTitle, textColor, shadowColor }) {
  return (
    <div className="">
      <div
        className={`${shadowColor} page-title-shadow roboto-font pb-8 text-center text-6.5xl tracking-wide ${textColor}`}
      >
        {topTitle}
      </div>
    </div>
  );
}
