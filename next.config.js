require("dotenv").config();

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: "/stories",
      //   destination: "/",
      //   permanent: true,
      // },
      {
        source: "/stories/:storyId",
        destination: "/?storyId=:storyId",
        permanent: true,
      },
      {
        source: "/stories/:storyId/:index",
        destination: "/?storyId=:storyId&index=:index",
        permanent: true,
      },
    ];
  },
};
