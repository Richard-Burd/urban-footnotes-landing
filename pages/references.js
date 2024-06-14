import PageHeaderLogo from "@/components/PageHeaderLogo";

export default function Associations() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <h2 className="roboto-font pb-4 pt-12 text-2xl tracking-wide text-stone-300 opacity-60 lg:pt-2 lg:text-4xl">
            References
          </h2>
        </center>
        <div className="roboto-font text-1xl mx-4 text-stone-300 lg:mx-32">
          {/* <section id="advisors" className="pb-20 sm:pb-8">
            <h3 className="text-2xl font-semibold text-stone-400">Advisors</h3> */}
          <div className="pl-2">
            <div className="pb-4 sm:pb-0">
              John Zupancic, Owner and Principal Broker,
              <a
                href="https://www.muttzrealty.com/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp; Muttz Realty, LLC, &nbsp;
              </a>
              Nashville, TN
            </div>
            <div>
              Nancy Collins, Attorney Real Estate Associate, Fayetteville, GA
            </div>
          </div>
          {/* </section> */}

          {/* <section id="allies" className="pb-20 sm:pb-8">
            <h3 className="text-2xl font-semibold text-stone-400">Allies</h3> */}
          <div className="pl-2">
            <div className="pb-4 sm:pb-0">
              <a
                href="https://urbanplanet.org/forums/forum/250-nashville/"
                target="_blank"
                rel="noreferrer"
              >
                Urban Planet, Nashville, TN
              </a>
            </div>

            <div>
              Nashville Urbanism Meet-Up, Urbanism Discussion Meet-up Group
            </div>
          </div>
          {/* </section> */}

          {/* <section id="references" className="pb-20 sm:pb-8">
            <h3 className="text-2xl font-semibold text-stone-400">
              References
            </h3> */}
          <div className="pl-2">
            <div className="pb-4 sm:pb-0">
              <a
                href="https://citynownext.com/"
                target="_blank"
                rel="noreferrer"
              >
                City Now Next Real Estate Media, LLC,
              </a>
              &nbsp; designed by Robert Looper III
            </div>
            <div>
              <a
                href="https://eastnashvilleurbandesign.wordpress.com/"
                target="_blank"
                rel="noreferrer"
              >
                East Nashville Urban Design
              </a>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/d/viewer?mid=1ELRoQQW5WC_YAmOyc-QfGVr-J50&ll=36.14502126951252%2C-86.76894667856646&z=14"
                target="_blank"
                rel="noreferrer"
              >
                Nashville Projects & Development, interactive map
              </a>
            </div>
          </div>
          {/* </section> */}
        </div>
      </div>
    </div>
  );
}
