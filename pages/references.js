import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function Associations() {
  return (
    <div className="w-full max-w-screen-xl">
      <div className="lg:mx-32">
        <PageTitle
          topTitle="References"
          textColor="text-title-text-references"
          shadowColor="title-shadow-references"
          showLogo={true} // Integrates the logo
        />
        <div className="roboto-font mx-4 text-stone-300">
          <div className="flex flex-col space-y-6">
            {/* John Zupancic */}
            <div className="rounded-lg bg-stone-800 bg-opacity-70 p-4 shadow-md hover:shadow-lg">
              <b className="block text-lg">John Zupancic</b>
              <i className="block">
                Owner and Principal Broker,&nbsp;
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
            <div className="rounded-lg bg-stone-800 bg-opacity-70 p-4 shadow-md hover:shadow-lg">
              <b className="block text-lg">Nancy Collins</b>
              <i className="block">
                Attorney Real Estate Associate, Fayetteville, GA
              </i>
            </div>

            {/* Urban Planet */}
            <div className="rounded-lg bg-stone-800 bg-opacity-70 p-4 shadow-md hover:shadow-lg">
              <a
                href="https://urbanplanet.org/forums/forum/250-nashville/"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-blue-500 underline hover:text-blue-400"
              >
                Urban Planet
              </a>
              <i className="block">
                Nashville Urbanism Meet-Up, Urbanism Discussion Meet-up Group,
                Nashville, TN
              </i>
            </div>

            {/* City Now Next */}
            <div className="rounded-lg bg-stone-800 bg-opacity-70 p-4 shadow-md hover:shadow-lg">
              <a
                href="https://citynownext.com/"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-blue-500 underline hover:text-blue-400"
              >
                City Now Next Real Estate Media, LLC
              </a>
              <i className="block">designed by Robert Looper III</i>
            </div>

            {/* East Nashville Urban Design */}
            <div className="rounded-lg bg-stone-800 bg-opacity-70 p-4 shadow-md hover:shadow-lg">
              <a
                href="https://eastnashvilleurbandesign.wordpress.com/"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-blue-500 underline hover:text-blue-400"
              >
                East Nashville Urban Design
              </a>
              <i className="block">Nashville, TN</i>
            </div>

            {/* Nashville Projects & Development */}
            <div className="rounded-lg bg-stone-800 bg-opacity-70 p-4 shadow-md hover:shadow-lg">
              <a
                href="https://www.google.com/maps/d/viewer?mid=1ELRoQQW5WC_YAmOyc-QfGVr-J50&ll=36.14502126951252%2C-86.76894667856646&z=14"
                target="_blank"
                rel="noreferrer"
                className="text-lg text-blue-500 underline hover:text-blue-400"
              >
                Nashville Projects & Development, interactive map
              </a>
              <i className="block">Nashville, TN</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
