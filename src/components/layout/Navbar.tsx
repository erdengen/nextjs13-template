import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="mx-auto w-full p-3 md:px-10 flex flex-wrap items-center justify-between ">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <a href="https://flowbite.com/" className="flex items-center">
            <Image src="/logo.svg" width={255} height={34} alt="Logo" />
          </a>
          <div className="transition ease-in delay-150  text-black  border-b border-black hover:border-white duration-300">
            <SearchContainer>
              <input
                placeholder="Search"
                className="uppercase w-full  focus-visible:outline-none "
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-black" />
            </SearchContainer>
          </div>
          <div>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="flex flex-row  text-black  rounded"
                  aria-current="page"
                >
                  <UserIcon className="h-6 w-6 text-black" /> LOGIN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  text-white  rounded "
                  aria-current="page"
                >
                  <HeartIcon className="h-6 w-6 text-black" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  text-white  rounded "
                  aria-current="page"
                >
                  <ShoppingBagIcon className="h-6 w-6 text-black" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className="hidden w-full md:flex justify-center items-center mt-5 p-2 pb-0 "
            id="navbar-default"
          >
            <ul className="transition-all ease-in duration-300 delay-100 font-semibold flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4"
                  aria-current="page"
                >
                  EN YENİLER
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded"
                >
                  YENİ SEZON
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded"
                >
                  İNDİRİM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded"
                >
                  SON ŞANS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded"
                >
                  KOLEKSİYON
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded"
                >
                  OUTLET
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
