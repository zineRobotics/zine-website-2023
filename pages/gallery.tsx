import type { NextPage } from "next";
import Head from "next/head";
import {
  Gallery,
  Carousal

} from "../components/Gallery";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const GalleryImages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Carousal />
      <Gallery />
      <SecFooter />
    </>
  );
};

export default GalleryImages;
