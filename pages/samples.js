import ProductSample from "@/components/ProductSample";
import SamplesHeader from "@/components/SamplesHeader";

export default function Samples() {
  return (
    <div>
      <SamplesHeader />
      <div
        id="page-title"
        className="pb-4 pt-9 text-center text-[30px] text-title-text-samples sm:text-[40px] md:text-[57px]"
      >
        Property Report Sets, Ranked by Metrics
      </div>
      {/* Highly Walkable Property Report Previews */}
      <div id="highly-walkable">
        <div className="mx-8 mb-2 border-b-4 border-x-slate-200">
          <div className="pt-3 text-right text-[27px] italic text-gray-200 lg:text-[40px]">
            Highly Walkable
          </div>
        </div>
        <div className="grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4">
          <ProductSample
            imagePath="preview-233-8th-ave-new-york.2.jpg"
            address="223 8th Ave. New York, NY 10011"
            serviceTypesNearby={55}
            serviceTypesFarther={7}
            serviceTypesDistant={12}
            walkabilityScore={20}
            pdfPath="doc-233-8th-ave-new-york.2.pdf"
          />
          <ProductSample
            imagePath="preview-sarphatipark-38i-amsterdam.2.jpg"
            address="Sarphatipark 38I, 1072 PB Amsterdam, Netherlands"
            serviceTypesNearby={52}
            serviceTypesFarther={7}
            serviceTypesDistant={15}
            walkabilityScore={23}
            pdfPath="doc-sarphatipark-38i-amsterdam.2.pdf"
          />
          <ProductSample
            imagePath="preview-1902-2nd-ave-seattle-wa.2.jpg"
            address="1902 2nd Ave, Seattle, WA 98101"
            serviceTypesNearby={49}
            serviceTypesFarther={13}
            serviceTypesDistant={12}
            walkabilityScore={20}
            pdfPath="doc-1902-2nd-ave-seattle-wa.2.pdf"
          />
          <ProductSample
            imagePath="preview-chicago-il.2.jpg"
            address="29 S La Salle St, Chicago, IL 60603"
            serviceTypesNearby={49}
            serviceTypesFarther={11}
            serviceTypesDistant={14}
            walkabilityScore={25}
            pdfPath="doc-chicago-il.2.pdf"
          />
          <ProductSample
            imagePath="preview-glasgow-scotland-uk.2.jpg"
            address="313 Sauchiehall St. Glasgow G2 3JA Scotland"
            serviceTypesNearby={49}
            serviceTypesFarther={11}
            serviceTypesDistant={14}
            walkabilityScore={23}
            pdfPath="doc-glasgow-scotland-uk.2.pdf"
          />
          <ProductSample
            imagePath="preview-liverpool-uk.2.jpg"
            address="18 Whitechapel, Liverpool L1 6DS, UK"
            serviceTypesNearby={49}
            serviceTypesFarther={9}
            serviceTypesDistant={16}
            walkabilityScore={27}
            pdfPath="doc-liverpool-uk.2.pdf"
          />
          <ProductSample
            imagePath="preview-wellington-nz.2.jpg"
            address="10 Lorne Street, Te Aro, Wellington 6011, New Zealand"
            serviceTypesNearby={49}
            serviceTypesFarther={7}
            serviceTypesDistant={18}
            walkabilityScore={20}
            pdfPath="doc-wellington-nz.2.pdf"
          />
          <ProductSample
            imagePath="preview-vancouver-canada.2.jpg"
            address="41 E Hastings St, Vancouver, BC V6A 1M9, Canada"
            serviceTypesNearby={48}
            serviceTypesFarther={12}
            serviceTypesDistant={14}
            walkabilityScore={19}
            pdfPath="doc-vancouver-canada.2.pdf"
          />
          <ProductSample
            imagePath="preview-paris-france.2.jpg"
            address="10 Rue de Rivoli, 75004 Paris, France"
            serviceTypesNearby={48}
            serviceTypesFarther={8}
            serviceTypesDistant={18}
            walkabilityScore={24}
            pdfPath="doc-paris-france.2.pdf"
          />
          <ProductSample
            imagePath="preview-cape-town-south-africa.2.jpg"
            address="67A Regent Rd, Cape Town, 8005, South Africa"
            serviceTypesNearby={48}
            serviceTypesFarther={2}
            serviceTypesDistant={24}
            walkabilityScore={23}
            pdfPath="doc-cape-town-south-africa.2.pdf"
          />
        </div>
      </div>

      {/* Somewhat Walkable Property Report Previews */}
      <div id="somewhat-walkable">
        <div className="mx-8 mb-2 border-b-4 border-x-slate-200">
          <div className="pt-3 text-right text-[27px] italic text-gray-200 lg:text-[40px]">
            Somewhat Walkable
          </div>
        </div>
        <div className="grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4">
          <ProductSample
            imagePath="preview-philadelphia-pa.2.jpg"
            address="301 Market St, Philadelphia, PA 19106"
            serviceTypesNearby={47}
            serviceTypesFarther={4}
            serviceTypesDistant={23}
            walkabilityScore={19}
            pdfPath="doc-philadelphia-pa.2.pdf"
          />
          <ProductSample
            imagePath="preview-hong-kong.2.jpg"
            address="163 Lai Chi Kok Rd, Tai Kok Tsui, Hong Kong"
            serviceTypesNearby={45}
            serviceTypesFarther={10}
            serviceTypesDistant={19}
            walkabilityScore={20}
            pdfPath="doc-hong-kong.2.pdf"
          />
          <ProductSample
            imagePath="preview-malta.2.jpg"
            address="55 Triq San Vincenz, Tas-Sliema, Malta"
            serviceTypesNearby={45}
            serviceTypesFarther={9}
            serviceTypesDistant={20}
            walkabilityScore={15}
            pdfPath="doc-malta.2.pdf"
          />
          <ProductSample
            imagePath="preview-santa-barbara-ca.2.jpg"
            address="618-622 Anacapa St, Santa Barbara, CA 93101"
            serviceTypesNearby={45}
            serviceTypesFarther={7}
            serviceTypesDistant={22}
            walkabilityScore={22}
            pdfPath="doc-santa-barbara-ca.2.pdf"
          />
          <ProductSample
            imagePath="preview-ireland.2.jpg"
            address="50 Grand Parade, Centre, Cork, T12 D638, Ireland"
            serviceTypesNearby={44}
            serviceTypesFarther={13}
            serviceTypesDistant={17}
            walkabilityScore={17}
            pdfPath="doc-ireland.2.pdf"
          />
          <ProductSample
            imagePath="preview-asheville-nc.2.jpg"
            address="107 Patton Ave, Asheville, NC 28801"
            serviceTypesNearby={44}
            serviceTypesFarther={10}
            serviceTypesDistant={20}
            walkabilityScore={18}
            pdfPath="doc-asheville-nc.2.pdf"
          />
          <ProductSample
            imagePath="preview-charleston-sc.2.jpg"
            address="316 King St, Charleston, SC 29401"
            serviceTypesNearby={44}
            serviceTypesFarther={8}
            serviceTypesDistant={22}
            walkabilityScore={19}
            pdfPath="doc-charleston-sc.2.pdf"
          />
          <ProductSample
            imagePath="preview-berlin-germany.2.jpg"
            address="Gabriel-Max-Straße 15, 10245 Berlin, Germany"
            serviceTypesNearby={42}
            serviceTypesFarther={14}
            serviceTypesDistant={18}
            walkabilityScore={19}
            pdfPath="doc-berlin-germany.2.pdf"
          />
          <ProductSample
            imagePath="preview-sao-palo-brazil.2.jpg"
            address="R. Alexandre Martins, 96 - Aparecida, Santos - SP, 11025-200, Brazil"
            serviceTypesNearby={42}
            serviceTypesFarther={11}
            serviceTypesDistant={21}
            walkabilityScore={21}
            pdfPath="doc-sao-palo-brazil.2.pdf"
          />
          <ProductSample
            imagePath="preview-norfolk-va.2.jpg"
            address="245 Granby St, Norfolk, VA 23510"
            serviceTypesNearby={42}
            serviceTypesFarther={9}
            serviceTypesDistant={23}
            walkabilityScore={21}
            pdfPath="doc-norfolk-va.2.pdf"
          />
          <ProductSample
            imagePath="preview-indianapolis-in.2.jpg"
            address="14 E Washington St, Indianapolis, IN 46204"
            serviceTypesNearby={42}
            serviceTypesFarther={7}
            serviceTypesDistant={25}
            walkabilityScore={22}
            pdfPath="doc-indianapolis-in.2.pdf"
          />
          <ProductSample
            imagePath="preview-tiverton-ave-los-angeles.2.jpg"
            address="1030 Tiverton Ave. Los Angeles, CA 90024"
            serviceTypesNearby={41}
            serviceTypesFarther={17}
            serviceTypesDistant={16}
            walkabilityScore={25}
            pdfPath="doc-tiverton-ave-los-angeles.2.pdf"
          />
          <ProductSample
            imagePath="preview-boulder-co.2.jpg"
            address="1900 Broadway, Boulder, CO 80302"
            serviceTypesNearby={40}
            serviceTypesFarther={15}
            serviceTypesDistant={19}
            walkabilityScore={23}
            pdfPath="doc-boulder-co.2.pdf"
          />
          <ProductSample
            imagePath="preview-superior-ave-cleveland-oh.jpg"
            address="526 Superior Ave, Cleveland, OH 44114"
            serviceTypesNearby={40}
            serviceTypesFarther={9}
            serviceTypesDistant={25}
            walkabilityScore={21}
            pdfPath="doc-superior-ave-cleveland-oh.pdf"
          />
        </div>
      </div>

      {/* Less Walkable Property Report Previews */}
      <div id="less-walkable">
        <div className="mx-8 mb-2 border-b-4 border-x-slate-200">
          <div className="pt-3 text-right text-[27px] italic text-gray-200 lg:text-[40px]">
            Less Walkable
          </div>
        </div>
        <div className="grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4">
          <ProductSample
            imagePath="preview-coral-gables-fl.2.jpg"
            address="1505 Ponce de Leon, Coral Gables, FL 33134"
            serviceTypesNearby={38}
            serviceTypesFarther={7}
            serviceTypesDistant={29}
            walkabilityScore={23}
            pdfPath="doc-coral-gables-fl.2_compressed.pdf"
          />
          <ProductSample
            imagePath="preview-washington-dc.2.jpg"
            address="4100 Georgia Ave NW, Washington, DC 20011"
            serviceTypesNearby={37}
            serviceTypesFarther={10}
            serviceTypesDistant={27}
            walkabilityScore={22}
            pdfPath="doc-washington-dc.2.pdf"
          />
          <ProductSample
            imagePath="preview-church-st-nashville-tn.2.jpg"
            address="555 Church St. Nashville, TN 37203"
            serviceTypesNearby={37}
            serviceTypesFarther={8}
            serviceTypesDistant={29}
            walkabilityScore={24}
            pdfPath="doc-church-st-nashville-tn.2.pdf"
          />
          <ProductSample
            imagePath="preview-ann-arbor-mi.2.jpg"
            address="332 E William St. Ann Arbor, MI 48104"
            serviceTypesNearby={36}
            serviceTypesFarther={17}
            serviceTypesDistant={21}
            walkabilityScore={27}
            pdfPath="doc-ann-arbor-mi.2.pdf"
          />
          <ProductSample
            imagePath="preview-montreal-qc-canada.2.jpg"
            address="6485 Victoria Ave, Montreal, QC H3W, Canada"
            serviceTypesNearby={36}
            serviceTypesFarther={8}
            serviceTypesDistant={30}
            walkabilityScore={21}
            pdfPath="doc-montreal-qc-canada.2.pdf"
          />
          <ProductSample
            imagePath="preview-107-high-st.nrl.jpg"
            address="107 High St, Charlestown, MA 02129"
            serviceTypesNearby={36}
            serviceTypesFarther={8}
            serviceTypesDistant={30}
            walkabilityScore={17}
            pdfPath="doc-107-high-st.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-201-chartres-st.nrl.jpg"
            address="201 Chartres St, New Orleans, LA 70130"
            serviceTypesNearby={35}
            serviceTypesFarther={16}
            serviceTypesDistant={23}
            walkabilityScore={21}
            pdfPath="doc-201-chartres-st.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-2-junction-road.nrl.jpg"
            address="2 Junction Road, Archway, London N19 5FF"
            serviceTypesNearby={34}
            serviceTypesFarther={9}
            serviceTypesDistant={31}
            walkabilityScore={24}
            pdfPath="doc-2-junction-road.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-1431-sw-park-ave.nrl.jpg"
            address="1431 SW Park Ave. Portland, OR 97201"
            serviceTypesNearby={33}
            serviceTypesFarther={21}
            serviceTypesDistant={20}
            walkabilityScore={21}
            pdfPath="doc-1431-sw-park-ave.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-1080-peachtree-st.nrl.jpg"
            address="1080 Peachtree St NE, Atlanta, GA 30309"
            serviceTypesNearby={32}
            serviceTypesFarther={19}
            serviceTypesDistant={23}
            walkabilityScore={23}
            pdfPath="doc-1080-peachtree-st.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-2033-broadway.nrl.jpg"
            address="2033 Broadway, Nashville, TN 37203"
            serviceTypesNearby={27}
            serviceTypesFarther={17}
            serviceTypesDistant={30}
            walkabilityScore={22}
            pdfPath="doc-2033-broadway.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-2525-ocean-ave.nrl.jpg"
            address="2525 Ocean Ave, San Francisco, CA 94132"
            serviceTypesNearby={27}
            serviceTypesFarther={15}
            serviceTypesDistant={32}
            walkabilityScore={21}
            pdfPath="doc-2525-ocean-ave.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-5025-penn-ave.nrl.jpg"
            address="18 Whitechapel, Liverpool L1 6DS, UK"
            serviceTypesNearby={23}
            serviceTypesFarther={5}
            serviceTypesDistant={46}
            walkabilityScore={18}
            pdfPath="doc-5025-penn-ave.nrl.pdf"
          />
          <ProductSample
            imagePath="preview-1015-elvira-ave.nrl.2.jpg"
            address="1015 Elvira Ave. Nashville, TN 37216"
            serviceTypesNearby={12}
            serviceTypesFarther={13}
            serviceTypesDistant={49}
            walkabilityScore={12}
            pdfPath="doc-1015-elvira-ave.nrl.2.pdf"
          />
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
