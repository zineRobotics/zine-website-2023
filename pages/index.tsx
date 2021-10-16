import type { NextPage } from "next";
import {
  // import files for homepage here.


} from "../components/Home";
import { Footer_Main } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-red-500 text-center text-4xl pt-20">Hello, this is the new project.</h1>
      <Footer_Main />
    </>
  );
};

export default Home;
