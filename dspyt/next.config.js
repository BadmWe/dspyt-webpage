/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});

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
    ];
  },
};
