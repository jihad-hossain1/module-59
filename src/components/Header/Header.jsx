import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='space-x-4 px-3 py-6 bg-purple-100 mb-10'>
            <Link to="/">Home</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
            <Link to="/register-rbs">Register RBS</Link>
            <Link to="/register-bs">Register BS</Link>
        </div>
    );
};

export default Header;