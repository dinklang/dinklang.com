import React from 'react'
import './header.css'
import droski from '../../assets/droski.svg';
import './header.scss'
import FadeInSection from "../FadeInSection";

class Header extends React.Component {


  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }


  render() {
    return (
      <div className="header__container">
        <div className="header__text">
          <span className="header__title">
            hi, i'm
            <span className="pog-name"> sandro</span>
          </span>
          <FadeInSection>
            <div className="header__subtitle">
              <p>i like to create stuff</p>
            </div>
            <div className="header__description">
              <p>i'm a software engineer and self-taught web developer based in Dallas, Texas. i have great interest for full-stack development, human-computer interaction, and music. i enjoy bringing good ideas to life.</p>
            </div>
            <div className="header__cta">
              <div className="header__cta--button">
                <span>say hi</span>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div className='header__visual'>
          <img src={droski}></img>
        </div>
        <div className="header__scroll">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    )
  }
}

export default Header;