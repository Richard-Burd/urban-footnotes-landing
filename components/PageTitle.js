export default function PageTitle({ topTitle, textColor }) {
  return (
    <div
      className={`roboto-font text-6.5xl pb-8 text-center tracking-wide ${textColor}`}
    >
      {topTitle}
    </div>
  );
}
