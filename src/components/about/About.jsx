import React from 'react'
import './about.css'

class About extends React.Component {
  render() {
    return (
      <div className="about__container">
        <div className="about__title"><p>about me</p></div>
        <div className="about__me">
          i am currently a computer science student at the University of Texas - Arlington,
        </div>

        <div className="about__technologies">
          here are some of the technologies i've been working with:
        </div>

      </div>
    )
  }
}

export default About