/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dspyt.com",
      },
    ],
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },

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
          "/2021/05/27/panel-data-econometrics-an-introduction-with-an-example-in-python",
        destination:
          "/panel-data-econometrics-an-introduction-with-an-example-in-python",
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
      {
        source: "/page/3",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/fedotovn19/page/3",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tabular-playground-overfitting-solvers-club",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-playground-solvers-club",
        destination: "/",
        permanent: true,
      },
      {
        source: "/honest_protocol_data_analytics",
        destination: "/data_analytics",
        permanent: true,
      },
      {
        source: "/blog/0",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/.Unlock",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/2021/06/22/moscow-city-hack-easy-recommending-system-in-flask",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const removeImports = require("next-remove-imports")();
module.exports = removeImports({ ...nextConfig });
