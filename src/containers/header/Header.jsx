import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header__container">
        <div className="header__title">
          <p>hi, i'm sandro</p>
        </div>
        <div className="header__message">
          <p>im a peruvian legend</p>
        </div>
        <div className="header__description">
          <p>i'm a software engineer based in Dallas, Texas. i like to bring good ideas to life whether it is in business, music, or programming.</p>
        </div>
    </div>
  )
}

export default Header