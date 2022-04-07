import Head from "next/head";
import "../../styles/globals.css";
import envVar from "../lib/envVar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{envVar.appName}</title>
        <meta
          name="description"
          content="Welcome to Pay-Off-CC Helps you to choose to select perfect card for your next spending credit card."
        ></meta>
        <link
          rel="shortcut icon"
          href="/icons/favicon.ico"
          type="image/x-icon"
        />
        <meta name="theme-color" content="#317EFB" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
