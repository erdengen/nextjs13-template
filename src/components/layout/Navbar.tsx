import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Pivot as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { base64SolidImage } from "@/src/utility/SolidImage";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "EN YENİLER", src: "Chart_fill" },
    { title: "YENİ SEZON", src: "Chat" },
    { title: "İNDİRİM", src: "USER", gap: false },
    { title: "SON ŞANS ", src: "Calendar" },
    { title: "KOLEKSİYON", src: "Search" },
    { title: "OUTLET", src: "Chart" },
  ];

  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto w-full p-3 md:px-10 flex flex-wrap items-center justify-between ">
          <div className="w-full flex items-center justify-between mx-auto">
            <div className="flex flex-row gap-3 justify-start items-center">
              <Hamburger
                size={32}
                color="#404040"
                onToggle={(toggled) => {
                  if (toggled) {
                    setOpen(true);
                  } else {
                    setOpen(false);
                  }
                }}
              />
              <Link href="/" className="block w-52 lg:w-60">
                <Image
                  src="/perspective_d.webp"
                  width={728}
                  height={75}
                  alt="Perspective Logo"
                  className=""
                  priority={true}
                />
              </Link>
            </div>

            <div className="w-full max-w-md relative hidden md:flex ">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <MagnifyingGlassIcon className="h-6 w-6 text-black" />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full border-none border-b  pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                placeholder="SEARCH"
              />
            </div>

            <div className="flex gap-0 lg:gap-0 items-center justify-center space-x-1 lg:space-x-3">
              <a
                href="#"
                className="hidden  md:flex flex-col items-center justify-center text-center text-gray-700 hover:text-primary transition relative px-3"
              >
                <HeartIcon className="h-6 w-6 text-black" />

                <div className="text-xs leading-3 font-semibold hidden">
                  Wishlist
                </div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-sinematv-500 text-white text-xs ">
                  8
                </div>
              </a>
              <a
                href="#"
                className="hidden md:flex flex-col items-center justify-center text-center text-gray-700 hover:text-primary transition relative px-3"
              >
                <ShoppingBagIcon className="h-6 w-6 text-black" />

                <div className="text-xs leading-3 font-semibold hidden">
                  Cart
                </div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  2
                </div>
              </a>
              <Link
                aria-label="Giriş Yap"
                href="/auth/login"
                className=" flex flex-col items-center justify-center text-center text-gray-700 hover:text-primary transition relative px-3"
              >
                <UserIcon className="h-6 w-6 text-black" />

                <div className="hidden text-xs leading-3 font-semibold">
                  Account
                </div>
              </Link>
            </div>
          </div>
          <div
            className="hidden w-full md:flex justify-center items-center  px-2 pb-0 "
            id="navbar-default"
          >
            <ul className="MainMenu transition-all ease-in duration-300 delay-100  flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black">
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex font-semibold rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-0"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 before:content-['']"
                    aria-current="page"
                  >
                    {Menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <Sidebar show={open} />
    </>
  );
};
export default Navbar;
