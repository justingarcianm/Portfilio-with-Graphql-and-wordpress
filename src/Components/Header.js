import React from 'react';
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <NavLink to="/">
            Navbar
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/justingarcianm"><i className="fab fa-github"></i></a>
                    </li>
            </ul>
            </div>
        </nav> 
    )
}

export default Header;