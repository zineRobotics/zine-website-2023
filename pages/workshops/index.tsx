import type { NextPage } from "next";
import Head from "next/head";
import {
  Workshops
} from "../../components/Workshops";
import { Footer, SecFooter } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { fetchRecruitmentEvents } from "../../apis/events";
import { IWorkshopProps } from "../../components/Workshops/workshops";
import { Timestamp } from "firebase/firestore";

const Home = ({ recruitmentEvents }: IWorkshopProps) => {
  return (
    <>
      <Head>
        <title>Zine | Workshops</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Workshops recruitmentEvents={recruitmentEvents} />
      <SecFooter />
    </>
  );
};

export async function getStaticProps() {
  const data = await fetchRecruitmentEvents()
  const recruitmentEvents = data.docs.map(d => ({ ...d.data(), timeDate: d.data().timeDate.toMillis() }))
  return {
    props: {
      recruitmentEvents
    },
    revalidate: 60 * 60
  }
}

export default Home;
