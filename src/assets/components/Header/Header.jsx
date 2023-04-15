import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/registerRBS">Register RBS</Link>
            <Link to="/registerBS">Register BS</Link>
        </nav>
    );
};

export default Header;