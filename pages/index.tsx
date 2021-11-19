import type { NextPage } from "next";
import {
  Video,
  ZineActivities,
  LandingPage,
  ZineText

} from "../components/Home";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-body-bg">
      <Navbar />
      <Video />
      <LandingPage />
      <ZineText />
      <ZineActivities />
      <Footer />
    </div>
  );
};

export default Home;
