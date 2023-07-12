import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const FooterAccordion = dynamic(() => import("../accordion/FooterAccordion"), {
  ssr: false,
});

const FollowUs = dynamic(() => import("../misc/FollowUs"), {
  ssr: false,
});

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="my-5">
      <section className="footer_newsletter">
        <div className="block">
          <div className="w-full md:w-3/6 block mx-auto text-center my-5 md:my-10">
            <h3>E-BÜLTEN</h3>
            <p>
              Bültenimize abone olun ve bir sonraki satın alımınızda %15 indirim
              kazanın. İndirimlerin ve özel haberlerin keyfini çıkarın.
            </p>
            <div className="w-2/3 block mx-auto">
              <input
                type="email"
                className="form-input mx-auto tracking-wide font-light antialiased focus:ring-black focus:border-stone-500 block w-full  p-2.5"
                name="email"
                placeholder="E-posta adresinizi buraya girin"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="footer_links flex flex-col md:flex-row gap-1 justify-between">
        <FooterAccordion />

        <FollowUs />
      </section>
    </footer>
  );
};

export default Footer;
