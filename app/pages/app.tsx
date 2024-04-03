// _app.tsx
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Include Google Fonts in the Head */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Add any other meta tags or links here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
