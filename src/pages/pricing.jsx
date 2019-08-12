import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Grid, Segment, Statistic } from "semantic-ui-react"
import "./pricing.css"

const Pricing = () => {
  return (
    <Layout>
      <SEO title="Pricing" />
      <Container>
        <div className="animated fadeIn mainContent">
          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Segment.Group raised className="zoom plan">
                  <Segment
                    inverted
                    className="pricingHeading"
                    textAlign="center"
                  >
                    <h4 style={{ fontSize: "1.6rem" }}>One Content Piece</h4>
                  </Segment>
                  <Segment textAlign="center">
                    <Statistic>
                      <Statistic.Value>$2,000</Statistic.Value>
                    </Statistic>
                  </Segment>

                  <Segment
                    inverted
                    className="pricingDescription"
                    textAlign="center"
                  >
                    Contributed article, press release, or blog post
                  </Segment>
                </Segment.Group>
              </Grid.Column>

              <Grid.Column>
                <Segment.Group raised className="zoom plan">
                  <Segment
                    inverted
                    className="pricingHeading"
                    textAlign="center"
                  >
                    <h4 style={{ fontSize: "1.6rem" }}>Two Content Pieces</h4>
                  </Segment>
                  <Segment textAlign="center">
                    {/* <Icon name="pencil" size="huge" /> */}

                    <Statistic>
                      <Statistic.Value>$3,500</Statistic.Value>
                    </Statistic>
                  </Segment>

                  <Segment
                    inverted
                    className="pricingDescription"
                    textAlign="center"
                  >
                    Contributed article, press release, or blog post
                  </Segment>
                </Segment.Group>
              </Grid.Column>

              <Grid.Column>
                <Segment.Group raised className="zoom plan">
                  <Segment
                    inverted
                    className="pricingHeading"
                    textAlign="center"
                  >
                    <h4 style={{ fontSize: "1.6rem" }}>Larger Projects</h4>
                  </Segment>
                  <Segment textAlign="center">
                    <br />
                    <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                      Contact for Quote
                    </span>
                    <br />
                    <br />

                    {/* <Icon name="pencil" size="huge" /> */}
                  </Segment>

                  <Segment
                    inverted
                    className="pricingDescription"
                    textAlign="center"
                  >
                    Contributed article, press release, or blog post
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    </Layout>
  )
}

export default Pricing
