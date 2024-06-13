import PageTitle from "@/components/PageTitle";
import PropertyPreviewAndLink from "@/components/PropertyPreviewAndLink";
import ProductSample from "@/components/ProductSample";

export default function Samples() {
  return (
    <div>
      <PageTitle />
      <div className="lg:m-20">
        <div>
          <div className="roboto-font pb-8 pt-12 text-center text-base tracking-wide text-stone-300 opacity-60 sm:text-2xl lg:pt-2 lg:text-4xl">
            <span className="block sm:mr-2 sm:inline">Samples</span>
            <span className="block sm:inline">(Product Examples)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {/* <ProductSample
            imagePath="preview-223-8th-ave.jpg"
            address="1015 Elvira Ave"
            serviceTypesNearby={55}
            serviceTypesFarther={8}
            walkabilityScore={20}
          /> */}

          <PropertyPreviewAndLink
            ranking="55 Nearby out of 74"
            address1="223 8th Ave."
            address2="New York, NY 10011"
            href="https://drive.google.com/uc?export=view&id=1xmnGEcA5wjkNLR4s0WN7Rrzbs1HhgVqs"
            imageName="223_8th_Ave_vh1veh.jpg"
          />
          <PropertyPreviewAndLink
            ranking="40 Nearby out of 74"
            address1="1030 Tiverton Ave."
            address2="Los Angeles, CA 90024"
            href="https://drive.google.com/uc?export=view&id=1K4O2Ja7KBLYqsvwtWWvMkmRrmbIzrLUr"
            imageName="1030_Tiverton_Ave_kyyzmf.jpg"
          />
          <PropertyPreviewAndLink
            ranking="37 Nearby out of 74"
            address1="555 Church St."
            address2="Nashville, TN 37203"
            href="https://drive.google.com/uc?export=view&id=1QF6X__H949NHh-uAEHvzMGhGC5KLYy-j"
            imageName="555_Church_St_xjv97o.jpg"
          />
          <PropertyPreviewAndLink
            ranking="36 Nearby out of 74"
            address1="332 E William St."
            address2="Ann Arbor, MI 48104"
            href="https://drive.google.com/uc?export=view&id=1mO-cdSMiK73jAsTYWRtDsrNfxGiFn8Ko"
            imageName="332_E_William_St_jlrw5h.jpg"
          />
          <PropertyPreviewAndLink
            ranking="33 Nearby out of 74"
            address1="1431 SW Park Ave."
            address2="Portland, OR 97201"
            href="https://drive.google.com/uc?export=view&id=1axVituBXMQ-QICJLNZ0BjoKRXTnCt8ER"
            imageName="1431_SW_Park_Ave_bdwso6.jpg"
          />
          <PropertyPreviewAndLink
            ranking="26 Nearby out of 74"
            address1="2033 Broadway"
            address2="Nashville, TN 37203"
            href="https://drive.google.com/uc?export=view&id=1yOpdnKmv3GOcicCjg-ZNhEZ3cGDhjt3D"
            imageName="2033_Broadway_ktp00e.jpg"
          />
          <PropertyPreviewAndLink
            ranking="12 Nearby out of 74"
            address1="1015 Elvira Ave."
            address2="Nashville, TN 37216"
            href="https://drive.google.com/uc?export=view&id=1CivJYkAFsmMen8ae0dmdETMNjw0zz9I9"
            imageName="1015_Elvira_Ave_kizqlc.jpg"
          />
        </div>

        <div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
