import { type NextPage } from "next";
import Head from "next/head";
import { AdSlotClientSide } from "~/components/AdSlotClientSide";
import { Card } from "~/components/Card";
import { Navbar } from "~/components/Navbar";
import { SkinLayout } from "~/components/SkinLayout";

const SkinPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Example Skin</title>
        <meta name="description" content="Client Die" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SkinLayout>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Skin Example
        </h1>
        <article className="flex min-w-full gap-4 md:gap-8">
          <Card title="ad slot 1">
            <AdSlotClientSide id="h5v_content_1" />
          </Card>
          <Card title="ad slot 2"></Card>
        </article>
      </SkinLayout>
    </>
  );
};

export default SkinPage;
