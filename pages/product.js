import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function Product() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  return (
    <div className="w-full max-w-screen-lg">
      <div>
        <div>
          <PageTitle
            topTitle="Product Features"
            textColor="text-title-text-product"
            shadowColor={`title-shadow-product`}
            showLogo={true} // Integrates the logo
          />
        </div>
        <Image
          alt="First & Second pages of the product"
          src={`${baseUrl}/desktop-product-page-first-n-second-page.6.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
        />
        <Image
          alt="Third page of the product"
          src={`${baseUrl}/desktop-product-page-third-page.6.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
        />
        <Image
          alt="Fourth page of the product"
          src={`${baseUrl}/desktop-product-page-fourth-page.6.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
        />

        {/* <section
          id="property-1"
          className="flex justify-center px-4 sm:justify-start"
        >
          <div className="roboto-font max-w-screen-md pt-20 text-stone-400">
            <h2 className="text-left text-2xl text-stone-300">
              Walkability Rating
            </h2>
            <p className="text-xl">
              The <i>Walkability Rating</i> scores are calculated by an
              on-the-ground observer rating the neighborhood on a number of
              criteria. These include:
            </p>
            <ul className="mx-6 list-outside list-square text-base sm:mx-10">
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
          className="flex justify-center px-4 sm:justify-start"
        >
          <div className="roboto-font max-w-screen-md pt-20 text-stone-400">
            <h2 className="text-left text-2xl text-stone-300">
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

        <div className="roboto-font text-1xl mx-4 text-stone-300 lg:mx-32">
          <br />
          <br />
          <br />
        </div> */}
      </div>
    </div>
  );
}
