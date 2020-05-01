/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Material UI Kit - Complete set of Material UI Elements for Figma',
    description:
      'Design Material UI components faster using ready-made styles and assets. Customize everything with all elements and styles available for free.',
    author: 'CodersCrew',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Material UI Kit - Complete set of Material UI Elements for Figma',
        description:
          'Design Material UI components faster using ready-made styles and assets. Customize everything with all elements and styles available for free.',
        short_name: 'Material UI Kit',
        start_url: '/',
        background_color: '#2196F3',
        theme_color: '#2196F3',
        display: 'minimal-ui',
        icon: 'src/images/favicon-light.png',
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/translations`,
        languages: ['en', 'pl'],
        defaultLanguage: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto:300,400,500,700'],
        display: 'swap',
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
