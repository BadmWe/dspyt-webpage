import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/big-data-svgrepo.svg" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fff"
          />
          <meta name="robots" content="all" />
          <meta
            name="google-adsense-account"
            content="ca-pub-2394818173100484"
          />
        </Head>
        <body className="bg-blue-100 text-green-950 antialiased dark:bg-cyan-950 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
