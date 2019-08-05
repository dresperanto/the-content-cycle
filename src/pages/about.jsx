import React from "react"
import Layout from "../components/layout"
import "./about.css"
import Headshot from "../images/ray_twitter.jpg"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="animated fadeIn mainContent">
        <h2>The Content Cycle</h2>
        <p>
          Lorem ipsum dolo sit amet, consectetur adipiscing elit. Morbi in
          pellentesque nisl. Pellentesque libero orci, semper ut pretium ac,
          molestie in lacus. Duis ac sapien purus. Morbi posuere aliquet tellus,
          at pharetra nulla fermentum at. Donec aliquam, felis vitae faucibus
          elementum, odio tortor venenatis turpis, at convallis sem magna sed
          velit. Ut a leo volutpat, ultrices magna eget, volutpat libero. Proin
          sagittis felis lectus, ac iaculis justo ullamcorper ac. Donec cursus
          quis massa nec fermentum. In vel nulla non leo pharetra varius. Duis
          cursus urna id libero egestas, et ultrices orci interdum. Aenean t
        </p>

        <h2>Ray George</h2>
        <p>
          <img className="headshot" src={Headshot} alt="Ray George" />
          Ray George has been working in a PR capacity with B2B technology
          startups, enterprises and foundations since 2000. Clients have
          included a number successful organizations including Ansible,
          Cloudera, Hyperledger, Itential, The Linux Foundation,
          MuleSoft, Nimble Storage, OpenStack, and Puppet. Over the past 19
          years, Ray has partnered with client to write a myriad of contributed
          articles, blog posts, and press release (see examples here - link to
          Examples tab). During that time, Ray has streamlined “The Content
          Cycle” - a content creation workflow program that delivers unique,
          relevant, and impactful content.
        </p>
      </div>
    </Layout>
  )
}

export default about
