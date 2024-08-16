import React, { useState } from 'react';
import './Component_stylesheet/FirstPage.css';

function Navbar(){
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    return (
        <nav>
            <div className="logo"><img src="src/assets/Pictogram.svg" alt="logo"/></div>
            <i className="fa-solid fa-bars" id="menu" onClick={toggleNav}></i>
            <div className={`navLinks ${isNavVisible ? 'show' : ''}`}>
                <a href="#" className="links"> Park list </a>
                <a href="#" className="links"> Events </a>
                <a href="#" className="links"> AI </a>
                <a href="#" className="links"> Biodiversity Stats </a>
            </div>
        </nav>
    );
}
export default Navbar;