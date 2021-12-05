module.exports = {
  siteMetadata: {
    title: `Overlayed`,
    description: `A Discord overlay that just works™`,
    longDescription: `With Overlayed you can view who is talking in your voice channel`,
    author: `Hacksore`,
    image: `header.png`,
    siteUrl: `https://overlayed.dev`,
    twitterUsername: "@OverlayedDev",
  },
  proxy: [
    {
      prefix: "/api",
      url: "http://localhost:5000",
    },
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5A65EA`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-63SKWNFF03",
        head: false,
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "overlayed.dev",
      },
    },
  ],
};
