import Image from "next/image";

export default function PageTitle() {
  return (
    <div className="flex justify-center mt-20 mx-4">
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
