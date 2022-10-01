import React, {useState} from 'react'
import App from "../../App"
import {Link} from 'react-router-dom'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
    <>
        <Link to="/"><p>home</p></Link>
        <Link to="/"><p>about</p></Link>
        <Link to="/"><p>contact</p></Link>
    </>
)

function Navbar() {
    const[toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <nav className="pog-navbar">
                <div className="pog-navbar__container">
                    <div className="pog-navbar__container--logo">sandro</div>
                    <div className="pog-navbar__container--links">
                        <Menu/>
                    </div>
                    <div className="pog-navbar__container--menu">
                        {toggleMenu
                            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                        {toggleMenu && (
                            <div className="pog-navbar__menu scale-up-center">
                                <div className="pog-navbar__menu--links">
                                    <Menu/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;