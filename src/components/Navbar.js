import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
    const [displayOverlay, setDisplayOverlay] = React.useState(false);

    // Scroll to the top of the page whenever the URL changes
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const links = (
        <div className="navbar--button-container">
                <Link className={`navbar--button${props.active === "aboutme" ? " active" : ""}`} to="/" >ABOUT ME</Link>
                <Link className={`navbar--button${props.active === "resume" ? " active" : ""}`} to="/resume" >RESUME</Link>
                <Link className={`navbar--button${props.active === "projects" ? " active" : ""}`} to="/projects" >PROJECTS</Link>
                <Link className={`navbar--button${props.active === "contact" ? " active" : ""}`} to="/contact" >CONTACT</Link>
        </div> 
    );

    const navMenuIcon = (
        <div onClick={handleClick} className="navbar--lines">
                <div className={`navbar--line first`}></div>
                <div className={`navbar--line second`}></div>
                <div className={`navbar--line third`}></div>
        </div>
    )

    const navOptions = (
        <div onClick={handleClick} className="navbar--options-container">
                <div className={`navbar--options-line firstLine`}></div>
                <div className={`navbar--options-line secondLine`}></div>
        </div>
    )
    
    function handleClick() {
        setDisplayOverlay(prevDisplay => !prevDisplay);
    }

    return (
        <div className="navbar--container">
            <div className="navbar--left">
                <div className="navbar--logo">
                    <div id="blue-box"></div>
                    <Link to="/" className="navbar--name">Clara Zammar</Link>
                </div>
                <div className="flex-row">
                    <p className="navbar--left-separator">|</p>
                    <div className="navbar--position">DEVELOPER</div>
                </div>
            </div>

            <div className="navbar--links-desktop">
                {links /* This is for the desktop navbar*/}
            </div>

            <div className={`${displayOverlay ? "beige-overlay" : "hidden"}`}>
                {links}
            </div>
            {displayOverlay ? navOptions : navMenuIcon}
        </div>
    )
}