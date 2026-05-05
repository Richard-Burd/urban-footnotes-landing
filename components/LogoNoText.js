import Image from "next/image";

const LogoNoText = ({ className = "h-10 w-10" }) => (
  <Image
    src="/images/logo-home/ufn-logo-light-no-text.svg"
    alt="Urban Footnotes"
    width={96}
    height={96}
    className={className}
    sizes="48px"
    unoptimized
  />
);

export default LogoNoText;
