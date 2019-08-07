import React, { Component } from "react"
import { Container, Menu, Sidebar } from "semantic-ui-react"
import { Link } from "gatsby"
import "./nav.css"
import NavMobile from "./navMobile"

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="mobileNav">
          <NavMobile />
        </div>
        <div className="fullNav">
          <Sidebar.Pusher>
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

                {/* <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
              </Container>
            </Menu>
          </Sidebar.Pusher>
        </div>
      </div>
    )
  }
}

export default Nav
