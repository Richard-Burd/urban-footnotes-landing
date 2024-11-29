import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import HomePageTitle from "@/components/HomePageTitle";

export default function Home() {
  return (
    <div>
      <div id="landing-page-logo" className="mx-4 mt-12 flex justify-center">
        <Image
          src="/images/ufn-logo-light.svg"
          alt="Urban Foot Notes Logo"
          width={800}
          height={263.44}
          className="min-w-[100px] opacity-70"
        />
      </div>
      <div className="pt-2 lg:m-20">
        <center>
          <div className="m-6">
            <HomePageTitle
              topTitle="Mission Statement"
              textColor="text-title-text-home"
              shadowColor="title-shadow-home"
            />
          </div>
        </center>
        <div className="roboto-font mx-4 text-xl italic text-stone-300 md:text-2xl lg:mx-32">
          <p>
            To reduce residents' use of cars, we comparatively assess how many
            commonly used services are within short walking distance of a given
            address.
          </p>
        </div>
      </div>
    </div>
  );
}
