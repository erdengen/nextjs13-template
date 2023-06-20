import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #fff, #212121);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100%;
  width: 100%;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const DenemeDiv = styled.div.attrs({
  className:
    "flex flex-col h-screen justify-center items-center bg-gradient-to-r from-indigo-500 px-10",
})`
  color: #fff;
`;
export const ButtonStyle = styled.button.attrs({
  className:
    "flex items-center gap-5 text-xl border border-transparent w-full font-medium tracking-wide bg-sinematv-900 text-white hover:text-sinematv-500 hover:bg-white rounded-lg p-2",
})``;

const QuoteGeneratorElements = (props: Props) => {
  return <div>QuoteGeneratorElements</div>;
};

export default QuoteGeneratorElements;
