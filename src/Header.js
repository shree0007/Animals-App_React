import React from 'react';
import './Header.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Header() {
    return (

        <header className="header">
            <div className='logo-and-heading'>
                <NavLink to="/"><img className='logo' src="./mylogo.png" alt="logo" /></NavLink>
                <h1>Living Worlds</h1>
            </div>

            <nav className="nav">


                <NavLink to="/">Home</NavLink>
                <NavLink to="/animals">Animals</NavLink>
                <NavLink to="/birds">Birds</NavLink>
                <NavLink to="/about">About</NavLink>

                {/* <a href="/">Home</a>
                <a href="#">Animals</a>
                <a href="#">Birds</a>
                <a href="#">About</a> */}
            </nav>
        </header>
    );
}

export default Header;
