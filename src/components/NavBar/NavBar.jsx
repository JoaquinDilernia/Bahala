import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from './logo.png'


const NavBar = () => {
    const [menu, setMenu] = useState(false);

    return (

        <nav>
            <Link to='/' className='logo'> <img src={logo} alt="logo" /> </Link>
            <div className='menu' onClick={() => { setMenu(!menu) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menu ? "open" : ""}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/servicios'>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to='/promos'>Promos</NavLink>
                </li>
                <li>
                    <NavLink to='/local'>Local</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>Contacto</NavLink>
                </li>

            </ul>
        </nav>

    )
}

export default NavBar