import React from 'react'
import './about.css'
import FadeInSection from "../FadeInSection";

class About extends React.Component {

  render() {
    const one = (
      <p>i am currently a computer science student at the
        <a href='https://www.uta.edu/'> University of Texas at Arlington</a>
        . i've been working at
        <a href='https://www.amazon.com/'> Amazon </a>
        through college and have a background in IT.<br></br>
        here are some of the technologies i've been working with:</p>
    );

    const two = (
      <p>outside of work i enjoy music production, ocassional video games
        and the pursue entrepreneurial activities.
      </p>
    )

    const tech_list = [
      "Javascript",
      "Python",
      "React",
      "GraphQL",
      "C++"
    ];

    return (
      <div className='about__container'>
        <div className="about__title"><p>about me</p></div>
        <div className="about__me">
          <div>{[one]}</div>
          <div className="about__technologies">
            <ul className="tech-stack">
              {tech_list.map(function (tech_item, i) {
                return (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                );
              })}
            </ul>
            </div>
          <div>{[two]}</div>
        </div>

      </div>
    )
  }
}

export default About