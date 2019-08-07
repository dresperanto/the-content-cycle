import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="animated fadeIn fullBody" style={{ marginBottom: "100px" }}>
      <Hero />
      <div className="homeContent">
        <p>
          <strong>
            Unique, relevant, and impactful content is an important element of
            the marketing mix for high-tech B2B companies. It creates awareness,
            builds credibility, and helps differentiate the organization within
            the marketplace.
          </strong>{" "}
        </p>
        <p>
          Unfortunately, domain experts within the organization (CEO, CTO,
          developers) oftentimes do not have the time to commit to creating
          content.
        </p>
        <p>
          Alternatively, marketing teams may not have the technical expertise
          required to understand and uplevel the content for clarity to a wider
          audience (or they simply don’t have the time to create the content
          themselves).
        </p>
        <p>
          I have been creating content for high-tech B2B companies since 2000.
          During that time, I have refined a content creation workflow program
          (“The Content Cycle”) to efficiently produce unique, relevant, and
          impactful content.{" "}
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
