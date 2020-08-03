import React from "react";
import {Link, useLocation} from "react-router-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function NavBar(props) {
    const location = useLocation();
    return (
        <header className="navbar navbar-dark bg-dark permanentMarkerFont">
            <Link className="navbar-brand" to="index.html">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1200px-Circle-icons-dev.svg.png" 
                width="30" 
                height="30" 
                className="d-inline-block align-top" 
                alt="CC Logo" 
                loading="lazy" />
                Christine Clemens
            </Link>

            <nav>
                <ul className="nav">
                    <li className="nav-item active">
                        <Link className="nav-link tealText" to="/index.html">About<span className="sr-only">(current)</span></Link>
                    </li>
                    <hr />
                    <li className="nav-item active">
                        <Link className="nav-link tealText" to="/portfolio.html">Portfolio</Link>
                    </li>
                    <hr />
                    <li className="nav-item active">
                        <Link className="nav-link tealText" to="/contact.html">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;