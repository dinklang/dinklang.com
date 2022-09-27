import React, {useState} from 'react'
import App from "../../App"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;