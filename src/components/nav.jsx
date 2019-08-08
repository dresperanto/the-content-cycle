import React, { Component } from "react"
import { Container, Icon, Menu, Sidebar } from "semantic-ui-react"
import { Link } from "gatsby"
import "./nav.css"
// import NavMobile from "./navMobile"

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="fullNav">
          <Menu fixed="top">
            <Container>
              <Menu.Item className="logo" as={Link} to="/" header>
                {/* <Image
                size="mini"
                src={Logo}
                style={{
                  marginRight: "1.5em",
                  maxHeight: "25px",
                  marginBottom: "0px",
                }}
              /> */}
                <div className="logoStyle">The Content Cycle</div>
              </Menu.Item>
              <Menu.Item
                className="nav-item"
                activeClassName="activeNav"
                as={Link}
                to="/about"
              >
                About
              </Menu.Item>
              <Menu.Item
                className="nav-item"
                activeClassName="activeNav"
                as={Link}
                to="/examples"
              >
                Examples
              </Menu.Item>
              <Menu.Item
                className="nav-item"
                activeClassName="activeNav"
                as={Link}
                to="/pricing"
              >
                Pricing
              </Menu.Item>
              <Menu.Item
                className="nav-item"
                activeClassName="activeNav"
                as={Link}
                to="/contact"
              >
                Contact
              </Menu.Item>
            </Container>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Nav
