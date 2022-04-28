import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

const IndexPage = (props) => {

  return (
    <main>
      <Header></Header>
      <section class="gradient-grey">
        <div class="wrapper flex">
          <nav class="well r gutter">
            <div class="nav-section">
              <p><Link className="acc" to="/email/email-overview"><strong>Email templates</strong></Link></p>
            </div>
            <div class="nav-section">
              <p><Link className="acc" to="/seo/seo-overview"><strong>SEO</strong></Link></p>
            </div>
          </nav>
          <div class="content white well gutter">
            <h1>Welcome to the Quantum Health Wiki</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis lorem mauris, et pretium augue ornare sed. Nunc gravida, justo ac luctus mollis, nibh risus euismod elit, in tincidunt odio nibh sit amet ante.</p>
            <div class="flex">
              <Link></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </main>
  )
}

export default IndexPage
