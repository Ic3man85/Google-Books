import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const NavBar = () => {
    return (

        <nav className="nav-container">
            <ul className="nav-list">

                <li><a className="nav-link" href="https://books.google.com/" target="_blank" rel="noopener noreferrer">Google Books</a></li>
                <li><Link to="/search" className="nav-link">Search</Link></li>
                <li><Link to="/saved" className="nav-link">Saved</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
