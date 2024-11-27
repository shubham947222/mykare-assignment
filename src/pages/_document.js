import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/icons/logo.png" />
      <link rel="preload" href="/path-to-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
