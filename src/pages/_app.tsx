import { type AppType } from "next/dist/shared/lib/utils";
import Script from "next/script";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
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
