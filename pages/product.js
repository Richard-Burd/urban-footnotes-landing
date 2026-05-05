import Image from "next/image";
import NeighborhoodReportsPage from "@/components/NeighborhoodReportsPage";

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
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <Image
          alt="Third page of the product"
          src={`${baseUrl}/product-page-desktop.1b.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <Image
          alt="Fourth page of the product"
          src={`${baseUrl}/product-page-desktop.1c.v2.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <Image
          alt="Fifth page of the product"
          src={`${baseUrl}/product-page-desktop.1d.v2.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <Image
          alt="Sixth page of the product"
          src={`${baseUrl}/product-page-desktop.2e.v2.2.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <Image
          alt="Seventh page of the product"
          src={`${baseUrl}/product-page-desktop.2f.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <Image
          alt="Eighth page of the product"
          src={`${baseUrl}/product-page-desktop.2g.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </div>
      <div
        id="product-mobile-version"
        className="mx-auto flex max-w-[700px] flex-col items-center px-3 report:hidden"
      >
        <Image
          alt="First page of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1a.v2.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
        />
        <Image
          alt="Second & Third pages of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1b.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
        />
        <Image
          alt="Fourth & Fifth pages of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1c.v2.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
        />
        <Image
          alt="Sixth, Seventh, & Eighth pages of the product, mobile version"
          src={`${baseUrl}/product-page-mobile.1d.v4.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
          sizes="(min-width: 700px) 700px, calc(100vw - 1.5rem)"
        />
      </div>
    </NeighborhoodReportsPage>
  );
}
