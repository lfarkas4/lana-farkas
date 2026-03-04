import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function HomePage({ isLoading }) {
  return (
    <>
      <Head>
        <title>Lana Farkas</title>
        <meta name="description" content="Lana Farkas portfolio" />
      </Head>
      {!isLoading && (
        <>
          <Hero />
          <Projects />
        </>
      )}
    </>
  );
}