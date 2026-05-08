import Head from "next/head";
import PageTitle from "./PageTitle";
import PropertyReportsTabs from "./PropertyReportsTabs";
import { propertyReportsHeaderProps } from "./propertyReportsHeaderConfig";

const SITE_URL = "https://urbanfootnotes.com";

export default function NeighborhoodReportsPage({
  activeView,
  seoTitle,
  seoDescription,
  canonicalPath,
  children,
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <main className="w-full">
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
      </Head>

      <PageTitle {...propertyReportsHeaderProps} />

      <PropertyReportsTabs activeView={activeView} />

      {children}
    </main>
  );
}
