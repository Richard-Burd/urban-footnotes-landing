import "@/styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Urban Foot Notes</title>
        <meta
          name="description"
          content="A project presented by Urban Cruise Ship"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
