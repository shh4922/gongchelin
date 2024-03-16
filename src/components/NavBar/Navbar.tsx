import React from 'react';
import "./navbar.css"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    

    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <h1>공슐랭 가이드</h1>
                <ul className='links'>
                    <li><NavLink to={"/"}>search</NavLink></li>
                    <li><NavLink to={"/info"}>info</NavLink></li>
                    <li><a className='youtube' href='https://www.youtube.com/results?search_query=%EA%B3%B5%ED%98%81%EC%A4%80' target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
