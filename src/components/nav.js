import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Nav = () => {

  const { allContentfulEmailTemplate, allContentfulSeoEntry } = useStaticQuery(
    graphql`
    {
        allContentfulEmailTemplate {
          nodes {
            title
            slug
          }
        }
        allContentfulSeoEntry {
          nodes {
            title
            slug
          }
        }
    }
  `)

  return (
    <nav class="well r gutter">
      <div class="nav-block">
        <p>Email templates</p>
        {allContentfulEmailTemplate.nodes.map(node => (
          <div class="nav-item"><Link key={node.slug} to={`/email/${node.slug}`}>{node.title}</Link></div>
        ))}
      </div>
      <div class="nav-block">
        <p>SEO</p>
        {allContentfulSeoEntry.nodes.map(node => (
          <div class="nav-item"><Link key={node.slug} to={`/seo/${node.slug}`}>{node.title}</Link></div>
        ))}
      </div>
    </nav>
  )
}

export default Nav