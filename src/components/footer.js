import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Footer = () => {

  const data = useStaticQuery(graphql`
     {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <title>{data.site.siteMetadata.title}</title>
      <h1>Footer test</h1>
    </main>
  )
}

export default Footer