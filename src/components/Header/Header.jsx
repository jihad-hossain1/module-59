import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='space-x-4 px-3 py-6 text-xl'>
            <Link to="/">Home</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Header;