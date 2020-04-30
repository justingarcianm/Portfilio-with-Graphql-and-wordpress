import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <NavLink to="/">
            Navbar
            </NavLink>
        </nav> 
    )
}

export default Header;