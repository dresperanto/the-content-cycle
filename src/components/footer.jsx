import React from "react"
import { Container, Menu, Responsive, Segment } from "semantic-ui-react"
import footerStyles from "./footer.module.css"

const Footer = ({ author, email }) => {
  return (
    <div>
      <Responsive as={Container} minWidth={Responsive.onlyTablet.minWidth}>
        <Menu fixed="bottom" className={footerStyles.footerText}>
          <Container>
            {/* <span className={footerStyles.footerItem}>{author}</span> | */}
            <Menu.Item>
              <span className={footerStyles.footerItem}>
                <strong>Mobile:</strong> +1 650-922-3825
              </span>
            </Menu.Item>

            <Menu.Item>
              <span className={footerStyles.footerItem}>
                <strong> Email:</strong>{" "}
                <a
                  className={footerStyles.footerLink}
                  href="mailto:ray@thecontentcycle.com"
                >
                  ray@thecontentcycle.com
                </a>
              </span>
            </Menu.Item>

            <Menu.Item>
              <span className={footerStyles.footerItem}>
                {" "}
                <strong> Twitter:</strong>{" "}
                <a
                  className={footerStyles.footerLink}
                  href="https://twitter.com/thecontentcycle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @TheContentCycle
                </a>
              </span>
            </Menu.Item>
            <Menu.Item position="right">
              <span className={footerStyles.footerItem}>
                {" "}
                © {new Date().getFullYear()} | All Rights Reserved
              </span>
            </Menu.Item>
          </Container>
        </Menu>
      </Responsive>

      <Responsive as={Container} {...Responsive.onlyMobile}>
        <Container>
          <Segment className={footerStyles.footerText}>
            <span className={footerStyles.footerItem}>
              <strong>Mobile:</strong> +1 650-922-3825
            </span>
            <br />

            <span className={footerStyles.footerItem}>
              <strong> Email:</strong>{" "}
              <a
                className={footerStyles.footerLink}
                href="mailto:ray@thecontentcycle.com"
              >
                ray@thecontentcycle.com
              </a>
            </span>
            <br />

            <span className={footerStyles.footerItem}>
              {" "}
              <strong> Twitter:</strong>{" "}
              <a
                className={footerStyles.footerLink}
                href="https://twitter.com/thecontentcycle"
                target="_blank"
                rel="noopener noreferrer"
              >
                @TheContentCycle
              </a>
            </span>
            <br />
            <br />

            <span className={footerStyles.footerItem}>
              {" "}
              © {new Date().getFullYear()} | All Rights Reserved
            </span>
          </Segment>
        </Container>
      </Responsive>
    </div>
  )
}

export default Footer
