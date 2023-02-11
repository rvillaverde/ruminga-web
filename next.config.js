// require("dotenv").config();

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  // env: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  //   NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  // },
  // publicRuntimeConfig: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  //   NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  // },
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
