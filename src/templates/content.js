import * as React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";





const EmailContent = ({ pageContext }) => {
    const { data: { node } } = pageContext;
    const body = JSON.parse(node.content.raw);
    return (
        <main>
            <h1>{node.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(body) }}></div>
        </main>
    )
}

export default EmailContent
