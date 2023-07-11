import React, { useEffect, useState } from "react";
import AccordionLayout from "./AccordionLayout";
import { useWindowSize } from "usehooks-ts";

type Props = {};

const FooterAccordion = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { width, height } = useWindowSize();
  useEffect(() => {
    if (width > 481) {
      setActiveIndex(99);
      alert(5555);
    }
  }, []);
  const footerList = [
    {
      title: "Help",
      data: [
        { title: "FAQ" },
        { title: "Puchase process" },
        { title: "Return order" },
        { title: "Shops" },
        { title: "Contact" },
      ],
    },
    {
      title: "About Us",
      data: [
        { title: "FAQ" },
        { title: "Puchase process" },
        { title: "Return order" },
        { title: "Shops" },
        { title: "Contact" },
      ],
    },
    {
      title: "Legal",
      data: [
        { title: "FAQ" },
        { title: "Puchase process" },
        { title: "Return order" },
        { title: "Shops" },
        { title: "Contact" },
      ],
    },
  ];
  return (
    <>
      {footerList.map((x, i) => (
        <div
          key={i}
          className="flex flex-col w-full justify-start items-center"
        >
          <AccordionLayout
            title={x.title}
            index={i + 1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <ul className="text-xs font-thin">
              {x.data.map((data, ii) => (
                <li className="" key={ii}>
                  <a
                    className="inline-block py-1 leading-5"
                    href="https://adz.adolfodominguez.com"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionLayout>
        </div>
      ))}
    </>
  );
};

export default FooterAccordion;
