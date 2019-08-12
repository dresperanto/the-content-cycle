import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image, List, Segment } from "semantic-ui-react"
import SDXLogo from "../images/sdx_logo.svg"
import NetworkLogo from "../images/network_computing_logo.png"
import NewStackLogo from "../images/The-New-Stack-Logo.svg"

const examples = () => {
  return (
    <Layout>
      <SEO title="Examples" />
      <div className="animated fadeIn mainContent">
        <h2>Examples of recent contributed articles</h2>
        <Segment>
          <List divided verticalAlign="middle">
            <List.Item verticalAlign="top">
              <Image avatar src={SDXLogo} size="mini" />
              <br />
              <List.Content>
                <List.Header>
                  <a
                    href="https://thenewstack.io/sd-wan-must-tackle-the-multidomain-problem/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SD-WAN Must Tackle the Multi-Domain Problem
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <Image avatar src={NewStackLogo} size="mini" />
              <br />
              <List.Content>
                <List.Header>
                  <a
                    href=" https://www.sdxcentral.com/articles/contributed/modern-networks-enable-programmability-by-interfacing-via-apis-instead-of-clis/2018/10/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Modern Networks Enable Programmability by Interfacing via
                    APIs Instead of CLIs
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src={NetworkLogo} size="mini" />
              <br />
              <List.Content>
                <List.Header>
                  <a
                    href="https://www.networkcomputing.com/networking/nccm-does-not-equal-network-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NCCM does not equal automation
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <h2>Examples of recent press releases </h2>
        <Segment>
          <List divided relaxed>
            <List.Item>
              <List.Icon name="edit outline" size="large" />

              <List.Content>
                <List.Header>
                  <a
                    href="https://www.itential.com/news/itential-expands-multi-domain-automation-capabilities-with-latest-integrations-across-cisco-powered-sd-wan-cloud-and-data-center-networks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Itential Expands Multi-Domain Automation Capabilities with
                    Latest integrations Across Cisco Powered SD-WAN, Cloud, and
                    Data Center Networks
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="edit outline" size="large" verticalAlign="top" />
              <List.Content>
                <List.Header>
                  <a
                    href="https://oasis-open-projects.org/introducing-open-projects/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OASIS Introduces Open Projects Program to Bridge Open Source
                    and Standards Development
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="edit outline" size="large" verticalAlign="top" />
              <List.Content>
                <List.Header>
                  <a
                    href="https://www.prnewswire.com/news-releases/monetago-to-port-fraud-mitigation-network-to-r3s-corda-enterprise-300801499.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MonetaGo to Port Fraud Mitigation Network to R3's Corda
                    Enterprise
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </div>
    </Layout>
  )
}

export default examples
