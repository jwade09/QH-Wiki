import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// markup
const IndexPage = () => {

  const { allContentfulEmailTemplate } = useStaticQuery(
    graphql`
    {
        allContentfulEmailTemplate {
    nodes {
      title
      slug
    }
  }
}
  `)

  return (
    <main>
      <h1>Hello world!</h1>
      {allContentfulEmailTemplate.nodes.map(node => (
        <Link key={node.slug} to={`/email/${node.slug}`}>{node.title}</Link>
      ))}
      <p></p>
    </main>
  )
}

export default IndexPage
