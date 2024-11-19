import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <div>
      <div id="landing-page-logo" className="mx-4 mt-20 flex justify-center">
        <Image
          src="/images/ufn-logo-light.svg"
          alt="Urban Cruise Ship Logo"
          width={800}
          height={263.44}
          unoptimized={true}
          style={{ minWidth: "100px", opacity: 0.7 }}
        />
      </div>
      <div className="pt-2 lg:m-20">
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
            address.ssdf
          </p>
        </div>
      </div>
    </div>
  );
}
