import Logo from "@/components/LogoLanding";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const videoUrl = `${process.env.NEXT_PUBLIC_S3_BASE_URL.replace(/\/+$/, "")}/ads/ufn-about-us-v2-small.mp4`;

  const homeTitle = "Mission Statement";
  const homeText =
    "To enhance our society and planet's health, our reports display how many commonly-used services are within short walking distance of a given address — in a standardized, comparative format — incentivizing and promoting development that allows more residents to conveniently live without owning cars.";

  return (
    <div className="bg-black text-white">
      <Head>
        <link rel="preload" href={videoUrl} as="video" type="video/mp4" media="(min-width: 1000px)" />
      </Head>

      {/* Use the SAME container as your site header/layout */}
      <main className="mx-auto max-w-6xl px-8">
        {/* HERO */}
        <section className="mt-6">
          <div className="relative overflow-hidden rounded-xl min-h-[560px] md:min-h-[400px]">
            {/* Gradient background inside the same container (no w-screen) */}
            <Image
              src="/images/homepage-gradient.svg"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              priority
            />

            {/* Content: logo left, text right (stacks on mobile) */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start px-6 md:px-10">
              {/* Logo — explicit floors so it’s never tiny */}
                <div className="w-full md:w-2/3 m-6">
                <Logo type="ufn" className="w-full h-auto" />
              </div>

              {/* Copy + CTA */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h1 className="font-bold leading-tight text-[clamp(1.75rem,3.6vw,2rem)]">
                  Neighborhood reports on walkability and access to services.
                </h1>
                <p className="mt-4 text-[clamp(1.2rem,3.6vw,1.4rem)] leading-relaxed text-stone-200">
                  Research that supports healthier, walkable, more sustainable communities.
                </p>
                <Link
                  href="/reports"
                  className="inline-block mt-6 px-6 py-3 bg-stone-800 text-black text-[clamp(1.2rem,3.6vw,1.4rem)] font-semibold rounded-lg shadow transition"
                >
                  View Sample Reports
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="mt-10">
          <video
            className="w-full rounded-xl shadow-lg"
            controls
            preload="metadata"
            poster="/images/hero-poster.jpg"
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </section>

        {/* MISSION STATEMENT */}
        <section className="my-12">
          <div className="rounded-[40px] bg-[rgba(86,85,70,0.4)] p-8">
            <h2 className="text-center font-bold text-[clamp(2rem,4vw,3.5rem)]">
              {homeTitle}
            </h2>
            <p className="mt-4 text-[20px] md:text-[23px] leading-relaxed tracking-wide text-stone-300">
              {homeText}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
