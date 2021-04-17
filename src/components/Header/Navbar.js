import React from 'react'

import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
    return (
        <nav className={"nav-laptop"}>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/projects">
                Projects
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </nav>
    )
}

export default Navbar
