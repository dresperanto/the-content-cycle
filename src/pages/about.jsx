import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "./about.css"
import Headshot from "../images/ray_twitter.jpg"
import SEO from "../components/seo"
import { Grid, Image, Segment } from "semantic-ui-react"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className=" mainContent" style={{ marginBottom: "40px" }}>
        <Grid stackable>
          <Grid.Row columns={1}>
            {/* <Grid.Column width={1}></Grid.Column> */}
            <Grid.Column width={16}>
              <Segment raised style={{ backgroundColor: "#f5f5f5" }}>
                <div className="circle animated rotateIn"></div>
                <h2>The Content Cycle</h2>
                <div className="cycleText">
                  <h2>• Kick-off interviews & research</h2>
                  <h2>• Topic generation & alignment</h2>
                  <h2>• Topic specific interviews and questionnaire</h2>
                  <h2>• Initial content draft</h2>
                  <h2>• Collaborative editing cycles & approval</h2>
                  <h2>• Article submission services</h2>
                </div>
              </Segment>
            </Grid.Column>
            {/* <Grid.Column width={1}></Grid.Column> */}
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Segment raised style={{ backgroundColor: "#f5f5f5" }}>
                <div className="circleRay animated rotateIn"></div>

                {/* <Image
                  className="circle animated rotateIn"
                  circular
                  fluid
                  className="headshot"
                  src={Headshot}
                  alt="Ray George"
                /> */}

                <h2>Ray George</h2>
                <p style={{ fontSize: "1.2rem" }}>
                  Ray George has been working in a PR capacity with B2B
                  technology startups, enterprises and foundations since 2000.
                  Clients have included a number successful organizations
                  including Ansible, Cloudera, Hyperledger, Itential, The Linux
                  Foundation, MuleSoft, Nimble Storage, OpenStack, and Puppet.
                  Over the past 19 years, Ray has partnered with client to write
                  a myriad of contributed articles, blog posts, and press
                  release (see examples <Link to="/examples">here</Link>).
                  During that time, Ray has streamlined “The Content Cycle” - a
                  content creation workflow program that delivers unique,
                  relevant, and impactful content.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
  )
}

export default about
