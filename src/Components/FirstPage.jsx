import './Component_stylesheet/FirstPage.css';
function FirstPage() {

    return (
        <>

        <header>
            <nav>
                <div className="logo"><img src="src/assets/Pictogram.svg" alt="logo"/></div>
                <div className="navLinks">
                    <a href="#" className="links" > Park list </a>
                    <a href="#" className="links" > Evenments </a>
                    <a href="#" className="links" > AI </a>
                    <a href="#" className="links" > Biodiversity Stats </a>
                </div>
            </nav>
            <div className="mainText">
                <h1 className="HeadText"> Road To The  </h1>
                <h1 className="HeadText1"> Green Island </h1>
            </div>
        </header>
        </>
    )
}

export default FirstPage;