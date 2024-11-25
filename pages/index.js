import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <div>
      <div id="landing-page-logo" className="mx-4 mt-12 flex justify-center">
        <Image
          src="/images/ufn-logo-light.svg"
          alt="Urban Cruise Ship Logo"
          width={850}
          height={0}
          unoptimized={true}
          style={{ minWidth: "100px" }}
        />
      </div>
      <div className="mt-2">
        <center>
          <div className="mt-10">
            <PageTitle
              topTitle="Mission Statement"
              textColor="text-title-text-home"
              shadowColor={`title-shadow-home`}
            />
          </div>
        </center>
        <div className="roboto-font rext-xl mx-4 italic text-stone-300 md:text-2xl lg:mx-32">
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
