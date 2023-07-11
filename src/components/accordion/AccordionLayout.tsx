import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  title: String;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: any;
};

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: Props) => {
  const handleSetIndex = (index: number) =>
    activeIndex !== index && setActiveIndex(index);
  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex w-full justify-between mb-5"
      >
        <div className="flex">
          <div
            className={`${
              activeIndex === index ? "font-bold" : "font-semibold"
            }`}
          >
            {title} {activeIndex}
          </div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index || activeIndex === 99 ? (
            <ChevronDownIcon
              className={`${
                activeIndex === 99 ? "hidden" : "w-5 h-5 font-bold"
              }`}
            />
          ) : (
            <ChevronUpIcon className="w-5 h-5" />
          )}
        </div>
      </div>
      {activeIndex === index ||
        (activeIndex === 99 && (
          <div className="w-full shadow-3xl rounded-2xl shadow-cyan-500/50  mb-6">
            {children}
          </div>
        ))}
    </>
  );
};

export default AccordionLayout;
