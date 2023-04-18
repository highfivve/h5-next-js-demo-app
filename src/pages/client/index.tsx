import { type NextPage } from "next";
import Head from "next/head";
import { AdSlotClientSide } from "~/components/AdSlotClientSide";
import { Card } from "~/components/Card";
import { Navbar } from "~/components/Navbar";

const Client: NextPage = () => {
  return (
    <>
      <Head>
        <title>Client Side</title>
        <meta name="description" content="Client Die" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center bg-blue-h5">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            ClientSide
          </h1>
          <div className="flex min-w-full gap-4 md:gap-8">
            <Card title="ad slot 1">
              <AdSlotClientSide id="h5v_content_1" />
            </Card>
            <Card title="ad slot 2"></Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Client;
