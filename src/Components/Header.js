import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Link to="/">
            <h1>Navbar</h1>
            </Link>
        </header>
    )
}

export default Header;