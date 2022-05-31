import React from 'react';
import { NavLink } from 'react-router-dom'
// import './navigation.css'

const Navigation = () => {
    return (
        <header class="p-1 bg-dark text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                    <NavLink class="nav-link px-2 text-secondary" style={{ color: 'white', textDecoration: 'none', listStyleType: "none", padding: "0 13px" }} to="/">
                        <li>Donate</li>
                    </NavLink>
                    <NavLink class="nav-link px-2 text-white" style={{ color: 'white', textDecoration: 'none', listStyleType: "none" }} to="/FAQ">
                        <li>FAQ</li>
                    </NavLink>
                </div >
            </div>
        </header>
    );
};

export default Navigation;