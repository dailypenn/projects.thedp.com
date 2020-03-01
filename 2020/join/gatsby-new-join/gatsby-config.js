module.exports = {
  siteMetadata: {
    title: `Join The Daily Pennsylvanian, Inc.`,
    description: `The Daily Pennsylvanian is looking for new students to join our team! Check out our recruitment website to see all of the opportunities we have to offer!`,
    type: 'article',
    url: 'https://projects.thedp.com/2018/join',
    author: `@TheDP`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `https://snworksceo.imgix.net/dpn/ec790853-4028-4601-b716-108531b8baf7.sized-1000x1000.jpg`,  //This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
