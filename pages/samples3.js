import PageTitle from "@/components/PageTitle";
import PropertyPreviewAndLink3 from "@/components/PropertyPreviewAndLink3";

export default function Samples() {
  return (
    <div>
      <PageTitle />
      <div className="lg:m-20">
        <div>
          <div className="roboto-font text-base sm:text-2xl text-center pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-8">
            <span className="block sm:inline sm:mr-2">Samples</span>
            <span className="block sm:inline">(Product Examples)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          <PropertyPreviewAndLink3
            ranking1="55 out of 74 Locations Nearby"
            ranking2="20 out of 30 Walkability Score"
            address1="223 8th Ave."
            address2="New York, NY 10011"
            href="https://drive.google.com/uc?export=view&id=1xmnGEcA5wjkNLR4s0WN7Rrzbs1HhgVqs"
            imageName="223_8th_Ave_vh1veh.jpg"
          />
          <PropertyPreviewAndLink3
            ranking1="40 out of 74 Locations Nearby"
            ranking2="25 out of 30 Walkability Score"
            address1="1030 Tiverton Ave."
            address2="Los Angeles, CA 90024"
            href="https://drive.google.com/uc?export=view&id=1K4O2Ja7KBLYqsvwtWWvMkmRrmbIzrLUr"
            imageName="1030_Tiverton_Ave_kyyzmf.jpg"
          />
          <PropertyPreviewAndLink3
            ranking1="37 out of 74 Locations Nearby"
            ranking2="24 out of 30 Walkability Score"
            address1="555 Church St."
            address2="Nashville, TN 37203"
            href="https://drive.google.com/uc?export=view&id=1QF6X__H949NHh-uAEHvzMGhGC5KLYy-j"
            imageName="555_Church_St_xjv97o.jpg"
          />
          <PropertyPreviewAndLink3
            ranking1="36 out of 74 Locations Nearby"
            ranking2="27 out of 30 Walkability Score"
            address1="332 E William St."
            address2="Ann Arbor, MI 48104"
            href="https://drive.google.com/uc?export=view&id=1mO-cdSMiK73jAsTYWRtDsrNfxGiFn8Ko"
            imageName="332_E_William_St_jlrw5h.jpg"
          />
          <PropertyPreviewAndLink3
            ranking1="33 out of 74 Locations Nearby"
            ranking2="21 out of 30 Walkability Score"
            address1="1431 SW Park Ave."
            address2="Portland, OR 97201"
            href="https://drive.google.com/uc?export=view&id=1axVituBXMQ-QICJLNZ0BjoKRXTnCt8ER"
            imageName="1431_SW_Park_Ave_bdwso6.jpg"
          />
          <PropertyPreviewAndLink3
            ranking1="26 out of 74 Locations Nearby"
            ranking2="22 out of 30 Walkability Score"
            address1="2033 Broadway"
            address2="Nashville, TN 37203"
            href="https://drive.google.com/uc?export=view&id=1yOpdnKmv3GOcicCjg-ZNhEZ3cGDhjt3D"
            imageName="2033_Broadway_ktp00e.jpg"
          />
          <PropertyPreviewAndLink3
            ranking1="12 out of 74 Locations Nearby"
            ranking2="12 out of 30 Walkability Score"
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
