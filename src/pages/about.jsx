import React from "react"
import Layout from "../components/layout"
import "./about.css"
import Headshot from "../images/ray_twitter.jpg"
import SEO from "../components/seo"
import { Grid, Image } from "semantic-ui-react"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className=" mainContent" style={{ marginBottom: "120px" }}>
        <Grid stackable divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}>
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
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Image
                fluid
                className="headshot"
                src={Headshot}
                alt="Ray George"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <h2>Ray George</h2>
              <p>
                Ray George has been working in a PR capacity with B2B technology
                startups, enterprises and foundations since 2000. Clients have
                included a number successful organizations including Ansible,
                Cloudera, Hyperledger, Itential, The Linux Foundation,
                MuleSoft, Nimble Storage, OpenStack, and Puppet. Over the past
                19 years, Ray has partnered with client to write a myriad of
                contributed articles, blog posts, and press release (see
                examples here - link to Examples tab). During that time, Ray has
                streamlined “The Content Cycle” - a content creation workflow
                program that delivers unique, relevant, and impactful content.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
  )
}

export default about
