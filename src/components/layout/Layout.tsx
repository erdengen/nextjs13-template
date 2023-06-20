import Head from "next/head";
import React from "react";
import { Poppins } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
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
        className={`${poppins.className} mx-auto w-full px-10 text-dark-black-500`}
      >
        <Footer />
      </div>
    </>
  );
};

export default Layout;
