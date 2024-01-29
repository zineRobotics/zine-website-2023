import Head from "next/head";
import { GetServerSidePropsContext, NextPage } from "next";
import {
  Footer,
  SecFooter,
} from "../components/Footer";
import { Navbar } from "../components/Navbar";
import AptitudeForm from "../components/Workshops/aptitudeForm";

// TODO: Remove this file
const Home = () => {
  return (
    <>
      <Head>
        <title>Zine | Form</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Navbar />
      <AptitudeForm />
      <SecFooter />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Perform the redirect
  context.res.writeHead(302, { Location: '/workshops/registration' });
  context.res.end();

  // Return an empty object to prevent rendering the page
  return { props: {} };
}

export default Home;
