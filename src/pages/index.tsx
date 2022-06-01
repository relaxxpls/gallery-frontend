import Head from "next/head";

import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

import type { NextPage } from "next";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Gallery />
    <Footer />
  </>
);

export default Home;
