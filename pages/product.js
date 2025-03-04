import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Product() {
  const baseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  return (
    <div>
      <div>
        <PageTitle
          topTitle="Product Features"
          textColor="text-title-text-product"
          shadowColor={`title-shadow-product`}
          logoColor="#e7c7c7ff"
          gradient={
            "bg-[linear-gradient(to_right,rgba(178,120,120,0.1),rgba(113,22,21,0.5))]"
          }
          showLogo={true} // Integrates the logo
        />
      </div>
      <div id="desktop-version" className="max-[700px]:hidden">
        <Image
          alt="First & Second pages of the product"
          src={`${baseUrl}/desktop-product-page-first-n-second-page.8.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
        />
        <Image
          alt="Third page of the product"
          src={`${baseUrl}/desktop-product-page-third-page.8.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
        />
        <Image
          alt="Fourth page of the product"
          src={`${baseUrl}/desktop-product-page-fourth-page.8.png`}
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={1024}
          height={1}
        />
      </div>
      <div id="mobile-version" className="px-3 min-[701px]:hidden">
        <Image
          alt="First page of the product, mobile version"
          src={`${baseUrl}/mobile-product-page-first-page.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
        />
        <Image
          alt="First page of the product, mobile version"
          src={`${baseUrl}/mobile-product-page-second-n-third-page.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
        />
        <Image
          alt="First page of the product, mobile version"
          src={`${baseUrl}/mobile-product-page-fourth-page.png`} // v.2.1
          // true width & true height controlled by parent grid
          // image fills parent's allotted space
          width={700}
          height={1}
        />
      </div>
    </div>
  );
}
