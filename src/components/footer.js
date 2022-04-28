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
    </main>
  )
}

export default Footer