import PageTitle from "@/components/PageTitle";
import ProductSample from "@/components/ProductSample";

export default function Samples() {
  return (
    <div>
      <PageTitle />
      <div className="lg:m-10">
        <div>
          <div className="roboto-font pb-8 pt-12 text-center text-base tracking-wide text-stone-300 opacity-60 sm:text-2xl lg:pt-2 lg:text-4xl">
            <span className="block sm:mr-2 sm:inline">Samples</span>
            <span className="block sm:inline">(Product Examples)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          <ProductSample
            imagePath="preview-223-8th-ave.jpg"
            address="223 8th Ave. New York, NY 10011"
            serviceTypesNearby={55}
            serviceTypesFarther={8}
            walkabilityScore={20}
            pdfPath="doc-223-8th-ave.pdf"
          />

          <ProductSample
            imagePath="preview-1030-tiverton-ave.jpg"
            address="1030 Tiverton Ave. Los Angeles, CA 90024"
            serviceTypesNearby={40}
            serviceTypesFarther={16}
            walkabilityScore={25}
            pdfPath="doc-1030-tiverton-ave.pdf"
          />

          <ProductSample
            imagePath="preview-555-church-st.jpg"
            address="555 Church St. Nashville, TN 37203"
            serviceTypesNearby={37}
            serviceTypesFarther={8}
            walkabilityScore={24}
            pdfPath="doc-555-church-st.pdf"
          />

          <ProductSample
            imagePath="preview-332-e-william-st.jpg"
            address="332 E William St. Ann Arbor, MI 48104"
            serviceTypesNearby={36}
            serviceTypesFarther={17}
            walkabilityScore={27}
            pdfPath="doc-332-e-william-st.pdf"
          />

          <ProductSample
            imagePath="preview-1431-sw-park-ave.jpg"
            address="1431 SW Park Ave. Portland, OR 97201"
            serviceTypesNearby={33}
            serviceTypesFarther={22}
            walkabilityScore={21}
            pdfPath="doc-1431-sw-park-pve.pdf"
          />

          <ProductSample
            imagePath="preview-2033-broadway.jpg"
            address="2033 Broadway, Nashville, TN 37203"
            serviceTypesNearby={26}
            serviceTypesFarther={18}
            walkabilityScore={22}
            pdfPath="doc-2033-broadway.pdf"
          />

          <ProductSample
            imagePath="preview-1015-elvira-ave.jpg"
            address="1015 Elvira Ave. Nashville, TN 37216"
            serviceTypesNearby={12}
            serviceTypesFarther={13}
            walkabilityScore={12}
            pdfPath="doc-1015-elvira-ave.pdf"
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
