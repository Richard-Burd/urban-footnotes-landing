import Image from "next/image";

export default function PageHeaderLogo() {
  return (
    <div className="m-8 mx-4 flex justify-center">
      <Image
        src="/images/ufn-logo-light.svg"
        alt="Urban Cruise Ship Logo"
        width={400}
        height={0}
        unoptimized={true}
        style={{ minWidth: "100px", opacity: 0.7 }}
      />
    </div>
  );
}
