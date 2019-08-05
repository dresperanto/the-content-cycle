import React from "react"
import "./hero.css"
import HeroImage from "../images/home_4.jpeg"
import { Icon } from "semantic-ui-react"

const Hero = () => {
  return (
    <div
      className="rmdb-heroimage"
      style={{
        maxHeight: "400px",
        background: `linear-gradient(to top, rgba(0,0,0,0)
          39%, rgba(0,0,0,0)
          41%, rgba(0,0,0,.85)
          100%),
          url('${HeroImage}'), #1c1c1c`,
      }}
    >
      <div className="rmdb-heroimage-content">
        <div className="rmdb-heroimage-text">
          <h1>
            Efficient and Affordable <br />
            High-Tech Content Creation Services
          </h1>
          <p>
            Contributed articles <Icon name="circle" size="tiny" /> Press
            releases <Icon name="circle" size="tiny" /> Blogs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
