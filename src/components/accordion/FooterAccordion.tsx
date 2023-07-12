import React, { useEffect, useState } from "react";
import AccordionLayout from "./AccordionLayout";
import { useWindowSize } from "usehooks-ts";

type Props = {};

const FooterAccordion = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { width, height } = useWindowSize();
  useEffect(() => {
    if (width >= 481) {
      setActiveIndex(99);
      console.log(5555);
    }
  }, [width]);
  const footerList = [
    {
      title: "PERSPECTİVE",
      data: [
        { title: "Hakkımızda" },
        { title: "İletişim" },
        { title: "Mağazalar" },
        { title: "Sıkça Sorulan Sorular" },
        { title: "Kariyer" },
        { title: "Ödeme ve Teslimat" },
        { title: "Gizlilik ve Güvenlik" },
        { title: "İade Şartları" },
        { title: "KVKK Aydınlatma Metni" },
        { title: "Havale / EFT Bilgileri" },
      ],
    },
    {
      title: "HIZLI ERİŞİM",
      data: [
        { title: "Anasayfa" },
        { title: "Tüm Ürünler" },
        { title: "Sepetim" },
        { title: "Sipariş Takibi" },
        { title: "Bu Perspective Benim" },
        { title: "Avantajlar" },
      ],
    },
    {
      title: "ÖZEL KATEGORİLER",
      data: [
        { title: "Özel Fiyatlı Ürünler" },
        { title: "Yeni Ürünler" },
        { title: "Büyük Beden" },
        { title: "Full Look" },
        { title: "Ev Giyimi" },
        { title: "Günlük Elbise" },
        { title: "Ofis Sitili" },
        { title: "Yaz Kombinleri" },
        { title: "Tek Kalanlar" },
        { title: "İndirimli Ürünler" },
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
