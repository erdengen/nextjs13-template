import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type Props = {};

const PlayerHome = (props: Props) => {
  return (
    <>
      <ReactPlayer
        url="/assets/video/Perspective-Web-Slider-1366x630px.mp4"
        autoPlay={true}
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="auto"
      />
    </>
  );
};

export default PlayerHome;
