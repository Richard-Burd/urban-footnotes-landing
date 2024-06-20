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
        <div className="roboto-font text-1xl mx-4 pt-4 italic text-stone-300 lg:mx-32">
          <p>
            In service of residents who want to use personal mechanized
            transportation as little as possible, we strive to provide the most
            helpful assessment of how well all desired services are provided
            within easy walking distance of any given address.
          </p>
        </div>
      </div>
    </div>
  );
}
