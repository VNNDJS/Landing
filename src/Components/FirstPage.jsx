import React, { useState } from 'react';
import './Component_stylesheet/FirstPage.css';
import './Component_stylesheet/ParkList.css';
import './Component_stylesheet/events.css';
import Slider from "./Slider.jsx";
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
                        <a href="#ParkSection" className="links"> Park list </a>
                        <a href="#events" className="links"> Events </a>
                        <a href="#intelli" className="links"> AI </a>
                        <a href="#intelli" className="links"> Biodiversity Stats </a>
                    </div>
                </nav>
                <div className="mainText">
                    <h1 className="HeadText"> Road To The </h1>
                    <h1 className="HeadText1"> Green Island </h1>
                </div>
            </header>
            <section id="ParkSection">
                <div className="Pktextsect">
                    <div className="txt">
                        <h1 className="Pkheader">Importance of parks</h1>

                        <p className="Pksmalltext">Madagascar's parks are sacred havens where the island's soul
                            breathes. Within their verdant embrace, rare species find refuge, and ancient forests
                            whisper stories of resilience. These landscapes, rich in life and mystery, sustain the
                            delicate balance of nature, offering sanctuary not only to creatures but to the spirit of
                            Madagascar itself. They are the heartbeats of the island, vital for its future and a
                            testament to the enduring beauty of our natural world.</p>
                    </div>
                    <a href="#ParkList" className="ListButton">See parks</a>
                </div>
                <div className="PkimgSect"></div>

            </section>
            <div id="ParkList">
                <div className="lstPrk">
                    <div id="lstPrktxt">
                        <h1 id="LstH1"> List of parks </h1>
                        <p className="LstP">In Madagascar’s embrace, where nature’s voice resounds,
                            Each park stands as a testament to earth's profound bounds.
                            From Tsingy’s jagged spires to rainforests’ verdant grace,
                            These sanctuaries echo tales of a timeless, vibrant place.
                            Amidst the stillness, a symphony of life unfurls,
                            In every grove and glen, the essence of our world.
                        </p>
                        <a href="https://www.ticketplace.io/" className="ListButton">Buy Tickets</a>

                    </div>
                </div>
                <div className="slider">
                <Slider/>
                </div>
            </div>
            <section id="events">
                <div className="eventsTxt">
                    <div className="content">
                        <h1 className="eventsBig">Organize event</h1>
                        <p className="eventsmall">In Madagascar's wild expanse, where nature's spirit gleams,
                            Let our hearts unite in action, fueled by shared dreams.
                            Organize, inspire, let green gatherings take flight,
                            For every small event ignites a beacon of light.
                            Together, let's cherish and protect what we hold dear,
                            In every action, a vision of a future clear. </p>
                    </div>
                    <div className="btn-containor">
                        <a href="#" className="ListButton">Organize</a>
                        <a href="#" className="ListButton">Join</a>
                    </div>
                </div>
                <div className="eventsImg"></div>
            </section>
            <section id="intelli">
                <div className="leftside">
                    <div className="leftText">
                        <h1 className="headAI">Use our AI for all your ecology questions</h1>
                        <h1 className="headAI">And See Biodiversity stats</h1>
                        <a href="#" className="ListButton border">Join now</a>
                    </div>
                </div>

            </section>
        </>
    );
}

export default FirstPage;
