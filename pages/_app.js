import "@/styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={roboto.variable}>
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
    </div>
  );
}
