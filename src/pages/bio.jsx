import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Grid, Responsive, Segment } from "semantic-ui-react"
import "./about.css"

const about = () => {
  return (
    <Layout>
      <SEO title="Bio" />
      <div
        className="mainContent animated fadeIn"
        style={{ marginBottom: "40px" }}
      >
        <Grid stackable className="nonMobile">
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Segment raised style={{ backgroundColor: "#f5f5f5" }}>
                <div className="circleRay"></div>

                <h2>Ray George</h2>
                <p style={{ fontSize: "1.2rem" }}>
                  Ray George has been working in a PR capacity with B2B
                  technology startups, enterprises and foundations since 2000.
                  Clients have included a number successful organizations
                  including Ansible, Cloudera, Hyperledger, Itential, The Linux
                  Foundation, MuleSoft, Nimble Storage, OpenStack, and Puppet.
                  Over the past 19 years, Ray has partnered with clients to
                  write a myriad of contributed articles, blog posts, and press
                  releases (see examples <Link to="/examples">here</Link>).
                  During that time, Ray has streamlined “The Content Cycle” - a
                  content creation workflow program that delivers unique,
                  relevant, and impactful content.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Responsive as={Segment} {...Responsive.onlyMobile}>
          <div className="circleRayMobile"></div>

          <h2>Ray George</h2>
          <p className="textMobile">
            Ray George has been working in a PR capacity with B2B technology
            startups, enterprises and foundations since 2000. Clients have
            included a number successful organizations including:
          </p>
          <ul className="textMobile ui">
            <li>Ansible</li>
            <li>Cloudera</li>
            <li>Hyperledger</li>
            <li>Itential</li>
            <li>The Linux Foundation</li>
            <li>MuleSoft</li>
            <li>Nimble Storage</li>
            <li>OpenStack</li>
            <li>Puppet</li>
          </ul>
          <p className="textMobile ui">
            Over the past 19 years, Ray has partnered with clients to write a
            myriad of contributed articles, blog posts, and press releases (see
            examples <Link to="/examples">here</Link>). During that time, Ray
            has streamlined “The Content Cycle” - a content creation workflow
            program that delivers unique, relevant, and impactful content.
          </p>
        </Responsive>
      </div>
    </Layout>
  )
}

export default about
