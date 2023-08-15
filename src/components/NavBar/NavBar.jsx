import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import './NavBar.css'
import logo from './logo.png'


const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <>
            <IconContext.Provider value={{ color: "#EEABBE" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="logo" onClick={closeMobileMenu}>
                            <img  src={logo} alt="loco" />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/servicios"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Servicios
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/promos"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Promos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/local"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Local
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contacto"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>

    )
}

export default NavBar