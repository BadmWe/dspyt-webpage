import "@/styles/globals.css";
import "@/styles/prism.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import siteMetadata from "@/components/siteMetadata";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
      />

      <Script id="gtm-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA}');
    `}
      </Script>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default MyApp;
