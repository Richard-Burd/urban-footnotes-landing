export default function PageTitle({ topTitle, textColor }) {
  return (
    <div
      className={`roboto-font pb-8 text-center text-6xl tracking-wide ${textColor}`}
    >
      {topTitle}
    </div>
  );
}
