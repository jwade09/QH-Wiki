import * as React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Header from "../components/header";
import Footer from "../components/footer";





const Content = ({ pageContext }) => {


    const { data: { node } } = pageContext;
    const body = JSON.parse(node.content.raw);
    return (
        <main>
            <Header></Header>
            <h1>{node.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(body) }}></div>
            <Footer></Footer>
        </main>
    )
}

export default Content
