/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({ nextConfig });

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source:
          "/2021/06/29/simple-telegram-bot-in-python-hosted-easily-on-heroku",
        destination: "/simple-telegram-bot-in-python-hosted-easily-on-heroku",
        permanent: true,
      },
      {
        source: "/2021/07/11/easy-proxy-scraper-and-proxy-usage-in-python",
        destination: "/easy-proxy-scraper-and-proxy-usage-in-python",
        permanent: true,
      },
      {
        source:
          "/2021/05/27/panel-data-econometrics-an-introduction-with-an-example-in-python/",
        destination:
          "/panel-data-econometrics-an-introduction-with-an-example-in-python/",
        permanent: true,
      },
      {
        source: "/2021/06/06/time-series-data-an-easy-introduction",
        destination: "/time-series-data-an-easy-introduction",
        permanent: true,
      },
      {
        source: "/simple-image-classification-with-efficientnet",
        destination: "/efficientnet-classification",
        permanent: true,
      },
    ];
  },
};
