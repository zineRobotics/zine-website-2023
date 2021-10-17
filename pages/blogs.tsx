import type { NextPage } from "next";
import {
  Blogs,

} from "../components/Blogs";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
