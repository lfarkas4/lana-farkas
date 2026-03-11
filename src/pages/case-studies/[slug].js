import Head from "next/head";
import { useRouter } from "next/router";

export default function CaseStudyPage() {
  const { query } = useRouter();
  const { slug } = query;

  if (!slug) return null;

  return (
    <>
      <Head>
        <title>{slug} | Lana Farkas</title>
      </Head>
      <main style={{ padding: 32 }}>
        <h1>Case study: {slug}</h1>
        <p>Route works. Next step: wire the real case study content.</p>
      </main>
    </>
  );
}
