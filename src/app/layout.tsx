import { Navbar } from "~/components/Navbar";
import "../styles/globals.css";
import Script from "next/script";
export const metadata = {
  title: "highfivve portal",
  description: "Publisher portal for highfivve publishers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://highfivve.github.io/moli-ad-tag/assets/js/latest.js" />
        <Script src="/adConfiguration.js" />
      </head>
      <body>
        <Navbar />

        <div className="p-3">{children}</div>
      </body>
    </html>
  );
}
