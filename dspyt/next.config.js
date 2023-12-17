/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source:
          "/2021/06/29/simple-telegram-bot-in-python-hosted-easily-on-heroku/",
        destination: "/simple-telegram-bot-in-python-hosted-easily-on-heroku",
        permanent: true,
      },
      {
        source: "/2021/07/11/easy-proxy-scraper-and-proxy-usage-in-python/",
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
      {
        source: "/page/3/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/fedotovn19/page/3/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tabular-playground-overfitting-solvers-club/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-playground-solvers-club/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/honest_protocol_data_analytics/",
        destination: "/data_analytics/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
