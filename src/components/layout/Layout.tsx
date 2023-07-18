import Head from "next/head";
import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "./Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
type Props = {
  children?: React.ReactNode;
  title?: string;
};

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pappins",
});
const Layout = ({ children, title = "Profilim" }: Props) => {
  return (
    <>
      <Header />
      <div className={`${beVietnamPro.className} w-full block`}>{children}</div>

      <div
        className={`${beVietnamPro.className} mx-auto w-full px-3 md:px-10 text-dark-black-500`}
      >
        <Footer />
      </div>
    </>
  );
};

export default Layout;
