import Link from "next/link";

export default function Order() {
  return (
    <div>
      <div className="lg:m-20">
        <center>
          <div className="roboto-font text-2xl pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-4">
            Ordering Our Product
          </div>
        </center>
        <div className="roboto-font text-1xl text-stone-300 mx-4 lg:mx-32">
          <p className="pb-4">
            We are currently developing our product, please check back or
            contact Richard at:{" "}
            <Link href="mailto: richard@urbancruiseship.org">
              richard@urbancruiseship.org
            </Link>{" "}
            to get more information on the timeline for availability, or ask
            about becoming an early adopter.
          </p>
        </div>
      </div>
    </div>
  );
}
