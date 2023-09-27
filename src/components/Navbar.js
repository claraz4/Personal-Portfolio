import React from "react";
import "../styles.css";
import { Link } from "react-router-dom"

export default function Navbar(props) {
    const [displayOverlay, setDisplayOverlay] = React.useState(false);

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
                    <div className="navbar--name">Clara Zammar</div>
                </div>
                <div className="navbar--position">DEVELOPER</div>
            </div>
            <div className={`${displayOverlay ? "beige-overlay" : "hidden"}`}>
                <div className="navbar--button-container">
                    <a 
                        href="/Personal-Portfolio/" 
                        className={`navbar--button${props.active === "aboutme" ? " active" : ""}`}
                    >ABOUT ME</a>  
                    <a 
                        href="/Personal-Portfolio/resume" 
                        className={`navbar--button${props.active === "resume" ? " active" : ""}`}
                    >RESUME</a>  
                    <a 
                        href="/Personal-Portfolio/projects" 
                        className={`navbar--button${props.active === "projects" ? " active" : ""}`}
                    >PROJECTS</a> 
                    <a 
                        href="/Personal-Portfolio/contact" 
                        className={`navbar--button${props.active === "contact" ? " active" : ""}`}
                    >CONTACT</a> 
                </div> 
            </div>
            {displayOverlay ? navOptions : navMenuIcon}
        </div>
    )
}