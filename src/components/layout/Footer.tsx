import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" my-5 py-5">
      <div className="w-full flex items-center justify-center mb-5">Footer</div>
      <section className="footer_newsletter"></section>
      <section className="footer_links flex flex-row gap-1 justify-between items-center">
        {[...Array(3)].map((x, i) => (
          <article key={i} className="w-full">
            <button className="btn bg-transparent font-semibold text-base leading-5 py-3">
              Help
            </button>
            <ul className="text-xs font-thin">
              <li className="">
                <a
                  className="inline-block py-1 leading-5"
                  href="https://adz.adolfodominguez.com"
                >
                  Investors
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block py-1 leading-5"
                  href="https://www.adolfodominguez.com/en-eu/work-with-us.html"
                >
                  Work with us
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block py-1 leading-5"
                  href="https://www.adolfodominguez.com/en-eu/press-area"
                >
                  Press area
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block py-1 leading-5"
                  href="https://www.adolfodominguez.com/en-eu/ad-heritage.html"
                >
                  Our history
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block py-1 leading-5"
                  href="https://www.adolfodominguez.com/en-eu/adrunway.html"
                >
                  Runways
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block py-1 leading-5"
                  href="https://www.adolfodominguez.com/en-eu/campaigns.html"
                >
                  Campaign
                </a>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
