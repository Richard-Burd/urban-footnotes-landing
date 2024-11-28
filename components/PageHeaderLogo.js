import Image from "next/image";

export default function PageHeaderLogo() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/ufn-logo-light.svg"
        alt="Urban Cruise Ship Logo"
        width={350}
        height={0}
        unoptimized={true}
        style={{ minWidth: "100px", opacity: 0.7 }}
      />
    </div>
  );
}
