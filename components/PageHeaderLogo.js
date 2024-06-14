import Image from "next/image";

export default function PageHeaderLogo() {
  return (
    <div className="mx-4 mt-20 flex justify-center">
      <Image
        src="/images/ufn-logo-light.svg"
        alt="Urban Cruise Ship Logo"
        width={500}
        height={164.65}
        unoptimized={true}
        style={{ minWidth: "200px", opacity: 0.7 }}
      />
    </div>
  );
}
