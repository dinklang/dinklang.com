import React, {useState} from 'react'
import App from "../../App"
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="pog-navbar">
                <div className="pog-navbar__container">
                    <div className="pog-navbar__container--logo">Sandro</div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                    </div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                    </div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;