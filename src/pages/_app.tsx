import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { executeMoliCommand } from "~/ads/refreshAdSlot";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow: boolean }
    ) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      executeMoliCommand((moli) => moli.requestAds())
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
      <Script src="https://highfivve.github.io/moli-ad-tag/assets/js/latest.js" />
      <Script src="/adConfiguration.js" />
      <Script id="h5v-request-ads">{`console.log("separate script tag");`}</Script>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
