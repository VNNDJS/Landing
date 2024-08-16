import React, { useState } from 'react';
import './Component_stylesheet/FirstPage.css';
import './Navbar.jsx'
import Navbar from "./Navbar.jsx";
function FirstPage() {
    return (
        <>
            <header>
                <Navbar/>
                <div className="mainText">
                    <h1 className="HeadText"> Road To The </h1>
                    <h1 className="HeadText1"> Green Island </h1>
                </div>
            </header>
        </>
    );
}

export default FirstPage;
