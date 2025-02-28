// trigger build with env vars on vercel.

import Image from "next/image";

const ProductSample = ({
  imagePath,
  address,
  serviceTypesNearby,
  serviceTypesFarther,
  serviceTypesDistant,
  walkabilityScore,
  pdfPath,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  return (
    <div id={address} className="relative mb-24 text-center text-slate-300">
      <div className="pb-3 text-2xl">
        <div>
          <span className="font-bold text-lime-500">{serviceTypesNearby}</span>{" "}
          Service Types Nearby
        </div>
        <div>
          <span className="font-bold text-yellow-300">
            {serviceTypesFarther}
          </span>{" "}
          Service Types Farther
        </div>
        <div>
          <span className="font-bold text-red-400">{serviceTypesDistant}</span>{" "}
          Service Types Distant
        </div>
      </div>
      <a
        href={`${baseUrl}/${pdfPath}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center px-2">
          <Image
            src={`${baseUrl}/${imagePath}`}
            alt={`picture of ${address}`}
            // true width & true height controlled by parent grid
            // image fills parent's allotted space
            width={400}
            height={1}
          />
          <img
            className="absolute flex scale-95 transform justify-center opacity-40 transition-opacity duration-300 ease-in-out hover:scale-100 hover:opacity-90 focus:opacity-100"
            src="/images/pdf-preview-pointy-hand.svg"
            alt="Pointy Hand Preview"
            // true width & true height controlled by parent grid
            // image fills parent's allotted space
            width={400}
            height={1}
          />
        </div>
      </a>
      <div className="pt-3 text-2xl">
        Walkability Score: <span className="font-bold">{walkabilityScore}</span>
      </div>
    </div>
  );
};

export default ProductSample;
