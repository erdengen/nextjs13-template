import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { base64SolidImage } from "@/src/utility/SolidImage";

type Props = {};

const SlickSlider = (props: Props) => {
  const data = [
    {
      title: "Milan",
      image: "/3028562985439200140.jpg",
    },
    {
      title: "Hong Kong",
      image: "/3114720431689433092.jpg",
    },
    {
      title: "Prague",
      image: "/3069814657632960670.jpg",
    },
    {
      title: "Florence",
      image: "/3064710916286186465.jpg",
    },
    {
      title: "Milan",
      image: "/3028562985439200140.jpg",
    },
    {
      title: "Hong Kong",
      image: "/3114720431689433092.jpg",
    },
    {
      title: "Prague",
      image: "/3069814657632960670.jpg",
    },
    {
      title: "Florence",
      image: "/3064710916286186465.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
            <div className="w-full block relative aspect-video  b">
              <Image
                src={item.image}
                width={346}
                height={520}
                alt="banner"
                placeholder="blur"
                className="flex w-full cursor-pointer"
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

export default SlickSlider;
