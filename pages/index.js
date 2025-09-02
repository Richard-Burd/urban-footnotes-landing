import Logo from "@/components/LogoLanding";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ProductSample from "@/components/ProductSample";
import samplesData from "@/lib/samplesData";
import SamplesHeader from "@/components/SamplesHeader";
// import Button from "@/components/Button"; // unused right now

export default function Home() {
  const baseUrl =
    process.env.NEXT_PUBLIC_S3_BASE_URL?.replace(/\/+$/, "") ?? "";
  const videoUrl = `${baseUrl}/ads/ufn-about-us-v2-small.mp4`;

  const whoTitle = "Who We Are";
  const homeTitle = "Our Mission";
  const homeText =
    "To enhance our society and planet's health, our reports display how many commonly-used services are within short walking distance of a given address — in a standardized, comparative format — incentivizing and promoting development that allows more residents to conveniently live without owning cars.";


/* ---- presentational helpers ---- */
/* ---- card format, rounded shape, padding ---- */
const CARD =
  "rounded-[10px] group-hover:shadow-lg p-4 transition-shadow";
const TITLE = "title-shadow-samples page-title-shadow roboto-font text-center text-[35px] [@media(min-width:1000px)]:text-[45px]";

  // Filter & sort the "Highly Walkable" data
  const highlyWalkableData = samplesData
    .filter((entry) => entry.category === "Highly Walkable")
    .sort((a, b) => Number(a.categoryRank) - Number(b.categoryRank)); // Sort by categoryRank (converted to a number)
  return (
    <div className="text-white">
      <Head>
        <link
          rel="preload"
          href={videoUrl}
          as="video"
          type="video/mp4"
          media="(min-width: 1000px)"
        />
      </Head>

      {/* Page grid (12 cols) */}
      <main className="mx-auto grid max-w-screen-xl grid-cols-12 gap-x-0 gap-y-0 py-0 lg:mb-4 2xl:max-w-[1600px]">
        {" "}
        {/* HERO */}
        <section className="relative isolate col-span-12 mx-[calc(50%-50vw)] w-screen">
          {/* Full-bleed background */}
          <Image
            src="/images/homepage-gradient.svg"
            alt="homepage-gradient"
            fill
            sizes="100vw"
            className="-z-10 object-cover"
            priority
          />

          {/* Centered content wrapper */}
          <div className=" max-w-screen-xl px-6 py-6 md:px-10 md:py-10 xl:max-w-[1600px]">
            <div className="mx-auto grid min-h-[400px] max-w-5xl grid-cols-1 items-start justify-center gap-0 md:min-h-[0px] md:grid-cols-2 md:items-center md:gap-12">
              <div>
                <Logo type="ufn" className="h-auto max-h-[400px] w-full" />
              </div>

              <div className="self-start text-center md:self-auto md:text-left">
                <h1 className="text-[clamp(1.75rem,3.6vw,2rem)] font-bold leading-tight">
                  Neighborhood reports on walkability and access to services.
                </h1>
                <p className="mt-4 text-[clamp(1.2rem,3.6vw,1.4rem)] leading-relaxed">
                  Research that supports healthier, walkable, more sustainable
                  communities.
                </p>
                <Link
                  href="/samples"
                  className="mb-10 mt-4 inline-flex w-full items-center justify-center rounded-lg bg-stone-900 py-3 text-[clamp(1.2rem,3.6vw,1.4rem)] font-semibold text-current no-underline shadow transition visited:text-current visited:no-underline hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300"
                >
                  View Sample Reports
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* VIDEO (full-width card) */}
        <section className="col-span-12 mt-0">
          <div className="group relative m-4 overflow-hidden rounded-[10px]">
            <div className="rounded-[10px] bg-stone-900/20 transition-shadow group-hover:bg-stone-900/30 group-hover:shadow-lg">
              <video
                className="h-auto w-full object-cover"
                controls
                preload="metadata"
                poster=""
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Sorry, your browser doesn’t support embedded videos.
              </video>
            </div>
          </div>
        </section>
        {/* LEFT COLUMN: who + mission (no sample here now) */}
        <div className="col-span-12 p-4 md:col-span-6">
          {/* MISSION STATEMENT (clickable card) */}
          <div className="group relative mt-6 self-start"> 
            {/* Visual card */}
            <div
              id="mission-statement-box"
              className={`${CARD}  bg-[rgba(86,85,70,0.4)] group-hover:bg-[rgba(86,85,70,0.6)]`}>
            
         
              <div className="flex flex-col gap-4">
                <div className={`${TITLE} text-title-text-home`}>
                  <div className="text-center">{homeTitle}</div>
                </div>
                <div className="roboto-font px-8 pb-8 pt-0 text-[clamp(1.2rem,3.6vw,1.5rem)] tracking-wide">
                  <p>{homeText}</p>
                </div>
              </div>
            </div>

            {/* Invisible overlay link */}
            <Link
              href="/about" // <-- change this route to your actual About Us page
              aria-label="Learn more about us"
              className="decoration-none absolute inset-0 z-10 text-current no-underline visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>

          {/* Property Report Metrics Scoreboard (clickable card) */}
          <div className="group relative my-8 max-w-[770px] overflow-hidden rounded-[10px]">
            {/* Visual card */}
            <div 
            className={`${CARD}  bg-green-900/20 group-hover:bg-green-900/40`}>
              {/* Card Title */}
              <div
                id="page-title"
                className={`${TITLE} text-title-text-samples `}
              >
                Our Top Properties
              </div>

              {/* Section: Highly Walkable */}
              <div className="pb-4">
                <div className="mb-2 border-b-4 border-x-slate-200">
                  <div className="pt-3 text-left text-[clamp(1.2rem,3.6vw,1.4rem)] italic text-white">
                    The highlighted numbers are the number of business
                    categories which are found at different distances. Green
                    represent a 5 minute walk; yellow, 10 minutes. Anything
                    farther is marked in red. The grey number is the walkability
                    score (out of 30).
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    {highlyWalkableData.slice(0, 8).map((entry, index) => (
                      <div
                        key={entry.address}
                        className="flex w-full items-center border-b border-slate-700 py-2 last:border-none"
                      >
                        {/* Address */}
                        <div className="w-full pr-4 text-right">
                          <div
                            key={index}
                            className="text-[18px] leading-[28px] md:text-[20px]"
                          >
                            {entry.address}
                          </div>
                        </div>

                        {/* Walkability Data */}
                        <div className="flex gap-2 text-center text-[16px] font-semibold text-neutral-950 leading-[24px] md:text-[18px]">
                          <div className="w-10 bg-[#73e369ff] md:w-12">
                            {entry.greenNear}
                          </div>
                          <div className="w-10 bg-[#f7fc70ff] md:w-12">
                            {entry.yellowFarther}
                          </div>
                          <div className="w-10 bg-[#e37569ff] md:w-12">
                            {entry.redDistant}
                          </div>
                          <div className="w-10 rounded-[6px] bg-[#cbd4e0ff] md:w-12">
                            {entry.walkabilityScore}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Invisible overlay link — covers whole card */}
            <Link
              href="/scoreboard" // <-- change this to where you want the card to go
              aria-label="View full metrics scoreboard"
              className="decoration-none absolute inset-0 z-10 text-current no-underline visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>

          {/* Urban Cruise Ship plug (clickable card) */}
          <div className="group relative max-w-[770px] self-start overflow-hidden rounded-[10px] pt-0">
            {/* Visual card */}
            <div
              id="urban-cruise-ship-box"
    
              className={`${CARD} bg-blue-900/20 group-hover:bg-blue-900/40 group-hover:shadow-lg`}>
          
              <div className="flex flex-col gap-4">
                <div className={`${TITLE} text-title-text-references`}>
                  <div className="text-center">Other Projects</div>
                </div>

                <div className="roboto-font px-8 pb-8 pt-0 text-[clamp(1.2rem,3.6vw,1.5rem)] tracking-wide">
                  <p>
                    Check out our sister organization, Urban Cruise Ship
                    Analysis Solutions, which provides articles and data
                    analysis services for anyone interested in learning more
                    about solutions for a more sustainable world.
                  </p>

                  {/* Just render the logo as decoration inside the card */}
                  <div className="mt-4 flex px-10">
                    <Logo
                      type="ucs"
                      color="#ac9c84ff"
                      width="200"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Invisible overlay link for the whole card */}
            <Link
              href="https://urbancruiseship.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about Urban Cruise Ship Analysis Solutions"
              className="decoration-none absolute inset-0 z-10 text-current no-underline visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>
        </div>
        {/*End of LEFT COLUMN */}
        {/* RIGHT COLUMN: sample card + product preview */}
        <div
          id="right-column"
          className="col-span-12 p-4 md:col-span-6"
        >
          {/* SAMPLE CARD - visual card + invisible overlay link */}
          <div className="group relative overflow-hidden rounded-[10px]">
            <div className={`${CARD}  bg-green-900/20 group-hover:bg-green-900/40 mt-6`}>
              <div className={`${TITLE} text-title-text-samples`}>
                Sample Report
              </div>
              <div className="p-0">
                <ProductSample
                  imagePath="preview-233-8th-ave-new-york.4.jpg"
                  address="223 8th Ave. New York, NY 10011"
                  serviceTypesNearby={55}
                  serviceTypesFarther={7}
                  serviceTypesDistant={12}
                  walkabilityScore={20}
                  pdfPath="doc-233-8th-ave-new-york.5.pdf"
                />
              </div>
            </div>

            <Link
              href="/samples"
              aria-label="View sample reports"
              className="decoration-none absolute inset-0 z-10 text-current no-underline visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>
          {/* PRODUCT FEATURES (clickable card) */}
          <div className="group relative rounded-[10px] py-4">
            <div className={`${CARD}  bg-red-900/20 group-hover:bg-red-900/40 mt-6`}>
              <div className={`${TITLE} text-title-text-product`}>
                Product Features
              </div>
              <div className="mt-0">
                <Link
                  href="/product"
                  className="inline-flex w-full items-center justify-center rounded-lg text-[clamp(1.2rem,3.6vw,1.4rem)] font-semibold"
                >
                  <div className="relative aspect-[2/5] w-full max-w-[460px] p-4">
                    <Image
                      alt="First page of the product, mobile version"
                      src={`${baseUrl}/product-page-mobile.1a.v2.png`}
                      fill
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/product"
              aria-label="View sample reports"
              className="decoration-none absolute inset-0 z-10 text-current no-underline visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
