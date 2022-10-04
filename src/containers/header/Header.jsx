import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header__container">
        <span className="header__title">
          hi, i'm
          <span className="pog-name"> sandro</span>
        </span>
        <div className="header__message">
          <p>i'm a peruvian legend</p>
        </div>
        <div className="header__description">
          <p>i'm a software engineer based in Dallas, Texas. i like to bring good ideas to life whether it is in business, music, or programming.</p>
        </div>
    </div>
  )
}

export default Header