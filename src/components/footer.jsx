import React from "react"
import { Container, Menu } from "semantic-ui-react"
import footerStyles from "./footer.module.css"

const Footer = ({ author, email }) => {
  return (
    <div>
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
                href="mailto: abc@example.com"
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
    </div>
  )
}

export default Footer
