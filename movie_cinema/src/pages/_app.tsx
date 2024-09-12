import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";
import React, { ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};
export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const searchPage = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>{searchPage(<Component {...pageProps} />)}</GlobalLayout>
  );
}
