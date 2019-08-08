import React from "react"
import { Link } from "gatsby"
import github from "../images/github-icon.svg"
import logo from "../images/logo.png"
import tcc_logo from "../images/tcc_logo.svg"
import facebook from "../images/social/facebook.svg"
import instagram from "../images/social/instagram.svg"
import twitter from "../images/social/twitter.svg"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

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
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={tcc_logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About The Content Cycle
              </Link>
              <Link className="navbar-item" to="/ray">
                About Ray George
              </Link>
              <Link className="navbar-item" to="/examples">
                Content Examples
              </Link>
              <Link className="navbar-item" to="/pricing">
                Pricing
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>

              {/* Legacy Links
              <Link className='navbar-item' to='/products'>
                Products
              </Link>
              <Link className='navbar-item' to='/blog'>
                Blog
              </Link>
              <Link className='navbar-item' to='/contact'>
                Contact
              </Link>
              <Link className='navbar-item' to='/services'>
                Services
              </Link>
              <Link className='navbar-item' to='/contact/examples'>
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: "1em", height: "1em" }}
                  />
                </span>
                <span className="icon">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </span>
                <span className="icon">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </span>
                <span className="icon">
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
