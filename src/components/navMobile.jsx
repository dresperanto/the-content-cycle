import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react"
import Hero from "./hero"

class NavMobile extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            <Icon name="sidebar" />
          </Button>
          {/* <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button> */}
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item>
              <Link to="about/">About</Link>
            </Menu.Item>
            <Menu.Item as="a">Example</Menu.Item>
            <Menu.Item as="a">Pricing</Menu.Item>
            <Menu.Item as="a">Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <div
                className="animated fadeIn"
                style={{ marginBottom: "100px" }}
              >
                <Hero />
                <div className="homeContent">
                  <p>
                    <strong>
                      Unique, relevant, and impactful content is an important
                      element of the marketing mix for high-tech B2B companies.
                      It creates awareness, builds credibility, and helps
                      differentiate the organization within the marketplace.
                    </strong>{" "}
                  </p>
                  <p>
                    Unfortunately, domain experts within the organization (CEO,
                    CTO, developers) oftentimes do not have the time to commit
                    to creating content.
                  </p>
                  <p>
                    Alternatively, marketing teams may not have the technical
                    expertise required to understand and uplevel the content for
                    clarity to a wider audience (or they simply don’t have the
                    time to create the content themselves).
                  </p>
                  <p>
                    I have been creating content for high-tech B2B companies
                    since 2000. During that time, I have refined a content
                    creation workflow program (“The Content Cycle”) to
                    efficiently produce unique, relevant, and impactful content.{" "}
                  </p>
                </div>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default NavMobile
