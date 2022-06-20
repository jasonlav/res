require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Res`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};