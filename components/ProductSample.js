import Image from "next/image";
import { getAssetBaseUrl, toAssetUrl } from "@/lib/assetUrl";

const DEFAULT_WIDTH = 400;
const responsiveImageStyle = { width: "100%", height: "auto" };

const ProductSample = ({
  imagePath,
  address,
  serviceTypesNearby,
  serviceTypesFarther,
  serviceTypesDistant,
  walkabilityScore,
  pdfPath,
  width = DEFAULT_WIDTH,
}) => {
  const baseUrl = getAssetBaseUrl();
  const sampleImageSizes = `(min-width: 768px) ${width}px, calc(100vw - 2rem)`;
  const overlayImageStyle = { ...responsiveImageStyle, maxWidth: width };

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
        href={toAssetUrl(pdfPath, baseUrl)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open PDF sample report for ${address}`}
      >
        <div className="relative flex justify-center px-2">
          <Image
            src={toAssetUrl(imagePath, baseUrl)}
            alt={`Property report preview for ${address}`}
            width={width}
            height={1}
            sizes={sampleImageSizes}
            style={responsiveImageStyle}
          />
          <Image
            className="absolute h-auto w-full scale-95 transform justify-center opacity-40 transition-opacity duration-300 ease-in-out hover:scale-100 hover:opacity-90 focus:opacity-100"
            src="/images/pdf-preview-pointy-hand.svg"
            alt=""
            aria-hidden="true"
            width={width}
            height={1}
            sizes={sampleImageSizes}
            style={overlayImageStyle}
            unoptimized
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
