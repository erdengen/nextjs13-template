import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";
import Layout from "../components/layout/Layout";
import Head from "next/head";

import Link from "next/link";
import { base64SolidImage } from "../utility/SolidImage";
import PlayerHome from "../components/PlayerHome";
import SlickSlider from "../components/SlickSlider";
import ShopTheLookSlider from "../components/ShopTheLookSlider";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pappins",
});
export const metadata = {
  title: {
    default: "E-Commerce Web App",
    template: "%s | Acme",
  },
  description: "Generated by create next app",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  colorScheme: "dark",
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Seb", "Josh"],
  },
};
export default function Home() {
  return (
    <Layout title="">
      <Head>
        <title>Perspective</title>
        <meta name="description" content="deneeme desription" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page ">
        <div className="mx-auto w-full px-2 lg:px-10">
          <div className="block">
            <Link className="block" href={"/category/yeni-sezon"}>
              <Image
                src="/VENTAS_EFIMERAS-V2_ADW_D_EN.jpg"
                width={1855}
                height={796}
                alt="banner"
                priority={true}
                blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
                  "blue"
                )}`}
              />
            </Link>
          </div>
          <div className="block my-5 md:mx-16 ">
            <SlickSlider />
          </div>
        </div>

        <div className="block">
          <PlayerHome />
        </div>
        <div className="block my-5 ">
          <div className="mx-auto w-full px-2 lg:px-10">
            <div className="block my-5">
              <h3 className={`${poppins.className} w-full block mx-auto`}>
                SHOP THE LOOK
                <p className="font-normal text-sm">Your style, our style</p>
              </h3>
            </div>
          </div>
          <ShopTheLookSlider />
        </div>
        <div className="mx-auto w-full px-2 lg:px-10 my-16 items-center justify-center">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <div className="w-full block mx-auto">
              <Image
                src="/RRSS-WOMAN.webp"
                width={863}
                height={370}
                alt="banner"
                sizes="75vw"
                priority={true}
                blurDataURL={`data:image/svg+xml;base64,${base64SolidImage(
                  "blue"
                )}`}
              />
            </div>
            <div className="w-full block mx-auto">
              <h3>FOLLOW US</h3>
              <p>
                We are waiting for you on our social networks. <br />
                Everything happens here. Dont miss it.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
