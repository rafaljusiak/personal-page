/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rafał Jusiak",
    siteUrl: "https://rafaljusiak.pl",
    description: "Web Developer and Software Engineer.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
};
