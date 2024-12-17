import Image from "next/image";

export default function PageHeaderLogo() {
  return (
    <div className= "flex justify-center">
      <Image
        src="/images/ufn-logo-light.svg"
        alt="Urban Foot Notes Logo"
        width={400}
        height={0}
        unoptimized={true}
        style={{ minWidth: "100px", opacity: "1" }}
      />
    </div>
  );
}
