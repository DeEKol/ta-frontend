import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

import MainLayout from "@/layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <title>Truck App</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
