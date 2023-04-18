import Head from "next/head";
import { type PropsWithChildren, useEffect } from "react";
import { executeMoliCommand } from "~/ads/refreshAdSlot";
/**
 * This component demonstrates how to render ad slots together.
 *
 * The layout defines the ad slots and renders the children.
 * Note that the styling of the sidebars is not ideal as the alter the inner layout.
 *
 * @param props with children
 * @returns
 */
export const SkinLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // refresh all ad slots together
  useEffect(() => {
    executeMoliCommand((moli) =>
      moli.refreshAdSlot([
        "h5v_sidebar_1",
        "h5v_header",
        "h5v_sidebar_left",
        "h5v_wallpaper_pixel",
      ])
    );
  });

  return (
    <>
      <Head>
        <title>Example Skin</title>
        <meta name="description" content="Client Die" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center bg-blue-h5">
        <div className="container flex flex-row items-start justify-center gap-12 px-4 py-16">
          <div
            id="h5v_sidebar_left"
            className="h-[600px]max-w-[300px] bg-white/10"
          ></div>
          <div className="w-full">
            <div className="mb-4 min-h-[90px] bg-white/10 text-center">
              <div id="h5v_header"></div>
            </div>
            <div className="bg-white/5">{children}</div>
          </div>
          <div
            id="h5v_sidebar_1"
            className="h-[600px] max-w-[300px] bg-white/10"
          ></div>
        </div>
        <div className="hidden" id="h5v_wallpaper_pixel"></div>
      </main>
    </>
  );
};
