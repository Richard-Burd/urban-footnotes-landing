import Gallery from "@/components/Gallery";
import SamplesHeader from "@/components/SamplesHeader";

export default function GalleryMidRangeAerial() {
  return (
    <div>
      <SamplesHeader />
      <div
        id="page-title"
        className="pb-4 pt-9 text-center text-[30px] text-title-text-samples sm:text-[40px] md:text-[50px]"
      >
        Gallery of Mid-Range Aerial Illustrations
      </div>
      <Gallery
        title="Gallery of Mid-Range Aerial Illustrations"
        viewType="aerialMidRange"
      />
    </div>
  );
}
