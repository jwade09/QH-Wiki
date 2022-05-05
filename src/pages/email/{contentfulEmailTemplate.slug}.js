import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EmailPage = (props, key) => {

    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => {
                return <h1 className="test">{children}</h1>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                const site = node.data.uri
                return (
                    <>
                        {site.includes("local") ?
                            <Link to={site}>{children}</Link>
                            :
                            <a href={site} rel="noopener noreferrer" target="_blank">{children}</a>
                        }
                    </>
                )
            },
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const imageID = node.data.target.sys.id;
                const {
                    file: { url },
                    title
                } = props.data.contentfulEmailTemplate.content.references.find(({ contentful_id: id }) => id === imageID);
                return <img src={url} alt={title} />

            }
        }
    }




    const image = getImage(props.data.contentfulEmailTemplate.templateExample);
    return (
        <div>
            <Header></Header>
            <section class="gradient-grey">
                <div class="wrapper flex">
                    <nav class="well r gutter">
                        <div class="nav-section">
                            <p class="acc nav-active"><strong>Email templates</strong></p>
                            {props.data.allContentfulEmailTemplate.nodes.map(node => (
                                <div class="nav-item"><Link key={node.slug} to={`/email/${node.slug}/`} activeClassName="active">{node.title}</Link></div>
                            ))}
                        </div>
                        <p><Link className="acc" to="/seo/seo-overview/"><strong>SEO</strong></Link></p>
                    </nav>
                    <div class="content white well gutter email">
                        <div class="flex justify-content">
                            <div class={image ? "grid-2" : ''}>
                                <h1>{documentToReactComponents(JSON.parse(props.data.contentfulEmailTemplate.header.raw))}</h1>
                                <div>{documentToReactComponents(JSON.parse(props.data.contentfulEmailTemplate.content.raw), options)}</div>
                            </div>
                            {image ? <div class="grid-2"><GatsbyImage image={image} alt={props.data.contentfulEmailTemplate.templateExample.description} /></div> : ''}
                        </div>

                        <div class="callout">
                            <h3>{props.data.contentfulEmailTemplate.contact.title}</h3>
                            {documentToReactComponents(JSON.parse(props.data.contentfulEmailTemplate.contact.content.raw))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}

export const query = graphql`
    query EmailQuery($id: String) {
                    contentfulEmailTemplate(id: { eq: $id }) {
                        id
                        title
                        slug
                        content{
                            raw
                            references {
                            ... on ContentfulAsset {
                                contentful_id
                                title
                                file {
                                    url
                                }
                            }
                            }
                        }
                        templateExample {
                            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                            description
                        }
                        header {
                            raw
                        }
                        contact {
                            content {
                                raw
                            }
                            title
                        }
                    }
                    allContentfulEmailTemplate(sort: { fields: order }) {
                        nodes {
                            title
                            slug
                        }
                    }
                }

                `
export default EmailPage