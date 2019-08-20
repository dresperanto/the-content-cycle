import React, { Component } from "react"
import { Icon, Menu } from "semantic-ui-react"
import "./nav.css"

class NavMobile extends Component {
  state = {
    visible: false,
    active: false,
    navBarActiveClass: "hideNav",
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleHideClick = () => this.setState({ visible: false })
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "hideNav",
            })
      }
    )
  }

  render() {
    const { navBarActiveClass, activeItem } = this.state
    return (
      <div className="mobileNav">
        <div className="animated slideInLeft mobileMenu">
          <Icon
            className="hamburgerMenu"
            name="sidebar"
            size="big"
            onClick={this.toggleHamburger}
          />
        </div>
        <div>
          <div className="mobileLogoStyle">The Content Cycle</div>
        </div>
        <div className={`animated fadeIn  ${navBarActiveClass}`}>
          <Menu fluid vertical>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              link
              href="/"
            />
            <Menu.Item
              name="How It Works"
              active={activeItem === "About"}
              onClick={this.handleItemClick}
              link
              href="/how-it-works"
            />
            <Menu.Item
              name="Examples"
              active={activeItem === "Examples"}
              onClick={this.handleItemClick}
              href="/examples"
            />
            <Menu.Item
              name="Bio"
              active={activeItem === "Bio"}
              onClick={this.handleItemClick}
              href="/bio"
            />
            <Menu.Item
              name="Contact"
              active={activeItem === "Contact"}
              onClick={this.handleItemClick}
              href="/contact"
            />
          </Menu>
          {/* <Button fluid color="black">
              <Link to="about/">About</Link>
            </Button>
            <Button fluid color="black">
              <Link to="about/">About</Link>
            </Button>
            <Button fluid color="black">
              <Link to="about/">About</Link>
            </Button>
            <Button fluid color="black">
              <Link to="about/">About</Link>
            </Button> */}
        </div>

        {/* <ul className={`mobileNav ${navBarActiveClass}`}>
              <li>
                <Link to="about/">About</Link>
              </li>
              <li>
                <Link to="examples/">Example</Link>
              </li>
              <li>
                <Link to="pricing/">Pricing</Link>
              </li>
              <li>
                <Link to="contact/">Contact</Link>
              </li>
            </ul> */}
      </div>
    )
  }
}

export default NavMobile
