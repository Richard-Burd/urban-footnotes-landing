const LOGO_SRC = "/images/logo-home/ufn-logo-no-text.svg";

const LogoNoText = ({
  className = "h-10 w-10",
  color = "#fffbc2",
  style = {},
}) => (
  <span
    aria-hidden="true"
    className={`inline-block bg-current ${className}`}
    style={{
      color,
      maskImage: `url("${LOGO_SRC}")`,
      maskPosition: "center",
      maskRepeat: "no-repeat",
      maskSize: "contain",
      WebkitMaskImage: `url("${LOGO_SRC}")`,
      WebkitMaskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      ...style,
    }}
  />
);

export default LogoNoText;
