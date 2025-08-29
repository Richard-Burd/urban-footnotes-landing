import Logo from "@/components/LogoLanding";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ProductSample from "@/components/ProductSample";
import samplesData from "@/lib/samplesData";
import SamplesHeader from "@/components/SamplesHeader";
// import Button from "@/components/Button"; // unused right now

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL?.replace(/\/+$/, "") ?? "";
  const videoUrl = `${baseUrl}/ads/ufn-about-us-v2-small.mp4`;

  const whoTitle = "Who We Are";
  const homeTitle = "Our Mission";
  const homeText =
    "To enhance our society and planet's health, our reports display how many commonly-used services are within short walking distance of a given address — in a standardized, comparative format — incentivizing and promoting development that allows more residents to conveniently live without owning cars.";

      // Filter & sort the "Highly Walkable" data
  const highlyWalkableData = samplesData
    .filter((entry) => entry.category === "Highly Walkable")
    .sort((a, b) => Number(a.categoryRank) - Number(b.categoryRank)); // Sort by categoryRank (converted to a number)
  return (
    <div className="text-red">
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
<main className="mx-auto max-w-screen-xl 2xl:max-w-[1600px] grid grid-cols-12 gap-x-0 gap-y-0 lg:mb-4 py-0 items-start">
        {/* HERO */}
        <section className="relative col-span-12 isolate mx-[calc(50%-50vw)] w-screen">
      {/* Full-bleed background */}
      <Image
        src="/images/homepage-gradient.svg"
        alt="homepage-gradient"
        fill
        sizes="100vw"
        className="object-cover -z-10"
        priority
      />

            {/* Centered content wrapper */}
  <div className="max-w-screen-xl xl:max-w-[1600px] px-6 md:px-10 py-6 md:py-10">
    <div
      className="min-h-[400px] md:min-h-0[px] 
                 grid grid-cols-1 md:[grid-template-columns:2fr_1fr]
                 items-start md:items-center gap-0 md:gap-12"
    >
            <div>
              <Logo
                type="ufn"
                className="w-full h-auto max-h-[400px]"
              />
            </div>

            <div className="text-center md:text-left self-start md:self-auto">
              <h1 className="font-bold leading-tight text-[clamp(1.75rem,3.6vw,2rem)]">
                Neighborhood reports on walkability and access to services.
              </h1>
              <p className="mt-4 text-[clamp(1.2rem,3.6vw,1.4rem)] leading-relaxed">
                Research that supports healthier, walkable, more sustainable communities.
              </p>
              <Link
                href="/samples"
                className="w-full mb-10 mt-4 inline-flex items-center justify-center py-3
                           bg-stone-900
                           text-[clamp(1.2rem,3.6vw,1.4rem)] font-semibold
                           rounded-lg shadow transition hover:bg-stone-800
                           focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-stone-300
                           no-underline visited:no-underline text-current visited:text-current"
              >
                View Sample Reports
              </Link>
            </div>
          </div>
          </div>
        </section>

        {/* VIDEO (full-width card) */}
<section className="col-span-12 mt-0">
  <div className="relative m-4 group rounded-[10px] overflow-hidden">
    <div className=" rounded-[10px] bg-stone-900/20 transition-shadow group-hover:shadow-lg group-hover:bg-stone-900/30">
      <video
        className="w-full h-auto object-cover"
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
        <div className="col-span-12 md:col-span-6 p-4">


          {/* Who We Are (clickable card) */}
<div className="relative group max-w-[770px] rounded-[10px] overflow-hidden self-start pt-0">
  {/* Visual card */}
  <div
    id="who-statement-box"
    className="p-2 rounded-[10px] bg-blue-900/20  transition-shadow
               group-hover:shadow-lg group-hover:bg-blue-900/30"
  >
    <div className="flex-col flex gap-4">
      <div
        className="title-shadow-samples page-title-shadow roboto-font text-center text-[35px] text-title-text-home [@media(min-width:1000px)]:text-[45px]"
      >
        <div className="text-center">{whoTitle}</div>
      </div>

      <div className="roboto-font px-8 pb-8 pt-0 text-[clamp(1.2rem,3.6vw,1.5rem)] tracking-wide">
        <p>
          We are a team of environmental researchers building tools and publishing reports
          to help build healthier, more sustainable communities. Explore our other projects
          at:
        </p>

        {/* Just render the logo as decoration inside the card */}
        <div className="flex items-center justify-center lg:pl-8 mt-4">
          <Logo type="ucs" color="#ac9c84ff" width="200" height="100" />
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
    className="absolute inset-0 z-10 no-underline decoration-none text-current visited:text-current
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
  />
</div>


         {/* MISSION STATEMENT (clickable card) */}
<div className="relative group mt-6 max-w-[770px] rounded-[10px] overflow-hidden self-start">
  {/* Visual card */}
  <div
    id="mission-statement-box"
    className="rounded-[10px] bg-[rgba(86,85,70,0.4)] p-4 transition-shadow
               group-hover:shadow-lg group-hover:bg-[rgba(86,85,70,0.6)]"
  >
    <div className="flex-col flex gap-4">
      <div className="title-shadow-samples page-title-shadow roboto-font text-center text-[35px] text-title-text-home [@media(min-width:1000px)]:text-[45px]">
        <div className="text-center">{homeTitle}</div>
      </div>
      <div className="roboto-font px-8 pb-8 pt-0 text-[clamp(1.2rem,3.6vw,1.5rem)] tracking-wide text-red">
        <p>{homeText}</p>
      </div>
    </div>
  </div>

  {/* Invisible overlay link */}
  <Link
    href="/about"  // <-- change this route to your actual About Us page
    aria-label="Learn more about us"
    className="absolute inset-0 z-10 no-underline decoration-none text-current visited:text-current
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
  />
</div>

            {/* Property Report Metrics Scoreboard (clickable card) */}
<div className="relative group my-8 rounded-[10px] overflow-hidden max-w-[770px]">
  {/* Visual card */}
  <div
    className="rounded-[10px] bg-green-900/20 p-4 transition-shadow
               group-hover:shadow-lg group-hover:bg-green-900/30"
  >
    {/* Card Title */}
    <div
      id="page-title"
      className="title-shadow-samples page-title-shadow pb-4 text-center text-[30px] text-title-text-samples sm:text-[40px] md:text-[45px]"
    >
      Property Report Metrics Scoreboard
    </div>

    {/* Section: Highly Walkable */}
    <div className="pb-4">
      <div className="mb-2 border-b-4 border-x-slate-200">
        <div className="pt-3 text-right text-[clamp(1.2rem,3.6vw,1.4rem)] italic text-white">
          The first number, highlighted in green, is the count of service types within a comfortable walking distance (roughly 0.25 miles). The second number, highlighted in yellow, is the count of service types within a longer walking distance (roughly 0.5 miles). The third number, highlighted in red, is the count of service types within a still longer walking distance (roughly 1 mile). The final number is the overall walkability score (out of 30).
        </div>
      </div>

      <div>
        <div className="flex flex-col">
          {highlyWalkableData.slice(0, 8).map((entry, index) => (
            <div
              key={entry.address}
              className="flex w-full items-center py-2 border-b border-slate-700 last:border-none"
            >
              {/* Address */}
              <div className="w-full pr-4 text-right">
                <div
                  key={index}
                  className="text-[18px] md:text-[20px] leading-[28px]"
                >
                  {entry.address}
                </div>
              </div>

              {/* Walkability Data */}
              <div className="flex gap-2 text-center text-[16px] md:text-[18px] font-semibold leading-[24px] text-stone-900">
                <div className="w-10 md:w-12 bg-[#73e369ff]">{entry.greenNear}</div>
                <div className="w-10 md:w-12 bg-[#f7fc70ff]">{entry.yellowFarther}</div>
                <div className="w-10 md:w-12 bg-[#e37569ff]">{entry.redDistant}</div>
                <div className="w-10 md:w-12 rounded-[6px] bg-[#cbd4e0ff] text-[#1f244dff]">
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
    className="absolute inset-0 z-10 no-underline decoration-none text-current visited:text-current
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
  />
</div>


        </div>




        {/* RIGHT COLUMN: sample card + product preview */}
        <div id="right-column" className="self-start col-span-12 md:col-span-6 px-4 md:p-4">
          {/* SAMPLE CARD - visual card + invisible overlay link */}
          <div className="relative group rounded-[10px] overflow-hidden">
            <div className="rounded-[10px] bg-green-900/10 p-2 transition-shadow group-hover:shadow-lg group-hover:bg-green-900/20">
              <div className="title-shadow-samples page-title-shadow roboto-font text-center text-[35px] text-title-text-home [@media(min-width:1000px)]:text-[45px]">
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
              className="absolute inset-0 z-10 no-underline decoration-none text-current visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>
          {/* PRODUCT PREVIEW (clickable card) */}
                    <div className="relative group rounded-[10px] py-4 ">
            <div className="py-4 md:mx-0 rounded-[10px] bg-red-900/20 p-6 transition-shadow group-hover:shadow-lg group-hover:bg-red-900/30 mt-6">
              <div className="title-shadow-samples page-title-shadow roboto-font text-center text-[35px] text-title-text-home [@media(min-width:1000px)]:text-[45px]">
                Product Features
              </div>
              <div className="mt-0">
            <Link
              href="/product"
              className="w-full inline-flex items-center justify-center
                        text-red
                         text-[clamp(1.2rem,3.6vw,1.4rem)] font-semibold
                         rounded-lg "
            >
              <div className="relative w-full max-w-[460px] aspect-[9/16] p-4">
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
              className="absolute inset-0 z-10 no-underline decoration-none text-current visited:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-stone-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
