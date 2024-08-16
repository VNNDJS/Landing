import React, { useState } from 'react';
import './Component_stylesheet/FirstPage.css';

function FirstPage() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <header>
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
                <div className="mainText">
                    <h1 className="HeadText"> Road To The </h1>
                    <h1 className="HeadText1"> Green Island </h1>
                </div>
            </header>
        </>
    );
}

export default FirstPage;
