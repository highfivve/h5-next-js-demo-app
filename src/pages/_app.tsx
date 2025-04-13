import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { executeMoliCommand } from "~/ads/refreshAdSlot";
import { MobileStickyAd } from "~/components/MobileStickyAd";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow: boolean }
    ) => {
      executeMoliCommand((moli) => moli.requestAds());
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Script id="moli-ad-tag" src="https://cdn.h5v.eu/adtag/v5.3.4/all.mjs" data-publisher-code="local" data-endpoint="localhost:3000/api" />
      <Script id="h5v-request-ads">{`console.log("separate script tag");`}</Script>
      <Component {...pageProps} />
      <MobileStickyAd id="h5v_mobile_sticky" />
    </>
  );
};

export default MyApp;
