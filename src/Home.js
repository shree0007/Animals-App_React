import React from 'react';
import './Home.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


function Home() {
    return (
        <div>

            <div className='container'>
                <div className='animals'>
                    <p>Animals</p>
                    <NavLink to="/Animals"><img src='animals.jpg' alt='animals' /></NavLink>
                </div>

                <div className='pics/birds'>
                    <p>Birds</p>
                    <NavLink to="/Birds"><img src='birds.jpg' alt='animals' /></NavLink>


                </div>
            </div>
        </div>

    );
}

export default Home;