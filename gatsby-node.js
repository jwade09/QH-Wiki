// const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {

//     const { data } = await graphql(`
// {
//     allContentfulEmailTemplate {
//         nodes {
//             title
//             slug
//             content {
//                 raw
//                 references {
//                     id
//                     videoIFrame {
//                         videoIFrame
//                     }
//                 }
//             }
//         }
//     }
//     allContentfulSeoEntry {
//         nodes {
//             content {
//                 raw
//             }
//             title
//             slug
//         }
//     }
// }
//     `)

//     data.allContentfulEmailTemplate.nodes.forEach(node => {
//         actions.createPage({
//             path: '/email/' + node.slug,
//             component: require.resolve('./src/templates/content.js'),
//             context: { slug: node.slug, data: { node } },
//             defer: true,

//         })
//     });

//     data.allContentfulSeoEntry.nodes.forEach(node => {
//         actions.createPage({
//             path: '/seo/' + node.slug,
//             component: require.resolve('./src/templates/content.js'),
//             context: { slug: node.slug, data: { node } },
//             defer: true,
//         })
//     });

// }