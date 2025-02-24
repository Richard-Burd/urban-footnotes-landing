import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
          <Logo color="#ffe873ff" width="579" height="363" />
        </div>
      </div>
      {/* Box w/rounded corners that holds the title and description */}
      <div
        id="mission-statement-box"
        className="mx-auto my-12 max-w-[770px] rounded-[45px] bg-[rgba(86,85,70,0.4)] pt-8"
      >
        <div
          id="mission-statement-title"
          className="title-shadow-home page-title-shadow roboto-font text-center text-4xl text-title-text-home sm:text-5xl lg:text-6xl"
        >
          <center>Mission Statement</center>
        </div>
        <div className="roboto-font px-8 pb-8 pt-4 text-[23px] italic tracking-wide text-stone-300">
          <p>
            To enhance our society and planet's health, our reports display how
            many commonly-used services are within short walking distance of a
            given address -- in a standardized, comparative format --
            incentivizing and promoting development that allows more residents
            to conveniently live without owning cars.
          </p>
        </div>
      </div>
    </div>
  );
}
