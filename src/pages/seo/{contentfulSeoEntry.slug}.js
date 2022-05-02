import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SeoPage = (props) => {


    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p>{children}</p>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return <a href={node.data.uri}>{children}</a>
            },
        }
    }




    const image = getImage(props.data.contentfulSeoEntry.templateExample)
    return (
        <div>
            <Header></Header>
            <section class="gradient-grey">
                <div class="wrapper flex">
                    <nav class="well r gutter">
                        <div class="nav-section">
                            <p><Link className="acc" to="/email/email-overview/"><strong>Email templates</strong></Link></p>
                        </div>
                        <p class="acc nav-active"><strong>SEO</strong></p>
                        {props.data.allContentfulSeoEntry.nodes.map(node => (
                            <div class="nav-item"><Link key={node.slug} to={`/seo/${node.slug}/`} activeClassName="active">{node.title}</Link></div>
                        ))}
                    </nav>
                    <div class="content white well gutter seo flex justify-content">
                        <div class={image ? "grid-2" : ''}>
                            <h1>{documentToReactComponents(JSON.parse(props.data.contentfulSeoEntry.header.raw))}</h1>
                            <div>{documentToReactComponents(JSON.parse(props.data.contentfulSeoEntry.content.raw), RICHTEXT_OPTIONS)}</div>
                        </div>
                        {image ? <div class="grid-2"><GatsbyImage image={image} alt={props.data.contentfulSeoEntry.templateExample.description} /></div> : ''}

                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}

export const query = graphql`
    query SEOQuery($id: String) {
        contentfulSeoEntry(id: {eq: $id}) {
            id
            title
            slug
            content{
                raw
            }
            templateExample {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                description
            }
            header {
                raw
            }
        }
        allContentfulSeoEntry (sort: {fields: order}) {
          nodes {
            title
            slug
          }
        }
    }

`

export default SeoPage