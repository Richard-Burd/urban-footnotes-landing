import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ProductSample from "@/components/ProductSample";

export default function Samples() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="mx-10 mt-10">
        <PageTitle
          topTitle="Samples (Product Examples)"
          textColor="text-title-text-samples"
          shadowColor="title-shadow-samples"
        />
        <div className="roboto-font mb-32 text-2.5xl text-gray-200">
          <p>
            Samples are presented ranked by number of service types (out of 74
            total) within ~1/4 mile of the address shown. Then by those within
            ~2/5th mile, and then by Walkability Score.
          </p>
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
            pdfPath="doc-1431-sw-park-ave.pdf"
          />

          <ProductSample
            imagePath="preview-2525-ocean-ave.jpg"
            address="2525 Ocean Ave, San Francisco, CA 94132"
            serviceTypesNearby={27}
            serviceTypesFarther={15}
            walkabilityScore={21}
            pdfPath="doc-2525-ocean-ave.pdf"
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
