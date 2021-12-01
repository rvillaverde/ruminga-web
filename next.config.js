/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
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
