import React from "react";
import Image from "next/image";
import { base64SolidImage } from "../../utility/SolidImage";
import dynamic from "next/dynamic";
const FollowUs = dynamic(() => import("./FollowUs"), {
  ssr: false,
});

type Props = {};

const SosyalPlatform = (props: Props) => {
  return (
    <>
      <div className="w-full lg:w-5/6 mx-auto flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="w-full lg:w-3/5 block mx-auto">
          <Image
            src="/RRSS-WOMAN.webp"
            width={1440}
            height={813}
            alt="banner"
            sizes="75vw"
            priority={true}
            blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
              "blue"
            )}`}
          />
        </div>
        <div className="w-full lg:w-2/5 block mx-auto">
          <h3>BİZİ TAKİP EDİN</h3>
          <p>
            Sosyal ağlarımızda sizleri bekliyoruz. Her şey burada olur.
            kaçırmayın.
          </p>
          <FollowUs />
        </div>
      </div>
    </>
  );
};

export default SosyalPlatform;
