import React from "react"
import { Container, Segment } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <div className="animated fadeIn mainContent contactForm">
          <Segment raised padded style={{ backgroundColor: "#f5f5f5" }}>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="ui form contactForm"
              action="/index.html"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="field">
                <div className="field">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                  />
                </div>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me something interesting"
                  rows="6"
                />
              </div>
              <button className="ui button positive" type="submit">
                Submit
              </button>
            </form>
          </Segment>
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
