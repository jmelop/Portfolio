import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Software Engineer focused on front-end architecture, open-source packages and developer tooling." />
        <meta property="og:title" content="Juan Melo · jmelop" />
        <meta property="og:description" content="Software Engineer focused on front-end architecture, open-source packages and developer tooling." />
        <meta property="og:url" content="https://jmelop.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Juan Melo · jmelop" />
        <meta name="twitter:description" content="Software Engineer focused on front-end architecture, open-source packages and developer tooling." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
