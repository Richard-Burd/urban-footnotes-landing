export default function Addresses() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center mt-20 roboto-font text-3xl lg:text-7xl text-stone-300 lg:pl-10 opacity-60">
          Urban Foot Notes
        </h1>
      </div>

      <div className="lg:m-20">
        <div>
          <div className="roboto-font text-base sm:text-2xl text-center pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-4">
            <span className="block sm:inline sm:mr-2">Addresses</span>
            <span className="block sm:inline">(Product Examples)</span>
          </div>
        </div>

        <section
          id="property-1"
          className="flex justify-center sm:justify-start px-4"
        >
          <div className="roboto-font text-stone-400 pt-20 max-w-screen-md">
            <h2 className="text-2xl text-stone-300 text-left">
              Walkability Rating
            </h2>
            <p className="text-xl">
              The <i>Walkability Rating</i> scores are calculated by an
              on-the-ground observer rating the neighborhood on a number of
              criteria. These include:
            </p>
            <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
              <li className="pt-3">
                Sidewalk cracks, bevels, and slope/incline/elevation change
              </li>
              <li className="py-3">
                Wheelchair accessibility for nearby businesses, residences, and
                public venues.
              </li>
              <li className="py-3">
                Availability of bike lanes to move bicycle traffic off of
                sidewalks
              </li>
              <li>Audible crosswalks for the hearing impaired </li>
              <li className="py-3">
                Ability of a pedestrian, or a pedestrian pushing a stroller, or
                even a wheelchair user to navigate sidewalks and crosswalks
              </li>
            </ul>
          </div>
        </section>

        <section
          id="property-1"
          className="flex justify-center sm:justify-start px-4"
        >
          <div className="roboto-font pt-20 max-w-screen-md">
            <h2 className="text-sm sm:text-2xl text-stone-300 text-left">
              1015 Elvira St. Nashville TN
            </h2>
            <p className="hidden sm:block text-xs sm:text-base text-stone-400 text-left">
              Click on the preview below to view a PDF in your browser
            </p>
            <div className="flex">
              <div
                className="relative"
                style={{ width: "200px", height: "300px" }}
              >
                <a
                  href="https://drive.google.com/uc?export=view&id=1G4vbhETDJNiWW2xOBsMNICoxibBkg_Wk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    id="property-image-1"
                    className="my-2 relative text-left"
                  >
                    <img
                      className="absolute z-10"
                      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-1015-elvira.jpg`}
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
              </div>
              <div className="hidden sm:block text-stone-300 ml-4 pt-11 text-1xl italic max-w-[200px]">
                <p>
                  This is our marquee property report featuring our latest
                  formatting and graphics. It is our most complete report to
                  date.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="property-1"
          className="flex justify-center sm:justify-start px-4"
        >
          <div className="roboto-font pt-20 max-w-screen-md">
            <h2 className="text-sm sm:text-2xl text-stone-300 text-left">
              555 Church St. Nashville TN
            </h2>
            <p className="hidden sm:block text-xs sm:text-base text-stone-400 text-left">
              Click on the preview below to view a PDF in your browser
            </p>
            <div className="flex">
              <div
                className="relative"
                style={{ width: "200px", height: "300px" }}
              >
                <a
                  href="https://drive.google.com/uc?export=view&id=1-RJ4qknmk9nFWxc5sy06QwzMYG8FXuW6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    id="property-image-1"
                    className="my-2 relative text-left"
                  >
                    <img
                      className="absolute z-10"
                      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-555-church.jpg`}
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
              </div>
              <div className="hidden sm:block text-stone-300 ml-4 pt-11 text-1xl italic max-w-[200px]">
                <p></p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="property-1"
          className="flex justify-center sm:justify-start px-4"
        >
          <div className="roboto-font pt-20 max-w-screen-md">
            <h2 className="text-sm sm:text-2xl text-stone-300 text-left">
              607b Moore Ave. Nashville TN
            </h2>
            <p className="hidden sm:block text-xs sm:text-base text-stone-400 text-left">
              Click on the preview below to view a PDF in your browser
            </p>
            <div className="flex">
              <div
                className="relative"
                style={{ width: "200px", height: "300px" }}
              >
                <a
                  href="https://drive.google.com/uc?export=view&id=1L3_-Iz1fPGPzuy-f4rJLGzLkxWrvmBKx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    id="property-image-1"
                    className="my-2 relative text-left"
                  >
                    <img
                      className="absolute z-10"
                      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-607b-moore.jpg`}
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
              </div>
              <div className="hidden sm:block text-stone-300 ml-4 pt-11 text-1xl italic max-w-[200px]">
                <p></p>
              </div>
            </div>
          </div>
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
