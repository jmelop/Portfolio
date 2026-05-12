import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Software Engineer focused on developer tooling, open-source packages and scalable front-ends." />
        <meta property="og:title" content="Juan Melo · jmelop" />
        <meta property="og:description" content="Software Engineer focused on developer tooling, open-source packages and scalable front-ends." />
        <meta property="og:url" content="https://jmelop.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jmelop.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://jmelop.com/og-image.png" />
        <meta name="twitter:title" content="Juan Melo · jmelop" />
        <meta name="twitter:description" content="Software Engineer focused on developer tooling, open-source packages and scalable front-ends." />
        <meta name="author" content="Juan Melo" />
        <meta name="keywords" content="Juan Melo, jmelop, Juan Melo Perez, software engineer, front-end architect, developer tooling, Las Palmas, Venator UI, open source" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
