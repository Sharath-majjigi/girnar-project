import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import "/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const r = useRouter();
  
  return (
    <>
      <Head>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <main className="app-container">
        {r.asPath !== "/" && <Navbar />}
        <Component {...pageProps} />;
        <ToastContainer />
      </main>
    </>
  );
}
