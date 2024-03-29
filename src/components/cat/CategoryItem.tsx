import React from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { base64SolidImage } from "@/src/utility/SolidImage";

type Props = {
  item: { id: number | undefined; img: string };
};
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #000;
    transform: scale(1.1);
  }
`;
const CategoryItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 group">
      <Container className="block h-auto w-full">
        <div className="bg-transparent flex items-center justify-center w-full z-20 border  overflow-hidden">
          <Image
            src={item.img}
            width={870}
            height={1300}
            alt="banner"
            placeholder="blur"
            className="w-full block rounded transform duration-500 ease-in-out object-cover group-hover:scale-105 cursor-pointer"
            blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
              "blue"
            )}`}
            priority={true}
          />
        </div>

        <Info className="z-30">
          <Icon>
            <ShoppingCartIcon className="w-5 h-5" />
          </Icon>
          <Icon>
            <Link
              href="/product/beyaz-heino-elbise-3079_23023079-301-26"
              className="block"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </Link>
          </Icon>
          <Icon>
            <HeartIcon className="w-5 h-5" />
          </Icon>
        </Info>
      </Container>
      <div className=" flex flex-col w-full gap-2 px-2">
        <div>Delias Regular Fit Kruvaze İndigo Renk Pareo</div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full ">
          <div className="PriceArea w-full flex justify-between lg:justify-start items-center gap-0 lg:gap-2 text-xs">
            <span className="flex PPrice PPOldPrice text-[#5F0202] line-through text-[.610rem] font-semibold">
              3.499,00 ₺
            </span>
            <span className="flex PPrice font-bold">2.799,00 ₺</span>
            <div className="flex">
              <div className="badge badge-right-bottom">
                <div className="ImgAndDiscountBadge">
                  <span className="discount text-white bg-black py-1 px-2 text-[.610rem]">
                    %20
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end gap-2">
            <div className="border-transparent hover:border-black border-b py-1">
              <span className="block w-4 h-4 rounded-full bg-red-400"></span>
            </div>
            <div className="border-transparent hover:border-black border-b py-1">
              <span className="block w-4 h-4 rounded-full bg-yellow-400"></span>
            </div>
            <div className="border-transparent hover:border-black border-b py-1">
              <span className="block w-4 h-4 rounded-full bg-black"></span>
            </div>
            <div className="border-transparent hover:border-black border-b py-1">
              <span className="block w-4 h-4 rounded-full bg-purple-400"></span>
            </div>
            <div className="border-transparent hover:border-black border-b py-1">
              <span className="block w-4 h-4 rounded-full bg-orange-400"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-full h-5">
          <span className="PQuantity text-gray-700 text-[.590rem] lg:text-xs ">
            Tükeniyor
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
