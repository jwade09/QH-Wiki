import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EmailPage = (props) => {
    console.log(props);
    const image = getImage(props.data.contentfulEmailTemplate.templateExample)
    return (
        <div>
            <Header></Header>
            <h1>{props.data.contentfulEmailTemplate.title}</h1>
            <p>{documentToReactComponents(JSON.parse(props.data.contentfulEmailTemplate.content.raw))}</p>
            <div><GatsbyImage image={image} alt={props.data.contentfulEmailTemplate.templateExample.description} /></div>
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
        }
    }

`

export default EmailPage