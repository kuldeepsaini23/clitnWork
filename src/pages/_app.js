import Fotter from "@/components.js/Fotter";
import Navbar from "@/components.js/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className={`${montserrat.variable} font-sans bg-light w-full min-h-screen text-black`}>
        <Navbar/>
        <Component {...pageProps} />
        <Fotter/>
      </main>
    </>
  );
}
