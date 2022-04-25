import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {

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
    <main>
      <Header></Header>
      <h1>Hello world!</h1>
      <p>Email templates</p>
      {allContentfulEmailTemplate.nodes.map(node => (
        <div><Link key={node.slug} to={`/email/${node.slug}`}>{node.title}</Link><br /></div>
      ))}
      <p>SEO</p>
      {allContentfulSeoEntry.nodes.map(node => (
        <div><Link key={node.slug} to={`/seo/${node.slug}`}>{node.title}</Link><br /></div>
      ))}
      <Footer></Footer>
    </main>
  )
}

export default IndexPage
