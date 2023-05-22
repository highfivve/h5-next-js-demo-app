import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                forward: ["moli.que.push", "dataLayer.push"],
                resolveUrl: function (url, location, type) {
                  // because our ad tag loads gpt, apstag, confiant and other scripts lazily, those all need to be proxied if
                  // CORS heads are messed up from within the webworker: https://partytown.builder.io/proxying-requests
                  if (type === 'script' && url.href === 'https://securepubads.g.doubleclick.net/tag/js/gpt.js') {
                    return new URL('http://localhost:3000/gpt/gpt.js');
                  }
                  if (type === 'script' && url.href === 'https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202305180101/pubads_impl.js') {
                    return new URL('http://localhost:3000/gpt/m202305180101/pubads_impl.js');
                  }
                  return url;
                },
                debug: true
              };
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
