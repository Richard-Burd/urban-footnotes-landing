import HomePageTitle from "@/components/HomePageTitle";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        id="landing-page-logo-and-homepage-gradient"
        className="relative h-[430px] w-screen"
      >
        {/* Background Image */}
        <Image
          src="/images/homepage-gradient.svg"
          alt="homepage-gradient"
          fill
          className="object-cover"
        />

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo color="#ffe873ff" width="579" height="363" />
        </div>
      </div>
      <div className="mt-2">
        <center>
          <div className="mt-10">
            <HomePageTitle
              topTitle="Mission Statement"
              textColor="text-title-text-home"
              shadowColor={`title-shadow-home`}
            />
          </div>
        </center>
        <div className="roboto-font rext-xl mx-4 mb-8 italic text-stone-300 md:text-2xl lg:mx-32">
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
