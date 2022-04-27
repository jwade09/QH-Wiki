import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EmailPage = (props) => {
    const image = getImage(props.data.contentfulEmailTemplate.templateExample)
    return (
        <div>
            <Header></Header>
            <section class="gradient-grey">
                <div class="wrapper flex">
                    <Nav></Nav>
                    <div class="content white well gutter email">
                        <h1>{documentToReactComponents(JSON.parse(props.data.contentfulEmailTemplate.header.raw))}</h1>
                        <p>{documentToReactComponents(JSON.parse(props.data.contentfulEmailTemplate.content.raw))}</p>
                        <div><GatsbyImage image={image} alt={props.data.contentfulEmailTemplate.templateExample.description} /></div>
                    </div>
                </div>
            </section>
            <Nav></Nav>

            <Footer></Footer>
        </div>
    )
}

export const query = graphql`
    query EmailQuery($id: String) {
        contentfulEmailTemplate(id: {eq: $id}) {
            id
            title
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
    }

`

export default EmailPage