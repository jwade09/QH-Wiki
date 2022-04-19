const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
         {
        allContentfulEmailTemplate {
    nodes {
      content {
        raw
      }
      title
      slug
    }
  }
        allContentfulSeoEntry {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `)

    data.allContentfulEmailTemplate.nodes.forEach(node => {
        actions.createPage({
            path: '/email/' + node.slug,
            component: require.resolve('./src/templates/content.js'),
            context: { slug: node.slug, data: { node } },
            defer: true,

        })
    });

    data.allContentfulSeoEntry.edges.forEach(edge => {
        actions.createPage({
            path: '/seo/' + edge.node.slug,
            component: path.resolve('./src/templates/content.js'),
            context: { slug: edge.node.slug }
        })
    });

}