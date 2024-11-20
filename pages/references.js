import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function Associations() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="">
      <PageTitle
          topTitle="References"
          textColor="text-title-text-references"
          shadowColor={`title-shadow-references`}
        />
        <div className="roboto-font text-1xl mx-4 text-stone-300 lg:mx-32">
          {/* <section id="advisors" className="pb-20 sm:pb-8">
            <h3 className="text-2xl font-semibold text-stone-400">Advisors</h3> */}
          <div className="pl-2">
            {/* John Zupancic */}
            <div className="pb-6">
              <b>John Zupancic</b>{" "}
              <i>
                Owner and Principal Broker,{" "}
                <a
                  href="https://www.muttzrealty.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline hover:text-blue-400"
                >
                  Muttz Realty, LLC
                </a>
                , Nashville, TN
              </i>
            </div>

            {/* Nancy Collins */}
            <div className="pb-6">
              <b>Nancy Collins</b>{" "}
              <i>Attorney Real Estate Associate, Fayetteville, GA</i>
            </div>

            {/* Urban Planet */}
            <div className="pb-6">
              <a
                href="https://urbanplanet.org/forums/forum/250-nashville/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-400"
              >
                Urban Planet
              </a>
              &nbsp;
              <em>
                Nashville Urbanism Meet-Up, Urbanism Discussion Meet-up Group,
                Nashville, TN
              </em>
            </div>

            {/* References Section */}
            <div className="pb-6">
              <a
                href="https://citynownext.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-400"
              >
                City Now Next Real Estate Media, LLC
              </a>
              &nbsp;<i>designed by Robert Looper III</i>
            </div>

            <div className="pb-6">
              <a
                href="https://eastnashvilleurbandesign.wordpress.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-400"
              >
                East Nashville Urban Design
              </a>&nbsp;<i>Nashville, TN</i>
            </div>

            <div>
              <a
                href="https://www.google.com/maps/d/viewer?mid=1ELRoQQW5WC_YAmOyc-QfGVr-J50&ll=36.14502126951252%2C-86.76894667856646&z=14"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-400"
              >
                Nashville Projects & Development, interactive map
              </a>&nbsp;<i>Nashville, TN</i>
            </div>
          </div>
          {/* </section> */}
        </div>
      </div>
    </div>
  );
}
