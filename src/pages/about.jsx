import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Grid, Responsive, Segment } from "semantic-ui-react"
import "./about.css"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className=" mainContent" style={{ marginBottom: "40px" }}>
        <Segment
          className="nonMobile"
          raised
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column width={5}>
                <div className="circle"></div>
              </Grid.Column>
              <Grid.Column width={10}>
                <h2>How it Works</h2>
                <div className="cycleText">
                  <h2>• Kick-off interviews & research</h2>
                  <h2>• Topic generation & alignment</h2>
                  <h2>• Topic specific interviews and questionnaire</h2>
                  <h2>• Initial content draft</h2>
                  <h2>• Collaborative editing cycles & approval</h2>
                  <h2>• Article submission services</h2>
                  <h2>• Social media content support</h2>
                </div>
              </Grid.Column>
              {/* <Grid.Column width={1}></Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Segment>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          <div className="circleMobile"></div>

          <h2>The Content Cycle</h2>
          <div className="cycleText">
            <ul className="textMobile">
              <li>Kick-off interviews & research</li>
              <li>Topic generation & alignment</li>
              <li>Topic specific interviews and questionnaire</li>
              <li>Initial content draft</li>
              <li>Collaborative editing cycles & approval</li>
              <li>Article submission services</li>
              <li>Social media content support</li>
            </ul>
          </div>
        </Responsive>
      </div>
    </Layout>
  )
}

export default about
