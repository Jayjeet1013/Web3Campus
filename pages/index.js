import Head from "next/head";

import Contributers from "../components/home/Contributers";

import Header from "../components/home/Header";
import JoinUs from "../components/home/JoinUs";
import Projects from "../components/home/Projects";
import Quotes from "../components/home/Quotes";
import Technology from "../components/home/Technology";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web3Campus | Best platform to learn WEB3</title>
        <meta name="description" content="Best platform to learn WEB3 | LEARN.BUILD.EARN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Projects/>
      <Technology/>
  
      <Quotes/>
      <Contributers />
      <JoinUs />
    </div>
  );
}
