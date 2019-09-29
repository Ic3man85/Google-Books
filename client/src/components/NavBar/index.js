import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

function NavBar() {
    return (

        <nav className="nav-container">
            <ul className="nav-list">

                <li><Link to="/" className="nav-link">Google Books</Link></li>
                <li><Link to="/search" className="nav-link">Search</Link></li>
                <li><Link to="/saved" className="nav-link">Saved</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
