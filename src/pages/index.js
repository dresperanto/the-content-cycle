import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="animated fadeIn" style={{ marginBottom: "60px" }}>
      <Hero />
      <div className="homeContent">
        <ul>
          <li>
            A content program that is disciplined, efficient and process based.
          </li>
          <li>
            A content cycle specifically designed to reach your target audience.
          </li>
          <li>An affordable plan starting at $2500 per month.</li>
        </ul>
        {/* <p>
          A content program that is disciplined, efficient and process based.
        </p>
        <p>
          A content cycle specifically designed to reach your target audience.
        </p>
        <p>An affordable plan starting at $2500 per month.</p> */}

        {/* <p>
          Every organization needs a content program that is disciplined,
          efficient and process based.
        </p>
        <p>
          For a monthly retainer of $2500, we help you develop and maintain a
          content cycle specifically designed to reach your target audience.{" "}
        </p>
        <p>
          The program is simple. Each month, in partnership with the client, one
          core pillar of the content cycle (contributed article, press release,
          or blog) will be delivered.{" "}
        </p> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
