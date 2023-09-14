export default function Addresses() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center mt-20 roboto-font text-4xl lg:text-7xl text-stone-300 lg:pl-10 opacity-60">
          Urban Foot Notes
        </h1>
      </div>

      <div className="lg:m-20">
        <center>
          <div className="roboto-font text-2xl pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-4">
            Addresses (Product Examples)
          </div>
        </center>
        <section id="property-1" className="roboto-font pt-20 pb-48 mb-24">
          <h2 className="text-2xl text-stone-300">
            1015 Elvira St. Nashville TN
          </h2>
          <p className="text-stone-400">
            click on the preview below to download a pad
          </p>
          <a
            href="https://drive.google.com/uc?export=view&id=1G4vbhETDJNiWW2xOBsMNICoxibBkg_Wk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="property-image-1" className="my-2 relative">
              <img
                className="absolute z-10"
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-1015-elvira.png`}
                alt="Urban Foot Notes Image"
                width={200}
                height={400}
              />
              <img
                className="absolute z-20 transition-opacity duration-300 ease-in-out opacity-40 hover:opacity-90 focus:opacity-100 transition-transform duration-300 ease-in-out transform origin-center hover:scale-105"
                src="/pdf-preview-pointy-hand.svg"
                alt="Pointy Hand Preview"
                width={200}
                height={500}
              />
            </div>
          </a>
        </section>

        <section id="property-2" className="roboto-font pt-20 pb-48 mb-24">
          <h2 className="text-2xl text-stone-300">
            1015 Elvira St. Nashville TN
          </h2>
          <p className="text-stone-400">
            click on the preview below to download a pad
          </p>
          <a
            href="https://drive.google.com/uc?export=view&id=1G4vbhETDJNiWW2xOBsMNICoxibBkg_Wk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="property-image-1" className="my-2 relative">
              <img
                className="absolute z-10"
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-1015-elvira.png`}
                alt="Urban Foot Notes Image"
                width={200}
                height={400}
              />
              <img
                className="absolute z-20 transition-opacity duration-300 ease-in-out opacity-40 hover:opacity-90 focus:opacity-100 transition-transform duration-300 ease-in-out transform origin-center hover:scale-105"
                src="/pdf-preview-pointy-hand.svg"
                alt="Pointy Hand Preview"
                width={200}
                height={500}
              />
            </div>
          </a>
        </section>

        <section id="property-3" className="roboto-font pt-20 pb-48 mb-24">
          <h2 className="text-2xl text-stone-300">
            1015 Elvira St. Nashville TN
          </h2>
          <p className="text-stone-400">
            click on the preview below to download a pad
          </p>
          <a
            href="https://drive.google.com/uc?export=view&id=1G4vbhETDJNiWW2xOBsMNICoxibBkg_Wk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="property-image-1" className="my-2 relative">
              <img
                className="absolute z-10"
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-1015-elvira.png`}
                alt="Urban Foot Notes Image"
                width={200}
                height={400}
              />
              <img
                className="absolute z-20 transition-opacity duration-300 ease-in-out opacity-40 hover:opacity-90 focus:opacity-100 transition-transform duration-300 ease-in-out transform origin-center hover:scale-105"
                src="/pdf-preview-pointy-hand.svg"
                alt="Pointy Hand Preview"
                width={200}
                height={500}
              />
            </div>
          </a>
        </section>

        <div className="roboto-font text-1xl text-stone-300 mx-4 lg:mx-32">
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
