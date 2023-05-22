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

  // initial request ads call - FIXME this is also present in ad adConfiguration.js
  // useEffect(() => {
  //   executeMoliCommand((moli) => moli.requestAds());
  // });

  return (
    <>
      {/* partytown generates the forwarder window.moli.que */}
      <Script id="data-layer-test">{`
        window.dataLayer.push(param => console.log('hello', param))`}</Script>
      <Script
        src="https://highfivve.github.io/moli-ad-tag/assets/js/latest.js"
        strategy="worker"
      />
      <Script src="/adConfiguration.js" strategy="worker" />
      <Script id="h5v-request-ads">{`console.log("separate script tag");`}</Script>
      <Script src="/partyDemo.js" strategy="worker" />
      <Component {...pageProps} />
      <MobileStickyAd id="h5v_mobile_sticky" />
    </>
  );
};

export default MyApp;
