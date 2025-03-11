import Gallery from "@/components/Gallery";
import SamplesHeader from "@/components/SamplesHeader";

export default function GalleryStreetView() {
  return (
    <div>
      <SamplesHeader />
      <Gallery
        title="Gallery of Streetscape Illustrations"
        viewType="streetView"
      />
    </div>
  );
}
