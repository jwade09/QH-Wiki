import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Header = () => {

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
            <h1>Header</h1>
        </main>
    )
}

export default Header