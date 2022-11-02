import React from 'react'
import './about.css'
import FadeInSection from "../FadeInSection";

class About extends React.Component {

  render() {
    const one = (<p>i am currently a computer science student at the University of Texas - Arlington, i am passionate for many things."</p>);

    const tech_list = [
      "Javascript",
      "Python",
      "React.js",
      "Java",
      "HTML & CSS",
      "C++"
    ];

    return (
      <div className="about__container">
        <div className="about__title"><p>about me</p></div>
        <div className="about__me">
          {[one]}
        </div>
        <div className="about__technologies">
          <p>here are some of the technologies i've been working with:</p>
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

      </div>
    )
  }
}

export default About