// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: For styling the NavBar

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Inicio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/all-books" className="navbar-link">Todos los Libros</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
