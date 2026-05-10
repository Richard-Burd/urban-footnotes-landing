import Head from "next/head";
import Gallery from "@/components/Gallery";
import SamplesHeader from "@/components/SamplesHeader";

export default function GalleryMidRangeAerial() {
  return (
    <div>
      <Head>
        <title>Mid-Range Aerial Gallery | Urban Foot Notes</title>
      </Head>
      <SamplesHeader />
      <div
        id="page-title"
        className="pb-4 pt-9 text-center text-[30px] text-title-text-samples sm:text-[40px] md:text-[57px]"
      >
        Gallery of Mid-Range Aerial Illustrations
      </div>
      <Gallery viewType="aerialMidRange" />
    </div>
  );
}
