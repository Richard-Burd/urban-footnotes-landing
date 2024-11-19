import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function Ads() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-0">
        <center>
          <PageTitle
            topTitle="Advertisements"
            textColor="text-title-text-ads"
            shadowColor={`title-shadow-ads`}
          />
        </center>
        <center>
          <div className="roboto-font pb-4 pt-12 text-2xl tracking-wide text-stone-300 opacity-60 lg:pt-2 lg:text-4xl">
            Comming Soon...
          </div>
        </center>
      </div>
    </div>
  );
}
