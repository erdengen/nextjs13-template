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
    dots: false,
    infinite: true,
    arrows: true,
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
        dots: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div key={index} className="relative">
            <div className="w-full block">
              <Image
                src={item.image}
                width={389}
                height={585}
                alt="banner"
                placeholder="blur"
                className="object-cover cursor-pointer w-full"
                blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
                  "blue"
                )}`}
                priority={false}
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SlickSlider;
