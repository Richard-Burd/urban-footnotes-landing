export default function Products() {
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
            <span className="block sm:inline sm:mr-2">Product Features</span>
            {/* <span className="block sm:inline">(Current and Proposed)</span> */}
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
          <div className="roboto-font text-stone-400 pt-20 max-w-screen-md">
            <h2 className="text-2xl text-stone-300 text-left">
              Realtor Survey
            </h2>
            <p className="text-xl">
              Do you want to shape the future of our product? Please take some
              time to fill out our
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTepFxRCWUUctQCEZtMvU_uext5DxXXaputpdFxfLGButUZg/viewform"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;
                <b>survey</b>
                &nbsp;
              </a>
              and tellus what you think! We are looking for feedback from
              realtors, appraisers, and other real estate professionals.
            </p>
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
