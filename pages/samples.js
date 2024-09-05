import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ProductSample from "@/components/ProductSample";
// note to test build function
// must run build to update images

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
            serviceTypesNearby={54}
            serviceTypesFarther={8}
            walkabilityScore={20}
            pdfPath="doc-223-8th-ave.pdf"
          />

          <ProductSample
            imagePath="preview-29-s-la-salle-st.jpg"
            address="29 S La Salle St, Chicago, IL 60603"
            serviceTypesNearby={49}
            serviceTypesFarther={11}
            walkabilityScore={25}
            pdfPath="doc-29-s-la-salle-st.pdf"
          />

          <ProductSample
            imagePath="preview-107-patton-ave.jpg"
            address="316 King St, Charleston, SC 29401"
            serviceTypesNearby={44}
            serviceTypesFarther={10}
            walkabilityScore={18}
            pdfPath="doc-107-patton-ave.pdf"
          />

          <ProductSample
            imagePath="preview-316-king-st.jpg"
            address="316 King St, Charleston, SC 29401"
            serviceTypesNearby={44}
            serviceTypesFarther={8}
            walkabilityScore={19}
            pdfPath="doc-316-king-st.pdf"
          />

          <ProductSample
            imagePath="preview-245-granby-st.jpg"
            address="245 Granby St, Norfolk, VA 23510"
            serviceTypesNearby={42}
            serviceTypesFarther={9}
            walkabilityScore={22}
            pdfPath="doc-245-granby-st.pdf"
          />

          <ProductSample
            imagePath="preview-14-e-washington-st.jpg"
            address="14 E Washington St, Indianapolis, IN 46204"
            serviceTypesNearby={42}
            serviceTypesFarther={7}
            walkabilityScore={25}
            pdfPath="doc-14-e-washington-st.pdf"
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
            imagePath="preview-1900-broadway.jpg"
            address="1900 Broadway, Boulder, CO 80302"
            serviceTypesNearby={40}
            serviceTypesFarther={15}
            walkabilityScore={19}
            pdfPath="doc-1900-broadway.pdf"
          />

          <ProductSample
            imagePath="preview-1505-ponce-de-leon-blvd.jpg"
            address="1505 Ponce de Leon, Coral Gables, FL 33134"
            serviceTypesNearby={40}
            serviceTypesFarther={5}
            walkabilityScore={23}
            pdfPath="doc-1505-ponce-de-leon-blvd.pdf"
          />

          <ProductSample
            imagePath="preview-526-superior-ave.jpg"
            address="526 Superior Ave, Cleveland, OH 44114"
            serviceTypesNearby={39}
            serviceTypesFarther={10}
            walkabilityScore={21}
            pdfPath="doc-526-superior-ave.pdf"
          />

          <ProductSample
            imagePath="preview-555-church-st.jpg"
            address="555 Church St. Nashville, TN 37203"
            serviceTypesNearby={37}
            serviceTypesFarther={8}
            walkabilityScore={21}
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
            imagePath="preview-107-high-st.jpg"
            address="107 High St, Charlestown, MA 02129"
            serviceTypesNearby={36}
            serviceTypesFarther={8}
            walkabilityScore={17}
            pdfPath="doc-107-high-st.pdf"
          />

          <ProductSample
            imagePath="preview-201-chartres-st.jpg"
            address="201 Chartres St, New Orleans, LA 70130"
            serviceTypesNearby={35}
            serviceTypesFarther={16}
            walkabilityScore={21}
            pdfPath="doc-201-chartres-st.pdf"
          />

          <ProductSample
            imagePath="preview-4100-georgia-ave.jpg"
            address="4100 Georgia Ave NW, Washington, DC 20011"
            serviceTypesNearby={35}
            serviceTypesFarther={11}
            walkabilityScore={22}
            pdfPath="doc-4100-georgia-ave.pdf"
          />

          <ProductSample
            imagePath="preview-6485-victoria-ave.jpg"
            address="6485 Victoria Ave, Montreal, QC H3W, Canada"
            serviceTypesNearby={35}
            serviceTypesFarther={6}
            walkabilityScore={21}
            pdfPath="doc-6485-victoria-ave.pdf"
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
