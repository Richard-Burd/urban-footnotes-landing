import Logo from "@/components/Logo";
import Image from "next/image";
import Link from 'next/link'
import Head from 'next/head'



export default function Home() {
  const videoUrl = `${process.env.NEXT_PUBLIC_S3_BASE_URL.replace(/\/+$/, '')}/ads/ad-vid-existing-projects.mp4`

  const homeTitle = "Mission Statement";
  const homeText =
    "To enhance our society and planet's health, our reports display how many commonly-used services are within short walking distance of a given address -- in a standardized, comparative format -- incentivizing and promoting development that allows more residents to conveniently live without owning cars.";

  return (      
    <div>
      <Head>
        {/* tells the browser “go fetch this video file ASAP” */}
        <link
          rel="preload"
          href={videoUrl}
          as="video"
          type="video/mp4"
        />
      </Head>
      <div id="desktop-version" className="hidden min-[1000px]:block">
      <Link
        href="/ads"
        className="relative block h-[430px] w-screen"
        aria-label="Go to ads page"
      >
        <div
          id="landing-page-logo-and-homepage-gradient"
          className="relative h-[430px] w-screen"
        >
          {/* Background Image with transitioning gradient on left & right sides */}
          <Image
            src="/images/homepage-gradient.svg"
            alt="homepage-gradient"
            fill
            className="object-cover"
          />

          {/* Centered Logo on top of the transitioning gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo type="ufn" color="#ffe873ff" width="579" height="363" />
          </div>

        </div>          
        </Link>
        <div
          id="mission-statement-box"
          className="mx-auto my-12 max-w-[770px] rounded-[40px] bg-[rgba(86,85,70,0.4)] pt-8"
        >
          <div
            id="mission-statement-title"
            className="title-shadow-home page-title-shadow roboto-font text-center text-[40px] text-title-text-home [@media(min-width:1000px)]:text-[56px]"
          >
            <center>{homeTitle}</center>
          </div>
          <div className="roboto-font px-8 pb-8 pt-4 text-[23px] tracking-wide text-stone-300">
            <p>{homeText}</p>
          </div>
        </div>
      </div>
      <div id="mobile-version" className="block min-[1000px]:hidden">
        <div
          id="landing-page-logo-and-homepage-gradient"
          className="relative h-[235px] w-screen"
        >
          {/* Background Image with transitioning gradient on left & right sides */}
          <Image
            src="/images/homepage-gradient.svg"
            alt="homepage-gradient"
            fill
            className="object-cover"
          />

          {/* Centered Logo on top of the transitioning gradient */}
          <div className="absolute inset-0 m-4 flex items-center justify-center">
            <Logo type="ufn" color="#ffe873ff" width="295" height="184" />
          </div>
        </div>

        <div
          id="mission-statement-title"
          className="title-shadow-home page-title-shadow roboto-font mx-8 pt-8 text-center text-title-text-home [@media(min-width:200px)]:text-[30px] [@media(min-width:360px)]:text-[35px] [@media(min-width:900px)]:text-[46px]"
        >
          <center>{homeTitle}</center>
        </div>
        <div className="roboto-font break-words px-8 pb-8 pt-2 text-justify text-[20px] italic tracking-wide text-stone-300">
          <p>{homeText}</p>
        </div>
      </div>
    </div>
  );
}
