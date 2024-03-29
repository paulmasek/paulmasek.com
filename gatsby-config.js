require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Paul Masek - Contract Front-End Web Developer London, UK`,
    description: `I’m a London-based contract front-end web developer with over 10 years’ commercial experience working on high quality website & webapp builds.`,
    author: `@paulmasek`,
  },
  plugins: [
    'gatsby-plugin-image',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/icons`,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `paul-masek`,
        start_url: `/`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify',
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['URL'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: process.env.ANALYTICS_ID,
        trackingIds: [process.env.ANALYTICS_ID],
      },
    },
  ],
};
