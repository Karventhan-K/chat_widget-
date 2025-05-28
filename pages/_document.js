import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <Script
          src="https://chat-widget-taupe.vercel.app/widget/widget.js"
          strategy="afterInteractive" // Ensures it's only loaded on client-side
        /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
