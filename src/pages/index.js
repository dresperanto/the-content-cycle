import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="animated fadeIn">
      <Hero />
      <div className="homeContent">
        <h3>
          <strong>
            Unique, relevant, and impactful content is an important element of
            the marketing mix for high-tech B2B companies. It creates awareness,
            builds credibility, and helps differentiate the organization within
            the marketplace.
          </strong>{" "}
        </h3>
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
      </div>
    </div>
  </Layout>
)

export default IndexPage
