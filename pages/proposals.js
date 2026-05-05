import Image from "next/image";
import PageTitle from "@/components/PageTitle";

const CARD_LIGHT = "bg-[linear-gradient(to_right,rgba(178,120,120,0.15),rgba(113,22,21,0.35))]";
const CARD_DARK  = "bg-[linear-gradient(to_right,rgba(113,22,21,0.30),rgba(80,15,15,0.55))]";
const HEADING    = "roboto-font mb-3 text-2xl font-bold text-title-text-product title-shadow-product md:text-3xl";
const BODY       = "text-[clamp(1.05rem,2.5vw,1.2rem)] leading-relaxed text-gray-100";
const HIGH_FID_DEV_PROPOSAL = "/images/proposals/high-fid-dev-prop.png";
const responsiveImageStyle = { width: "100%", height: "auto" };

export default function Proposals() {
  return (
    <div className="roboto-font w-full text-white">
      <PageTitle
        topTitle="Development Proposals"
        textColor="text-title-text-product"
        shadowColor="title-shadow-product"
        logoColor="#e7c7c7ff"
        gradient="bg-[linear-gradient(to_right,rgba(178,120,120,0.1),rgba(113,22,21,0.5))]"
        showLogo={true}
      />

      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-10">
        <div className="grid grid-cols-12 gap-6">

          {/* ── Left column ── */}
          <div className="col-span-12 space-y-5 lg:col-span-7">

            <section className="overflow-hidden rounded-[10px]">
              <div className={`${CARD_LIGHT} p-5 md:p-7`}>
                <h2 className={HEADING}>About Development Proposals</h2>
                <p className={BODY}>
                  These reports explore a potential building construction development design
                  for a given parcel or parcel cluster. The reports show how a property could
                  be developed so as to maximize walkability for residents living in the
                  immediate vicinity. These designs are almost always mixed-use complexes
                  with residential, office, and retail spaces.
                </p>
              </div>
            </section>

            <section className="overflow-hidden rounded-[10px]">
              <div className={`${CARD_DARK} p-5 md:p-7`}>
                <h2 className={HEADING}>Use Cases</h2>
                <p className={BODY}>
                  Development proposals should be thought of as a tool for parcel
                  optimization & discovery. They can be used to make a case for rezoning,
                  conditional use permit, or a mixed-use overlay. City planners may be more
                  flexible on granting these if a case can be made for an overall public
                  good, which development proposals aim to demonstrate.
                </p>
              </div>
            </section>

            <section className="overflow-hidden rounded-[10px]">
              <div className={`${CARD_LIGHT} p-5 md:p-7`}>
                <h2 className={HEADING}>Level of Detail</h2>
                <p className={BODY}>
                  Our development proposals have a level of planning detail commensurate
                  with early-stage preliminary architectural design drawings. They show
                  schematic floor plans broken down by occupancy type per floor. Basic IBC
                  compliant egress schemas are included as well. We can provide varying
                  levels of fidelity in terms of 3D modeling and presentation to meet your
                  specific needs.
                </p>
              </div>
            </section>

            <section className="overflow-hidden rounded-[10px]">
              <div className={`${CARD_DARK} p-5 md:p-7`}>
                <h2 className={HEADING}>Our Team</h2>
                <p className={`${BODY} mb-4`}>
                  Our team has extensive experience in both architecture/building
                  construction as well as environmental & urban solutions. We leverage this
                  experience to deliver a unique product. That said, we may rely on you for
                  certain due-diligence requirements unique to your city or region.
                </p>
                <p className={`${BODY} mb-4`}>
                  If you have a property address or parcel you would like us to look at,
                  please feel free to contact us so we can discuss your project.
                </p>
                <p className="text-lg">
                  You can reach out to us directly at:{" "}
                  <a
                    href="mailto:contact@urbanfootnotes.com"
                    className="font-semibold text-title-text-product"
                  >
                    contact@urbanfootnotes.com
                  </a>
                </p>
              </div>
            </section>

          </div>

          {/* ── Right column ── */}
          <div className="col-span-12 space-y-5 lg:col-span-5">

            <section className="overflow-hidden rounded-[10px]">
              <div className={`${CARD_DARK} p-5 md:p-7`}>
                <h2 className={HEADING}>Report Example</h2>
                <Image
                  src={HIGH_FID_DEV_PROPOSAL}
                  alt="High fidelity development proposal example"
                  width={900}
                  height={1}
                  sizes="(min-width: 1024px) 420px, calc(100vw - 3rem)"
                  className="w-full rounded-[6px]"
                  style={responsiveImageStyle}
                />
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
