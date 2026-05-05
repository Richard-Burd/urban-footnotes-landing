import Image from "next/image";
import NeighborhoodReportsPage from "@/components/NeighborhoodReportsPage";

const responsiveImageStyle = { width: "100%", height: "auto" };

export default function Product() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  return (
    <NeighborhoodReportsPage
      activeView="features"
      seoTitle="Product Features for Property Reports | Urban Foot Notes"
      seoDescription="Explore Urban Foot Notes neighborhood report features, including walkability metrics, service access, maps, score summaries, and report page examples."
      canonicalPath="/product"
    >
      <div
        id="product-desktop-version"
        className="mx-auto hidden max-w-[1024px] flex-col items-center report:flex"
      >
        <Image
          alt="First & Second pages of the product"
          src={`${baseUrl}/product-page-desktop.1a.v2.png`} // v.2.1
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
        <Image
          alt="Third page of the product"
          src={`${baseUrl}/product-page-desktop.1b.png`}
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
        <Image
          alt="Fourth page of the product"
          src={`${baseUrl}/product-page-desktop.1c.v2.png`}
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
        <Image
          alt="Fifth page of the product"
          src={`${baseUrl}/product-page-desktop.1d.v2.png`}
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
        <Image
          alt="Sixth page of the product"
          src={`${baseUrl}/product-page-desktop.2e.v2.2.png`}
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
        <Image
          alt="Seventh page of the product"
          src={`${baseUrl}/product-page-desktop.2f.png`}
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
        <Image
          alt="Eighth page of the product"
          src={`${baseUrl}/product-page-desktop.2g.png`}
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
          style={responsiveImageStyle}
        />
      </div>
      <div
        id="product-mobile-version"
        className="mx-auto flex max-w-[700px] flex-col items-center px-3 report:hidden"
      >
        <Image
          alt="First page of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1a.v2.png`} // v.2.1
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
          style={responsiveImageStyle}
        />
        <Image
          alt="Second & Third pages of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1b.png`} // v.2.1
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
          style={responsiveImageStyle}
        />
        <Image
          alt="Fourth & Fifth pages of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1c.v2.png`} // v.2.1
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
          style={responsiveImageStyle}
        />
        <Image
          alt="Sixth, Seventh, & Eighth pages of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1d.v4.png`} // v.2.1
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
          style={responsiveImageStyle}
        />
      </div>
    </NeighborhoodReportsPage>
  );
}
