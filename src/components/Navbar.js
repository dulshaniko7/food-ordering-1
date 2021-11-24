import React from 'react';
import './styles/Navbar.css';
import logo from '../assets/logo.png'
function Navbar(props) {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt="picture"/>
            </div>
            <div className="rightSide">RRR</div>
        </div>
    );
}

export default Navbar;