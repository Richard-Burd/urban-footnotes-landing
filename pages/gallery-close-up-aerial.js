import Gallery from "@/components/Gallery";
import SamplesHeader from "@/components/SamplesHeader";

export default function GalleryCloseUpAerial() {
  return (
    <div>
      <SamplesHeader />
      <div
        id="page-title"
        className="pb-4 pt-9 text-center text-[35px] text-title-text-samples sm:text-[50px] md:text-[60px]"
      >
        Gallery of Close-up Aerial Illustrations
      </div>
      <Gallery
        title="Gallery of Close-Up Aerial Illustrations"
        viewType="aerialCloseUp"
      />
    </div>
  );
}
