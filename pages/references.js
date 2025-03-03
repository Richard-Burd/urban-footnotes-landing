import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function Associations() {
  const boxStyles = `roboto-font max-[2023px]:mx-6 rounded-[20px] bg-[linear-gradient(to_right,rgba(24,44,69,0.3),rgba(24,44,69,0.9))] p-8 text-stone-300 shadow-md min-[1000px]:rounded-full min-[1024px]:mx-0`;
  return (
    <div className="w-full max-w-screen-lg">
      <div id="page-title">
        <PageTitle
          topTitle="Selected References"
          textColor="text-title-text-references"
          shadowColor="title-shadow-references"
          logoColor="#c8dffaff"
          gradient={
            "bg-[linear-gradient(to_right,rgba(29,43,57,0.2),rgba(22,57,105,0.8))]"
          }
          mobileTitleCentered={false}
          showLogo={true} // Integrates the logo
        />
      </div>
      <div id="list of references" className="mb-80">
        <div className="flex flex-col space-y-6 md:grid-cols-2 lg:grid min-[1024px]:mx-6 min-[1024px]:gap-x-6 min-[1056px]:mx-0">
          {/* John Zupancic */}
          <div className="lg:pt-6">
            <div className={boxStyles}>
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
          </div>

          {/* Nancy Collins */}
          <div className={boxStyles}>
            <b className="block text-lg">Nancy Collins</b>
            <i className="block">
              Attorney Real Estate Associate, Fayetteville, GA
            </i>
          </div>

          {/* Urban Planet */}
          <div className={boxStyles}>
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
          <div className={boxStyles}>
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
          <div className={boxStyles}>
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
          <div className={boxStyles}>
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
  );
}
