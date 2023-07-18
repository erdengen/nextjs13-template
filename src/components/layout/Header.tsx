import React from "react";
import Announcement from "../Announcement";
import Navbar from "./Navbar";
import { Be_Vietnam_Pro } from "next/font/google";

type Props = {};

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pappins",
});
const Header = (props: Props) => {
  return (
    <>
      <Announcement />
      <header
        className={`${beVietnamPro.className} page-header page-header--transparent flex flex-col sticky top-0 z-50`}
      >
        <Navbar />
      </header>
    </>
  );
};

export default Header;
