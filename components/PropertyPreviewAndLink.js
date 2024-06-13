import React from "react";

const image = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

const PropertyPreviewAndLink = ({ ranking, address1, href, imageName }) => {
  return (
    <div id={address1} className="mb-4">
      <div className="text-1xl text-center text-slate-300">{ranking}</div>
      <div className="flex justify-center">
        <div style={{ width: "200px", height: "300px" }}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="my-2">
              <div>
                <img
                  className="absolute z-10"
                  src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/${imageName}`}
                  alt="Urban Foot Notes Image"
                  width={200}
                  height={400}
                />
                <img
                  className="absolute z-20 origin-center transform opacity-40 transition-opacity duration-300 ease-in-out hover:scale-105 hover:opacity-90 focus:opacity-100"
                  src="/images/pdf-preview-pointy-hand.svg"
                  alt="Pointy Hand Preview"
                  width={200}
                  height={500}
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyPreviewAndLink;
