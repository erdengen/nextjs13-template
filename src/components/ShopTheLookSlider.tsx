import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { base64SolidImage } from "@/src/utility/SolidImage";

type Props = {};

const ShopTheLookSlider = (props: Props) => {
  const data = [
    {
      title: "Milan",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Hong Kong",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Prague",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Florence",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Venice",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Milan",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Hong Kong",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Prague",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Florence",
      image: "/LOOKS_ADW_08.png",
    },
    {
      title: "Venice",
      image: "/LOOKS_ADW_08.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        dots: false,
        arrows: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="">
        {data?.map((item, index) => (
          <div key={index} className="bg-transparent flex flex-col ">
            <div className="w-full block relative aspect-video ">
              <Image
                src={item.image}
                width={280}
                height={362}
                alt="banner"
                placeholder="blur"
                className="flex w-full    cursor-pointer"
                blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
                  "blue"
                )}`}
                priority={false}
              />
            </div>
            <h3 className="hidden">
              {index} {item.title}
            </h3>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ShopTheLookSlider;
