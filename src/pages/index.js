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
        <p>
          Every organization needs a content program that disciplined, efficient
          and process based.
        </p>
        <p>
          For a monthly retainer of $2500, we help you develop and maintain a
          content cycle specifically designed to reach your target audience.{" "}
        </p>
        <p>
          The program is simple. Each month, in partnership with the client, one
          core pillar of the content cycle (contributed article, press release,
          or blog) will be delivered.{" "}
        </p>
        {/* <p>
          <strong>
            Unique, relevant, and impactful content is an important element of
            the marketing mix for high-tech B2B companies. It creates awareness,
            builds credibility, and helps differentiate the organization within
            the marketplace.
          </strong>{" "}
        </p>
        <p>
          I have been creating content for high-tech B2B companies since 2000.
          During that time, I have refined a content creation workflow program
          (“The Content Cycle”) to efficiently produce effective, useful content
          for my clients.{" "}
        </p>
        <p>
          Unfortunately, domain experts within the organization (CEO, CTO,
          developers) oftentimes are not able to commit to creating content.
        </p>
        <p>
          Alternatively, marketing teams may not have the technical expertise
          required to understand and communicate the content clearly to a wider
          audience (or they simply don’t have the time to create the content
          themselves).
        </p>
        <p>
          Let’s partner together to bridge the content generation gap in your
          organization!
        </p> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
