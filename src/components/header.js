import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./styles/styles.scss"
import "./styles/header.scss"
import "./styles/nav.scss"
import "./styles/content.scss"
import logo from "../images/qh-logo.svg"

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
    <section>
      <title>{data.site.siteMetadata.title}</title>
      <header class="white">
        <div class="wrapper gutter-sm">
          <div class="h-logo">
            <Link to="/" className="flex align-center">
              <div class="logo">
                <img src={logo} />
              </div>
              <div class="slash">/</div>
              <div class="wiki">WIKI</div>
            </Link>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header