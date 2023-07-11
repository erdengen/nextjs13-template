import Head from "next/head";
import React from "react";
import { Poppins } from "next/font/google";
import Header from "./Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
type Props = {
  children?: React.ReactNode;
  title?: string;
};
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pappins",
});
const Layout = ({ children, title = "Profilim" }: Props) => {
  return (
    <>
      <Header />
      {children}
      <div
        className={`${poppins.className} mx-auto w-full px-3 md:px-10 text-dark-black-500`}
      >
        <Footer />
      </div>
    </>
  );
};

export default Layout;
