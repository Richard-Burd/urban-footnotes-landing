import Image from "next/image";

const ProductSample = ({
  imagePath,
  address,
  serviceTypesNearby,
  serviceTypesFarther,
  walkabilityScore,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  return (
    <div id={address} className="relative text-center text-slate-300">
      <div>
        <span className="font-bold text-green-500">{serviceTypesNearby}</span>{" "}
        Service Types Nearby
      </div>
      <div>
        <span className="font-bold text-yellow-500">{serviceTypesFarther}</span>{" "}
        Service Types Farther
      </div>
      <div className="relative">
        <Image
          src={`${baseUrl}/${imagePath}`}
          alt={`picture of ${address}`}
          width={400}
          height={40}
          quality={2}
        />
        <img
          className="absolute left-0 top-0 transform opacity-40 transition-opacity duration-300 ease-in-out hover:scale-105 hover:opacity-90 focus:opacity-100"
          src="/images/pdf-preview-pointy-hand.svg"
          alt="Pointy Hand Preview"
          width={400}
          height={40}
        />
      </div>
      <div>
        Walkability Score:
        <span className="font-bold">{walkabilityScore}</span>
      </div>
    </div>
  );
};

export default ProductSample;
