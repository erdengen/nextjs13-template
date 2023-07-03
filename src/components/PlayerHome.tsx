import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type Props = {};

const PlayerHome = (props: Props) => {
  return (
    <>
      <ReactPlayer
        url="https://download-video.akamaized.net/2/playback/8c3a898e-929b-4c1e-9369-611f418d0814/155072a8-2c8326f6?__token__=st=1688374622~exp=1688389022~acl=%2F2%2Fplayback%2F8c3a898e-929b-4c1e-9369-611f418d0814%2F155072a8-2c8326f6%2A~hmac=c87c35ddaf462e5636ab461e6b266f3fd480b1892fc7d7c67cacd849ac2067e6&r=dXMtd2VzdDE%3D"
        autoPlay={true}
        playing={true}
        muted={true}
        width="100%"
        height="auto"
      />
    </>
  );
};

export default PlayerHome;
