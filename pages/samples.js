import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ProductSample from "@/components/ProductSample";
// note to test build function

export default function Samples() {
  return (
    <div>
      <div className="">
        <div className="lg:mx-32">
          <PageTitle
            topTitle={
              <>
                Samples <br /> (Product Examples)
              </>
            }
            textColor="text-title-text-samples"
            shadowColor="title-shadow-samples"
            showLogo={true} // Integrates the logo
          />
        </div>

        <div className="roboto-font mb-4 text-2.5xl text-gray-200 lg:mx-32">
          <p className="mb-10">
            Samples are presented ranked by the number of service types (out of
            74 total) within approximately 1/4 mile of the address shown (0.4
            kilometer in metric versions), then by those within 2/5 mile (0.7
            kilometer in metric versions), and finally by Walkability Score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4">
          <ProductSample
            imagePath="preview-223-8th-ave.p.4-ex.jpg"
            address="223 8th Ave. New York, NY 10011"
            serviceTypesNearby={55}
            serviceTypesFarther={7}
            serviceTypesDistant={12}
            walkabilityScore={20}
            pdfPath="doc-223-8th-ave.pdf"
          />

          <ProductSample
            imagePath="preview-sarphatipark-amsterdam.0.7.v2.jpg"
            address="Sarphatipark 38I, 1072 PB Amsterdam, Netherlands"
            serviceTypesNearby={52}
            serviceTypesFarther={7}
            serviceTypesDistant={15}
            walkabilityScore={23}
            pdfPath="doc-sarphatipark-amsterdam.pdf"
          />

          <ProductSample
            imagePath="preview-1902-2nd-ave.jpg"
            address="1902 2nd Ave, Seattle, WA 98101"
            serviceTypesNearby={49}
            serviceTypesFarther={13}
            serviceTypesDistant={12}
            walkabilityScore={20}
            pdfPath="doc-1902-2nd-ave.pdf"
          />

          <ProductSample
            imagePath="preview-29-s-la-salle-st.p.4-ex.jpg"
            address="29 S La Salle St, Chicago, IL 60603"
            serviceTypesNearby={49}
            serviceTypesFarther={11}
            serviceTypesDistant={14}
            walkabilityScore={25}
            pdfPath="doc-29-s-la-salle-st.pdf"
          />

          <ProductSample
            imagePath="preview-10-lorne-st.jpg"
            address="10 Lorne Street, Te Aro, Wellington 6011, New Zealand"
            serviceTypesNearby={49}
            serviceTypesFarther={7}
            serviceTypesDistant={18}
            walkabilityScore={20}
            pdfPath="doc-10-lorne-st.pdf"
          />

          <ProductSample
            imagePath="preview-41-e-hastings-st.jpg"
            address="41 E Hastings St, Vancouver, BC V6A 1M9, Canada"
            serviceTypesNearby={48}
            serviceTypesFarther={12}
            serviceTypesDistant={14}
            walkabilityScore={19}
            pdfPath="doc-41-e-hastings-st.pdf"
          />

          <ProductSample
            imagePath="preview-10-rue-de-rivoli.0.7.jpg"
            address="10 Rue de Rivoli, 75004 Paris, France"
            serviceTypesNearby={48}
            serviceTypesFarther={8}
            serviceTypesDistant={18}
            walkabilityScore={24}
            pdfPath="doc-10-rue-de-rivoli.pdf"
          />

          <ProductSample
            imagePath="preview-301-market-st.jpg"
            address="301 Market St, Philadelphia, PA 19106"
            serviceTypesNearby={47}
            serviceTypesFarther={4}
            serviceTypesDistant={23}
            walkabilityScore={19}
            pdfPath="doc-301-market-st.pdf"
          />

          <ProductSample
            imagePath="preview-55-triq-san-vincenz.p.4-new.jpg"
            address="55 Triq San Vincenz, Tas-Sliema, Malta"
            serviceTypesNearby={45}
            serviceTypesFarther={9}
            serviceTypesDistant={20}
            walkabilityScore={15}
            pdfPath="doc-55-triq-san-vincenz.pdf"
          />

          <ProductSample
            imagePath="preview-163-lai-chi-kok-rd.0.7.jpg"
            address="163 Lai Chi Kok Rd, Tai Kok Tsui, Hong Kong"
            serviceTypesNearby={45}
            serviceTypesFarther={10}
            serviceTypesDistant={19}
            walkabilityScore={20}
            pdfPath="doc-163-lai-chi-kok-rd.pdf"
          />

          <ProductSample
            imagePath="preview-50-grande-parade.0.7.jpg"
            address="50 Grand Parade, Centre, Cork, T12 D638, Ireland"
            serviceTypesNearby={44}
            serviceTypesFarther={13}
            serviceTypesDistant={17}
            walkabilityScore={17}
            pdfPath="doc-50-grande-parade.pdf"
          />

          <ProductSample
            imagePath="preview-107-patton-ave.p.4-new.jpg"
            address="316 King St, Charleston, SC 29401"
            serviceTypesNearby={44}
            serviceTypesFarther={10}
            serviceTypesDistant={20}
            walkabilityScore={18}
            pdfPath="doc-107-patton-ave.pdf"
          />

          <ProductSample
            imagePath="preview-316-king-st.p.4-new.jpg"
            address="316 King St, Charleston, SC 29401"
            serviceTypesNearby={44}
            serviceTypesFarther={8}
            serviceTypesDistant={22}
            walkabilityScore={19}
            pdfPath="doc-316-king-st.pdf"
          />

          <ProductSample
            imagePath="preview-gabriel-max-straße-15.2.jpg"
            address="Gabriel-Max-Straße 15, 10245 Berlin, Germany"
            serviceTypesNearby={42}
            serviceTypesFarther={14}
            serviceTypesDistant={18}
            walkabilityScore={19}
            pdfPath="doc-gabriel-max-straße-15.pdf"
          />

          <ProductSample
            imagePath="preview-r-alexandre-martins-96.p.4-new.jpg"
            address="R. Alexandre Martins, 96 - Aparecida, Santos - SP, 11025-200, Brazil"
            serviceTypesNearby={42}
            serviceTypesFarther={11}
            serviceTypesDistant={21}
            walkabilityScore={21}
            pdfPath="doc-r-alexandre-martins-96.pdf"
          />

          <ProductSample
            imagePath="preview-245-granby-st.p.4-new.jpg"
            address="245 Granby St, Norfolk, VA 23510"
            serviceTypesNearby={42}
            serviceTypesFarther={9}
            serviceTypesDistant={23}
            walkabilityScore={21}
            pdfPath="doc-245-granby-st.p.4-new.pdf"
          />

          <ProductSample
            imagePath="preview-14-e-washington-st.p.4-new.jpg"
            address="14 E Washington St, Indianapolis, IN 46204"
            serviceTypesNearby={42}
            serviceTypesFarther={7}
            serviceTypesDistant={25}
            walkabilityScore={22}
            pdfPath="doc-14-e-washington-st.pdf"
          />

          <ProductSample
            imagePath="preview-1030-tiverton-ave.p.4-new.jpg"
            address="1030 Tiverton Ave. Los Angeles, CA 90024"
            serviceTypesNearby={41}
            serviceTypesFarther={17}
            serviceTypesDistant={16}
            walkabilityScore={25}
            pdfPath="doc-1030-tiverton-ave.pdf"
          />

          <ProductSample
            imagePath="preview-1900-broadway.p.4-new.jpg"
            address="1900 Broadway, Boulder, CO 80302"
            serviceTypesNearby={40}
            serviceTypesFarther={15}
            serviceTypesDistant={19}
            walkabilityScore={23}
            pdfPath="doc-1900-broadway.pdf"
          />

          <ProductSample
            imagePath="preview-526-superior-ave.p.4-new.jpg"
            address="526 Superior Ave, Cleveland, OH 44114"
            serviceTypesNearby={40}
            serviceTypesFarther={9}
            serviceTypesDistant={25}
            walkabilityScore={21}
            pdfPath="doc-526-superior-ave.pdf"
          />

          <ProductSample
            imagePath="preview-1505-ponce-de-leon-blvd.p.4-new.jpg"
            address="1505 Ponce de Leon, Coral Gables, FL 33134"
            serviceTypesNearby={38}
            serviceTypesFarther={7}
            serviceTypesDistant={29}
            walkabilityScore={23}
            pdfPath="doc-1505-ponce-de-leon-blvd.pdf"
          />

          <ProductSample
            imagePath="preview-4100-georgia-ave.6.jpg"
            address="4100 Georgia Ave NW, Washington, DC 20011"
            serviceTypesNearby={37}
            serviceTypesFarther={10}
            serviceTypesDistant={27}
            walkabilityScore={22}
            pdfPath="doc-4100-georgia-ave.pdf"
          />

          <ProductSample
            imagePath="preview-555-church-st.p.4-new.jpg"
            address="555 Church St. Nashville, TN 37203"
            serviceTypesNearby={37}
            serviceTypesFarther={8}
            serviceTypesDistant={29}
            walkabilityScore={24}
            pdfPath="doc-555-church-st.pdf"
          />

          <ProductSample
            imagePath="preview-332-e-william-st.p.4-new.jpg"
            address="332 E William St. Ann Arbor, MI 48104"
            serviceTypesNearby={36}
            serviceTypesFarther={17}
            serviceTypesDistant={21}
            walkabilityScore={27}
            pdfPath="doc-332-e-william-st.pdf"
          />

          <ProductSample
            imagePath="preview-6485-victoria-ave.8.jpg"
            address="6485 Victoria Ave, Montreal, QC H3W, Canada"
            serviceTypesNearby={36}
            serviceTypesFarther={8}
            serviceTypesDistant={30}
            walkabilityScore={21}
            pdfPath="doc-6485-victoria-ave.pdf"
          />

          <ProductSample
            imagePath="preview-107-high-st.p.4-new.jpg"
            address="107 High St, Charlestown, MA 02129"
            serviceTypesNearby={36}
            serviceTypesFarther={8}
            serviceTypesDistant={30}
            walkabilityScore={17}
            pdfPath="doc-107-high-st.pdf"
          />

          <ProductSample
            imagePath="preview-201-chartres-st.6.jpg"
            address="201 Chartres St, New Orleans, LA 70130"
            serviceTypesNearby={35}
            serviceTypesFarther={16}
            serviceTypesDistant={23}
            walkabilityScore={21}
            pdfPath="doc-201-chartres-st.pdf"
          />

          <ProductSample
            imagePath="preview-2-junction-rd.jpg"
            address="2 Junction Road, Archway, London N19 5FF"
            serviceTypesNearby={34}
            serviceTypesFarther={9}
            serviceTypesDistant={31}
            walkabilityScore={26}
            pdfPath="doc-2-junction-rd.pdf"
          />

          <ProductSample
            imagePath="preview-1431-sw-park-ave.2.jpg"
            address="1431 SW Park Ave. Portland, OR 97201"
            serviceTypesNearby={33}
            serviceTypesFarther={21}
            serviceTypesDistant={20}
            walkabilityScore={21}
            pdfPath="doc-1431-sw-park-ave.pdf"
          />

          <ProductSample
            imagePath="preview-1080-peachtree-st.jpg"
            address="1080 Peachtree St NE, Atlanta, GA 30309"
            serviceTypesNearby={32}
            serviceTypesFarther={19}
            serviceTypesDistant={23}
            walkabilityScore={23}
            pdfPath="doc-1080-peachtree-st.pdf"
          />

          <ProductSample
            imagePath="preview-2033-broadway.2.jpg"
            address="2033 Broadway, Nashville, TN 37203"
            serviceTypesNearby={27}
            serviceTypesFarther={17}
            serviceTypesDistant={30}
            walkabilityScore={22}
            pdfPath="doc-2033-broadway.pdf"
          />

          <ProductSample
            imagePath="preview-2525-ocean-ave.2.jpg"
            address="2525 Ocean Ave, San Francisco, CA 94132"
            serviceTypesNearby={27}
            serviceTypesFarther={15}
            serviceTypesDistant={32}
            walkabilityScore={21}
            pdfPath="doc-2525-ocean-ave.pdf"
          />

          <ProductSample
            imagePath="preview-1015-elvira-ave.2.jpg"
            address="1015 Elvira Ave. Nashville, TN 37216"
            serviceTypesNearby={12}
            serviceTypesFarther={13}
            serviceTypesDistant={49}
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
