module.exports = {
  siteMetadata: {
    title: `QH Wiki`,
    siteUrl: `qhwiki.gatsbyjs.io`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "ifLQruTIoriR7UOQs2GXF08Uq56iJeKAFs-ed0PcbIk",
      "spaceId": "46km28huu8nf"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};