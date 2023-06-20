import React from "react";
import Announcement from "../Announcement";
import Navbar from "./Navbar";
import { Montserrat, Poppins, Inter } from "next/font/google";

type Props = {};

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-pappins",
});
const Header = (props: Props) => {
  return (
    <>
      <header
        className={`${poppins.className} page-header page-header--transparent flex flex-col`}
      >
        <Navbar />
      </header>
    </>
  );
};

export default Header;
