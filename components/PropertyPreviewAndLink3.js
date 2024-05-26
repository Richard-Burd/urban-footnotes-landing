import React from "react";

const PropertyPreviewAndLink = ({
  ranking1,
  ranking2,
  address1,
  address2,
  href,
  imageName,
}) => {
  return (
    <div id={address1} className="mb-12">
      <div className="text-slate-300 text-1xl text-center">{ranking1}</div>
      {/* <div className="text-slate-300 text-1xl text-center">{address1}</div>
      <div className="text-slate-300 text-1xl text-center">{address2}</div> */}
      <div className="flex justify-center">
        <div style={{ width: "200px", height: "273px" }}>
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
                  className="absolute z-20 transition-opacity duration-300 ease-in-out opacity-40 hover:opacity-90 focus:opacity-100 transform origin-center hover:scale-105"
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
      <div className="text-slate-300 text-1xl text-center">{ranking2}</div>
    </div>
  );
};

export default PropertyPreviewAndLink;