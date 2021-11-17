/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "es"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
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
