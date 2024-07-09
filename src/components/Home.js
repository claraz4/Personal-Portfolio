import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import claraPic from "../images/clara-official.webp";
import instagramLogo from "../images/instagram-logo.webp"
import twitterLogo from "../images/twitter-logo.webp"
import linkedinLogo from "../images/linkedin-logo.webp"
import githubLogo from "../images/github-logo.webp"
import { Link } from "react-router-dom";
import "../styles.css";
import RevealOnScroll from "./RevealOnScroll";

export default function Home() {
    const introHome = "Welcome to my world of digital innovation." + 
    "I'm a developer with a passion for turning ideas into exceptional online experiences." +
    "With every line of code, I craft the future of the web.";

    // Make the last line of the intro dynamic. The animation needs to be repeated every 3 minutes
    const fullIntroPhrase = " Let's build something extraordinary!";
    const [introPhrase, setIntroPhrase] = React.useState("");

    // Each letter will appear after one second
    React.useEffect(() => {
        setTimeout(() => {
            if (introPhrase === fullIntroPhrase) {
                setIntroPhrase("");
            }

            for (let i = 0; i < fullIntroPhrase.length; i++) {
                setTimeout(() => {
                    setIntroPhrase(fullIntroPhrase.substring(0, i + 1));
                }, i * 100);
            }
        }, 1000);
    }, []);
        


    return (
        <div>
            <div className="home--background-color flex-row">
                <div className="background-1"></div>
                <div className="background-2"></div>
            </div>
            <div className="page--container">
                <Navbar active="aboutme" />
                
                <RevealOnScroll>
                    <div className="home--container">
                        <div className="home--personal-info">
                            <div className="home--img-container">
                                <img src={claraPic} className="home--img" alt="Clara" />
                            </div>
                            <div className="home--name-container">
                                <h1 className="home--name">Clara</h1>
                                <h1 className="home--name">Zammar</h1>
                                <div className="home--personal-info-separator"></div>
                            </div>
                            <h3 className="home--profession">DEVELOPER</h3>
                            <div className="home--social-media">
                                <a href="https://www.instagram.com/clarazammar/">
                                    <img src={instagramLogo} alt="Instagram Logo" width="23px" height="23px" />
                                </a>
                                <a href="https://www.twitter.com/claraz4/">
                                    <img src={twitterLogo} alt="Twitter Logo" width="23px" height="23px" />
                                </a>
                                <a href="https://www.linkedin.com/in/clara-zammar-951748262/">
                                    <img src={linkedinLogo} alt="Linked In Logo" width="23px" height="23px" />
                                </a>
                                <a href="https://github.com/claraz4">
                                    <img src={githubLogo} alt="GitHub Logo" width="23px" height="23px" />
                                </a>
                            </div>
                        </div>
                        <div className="home--text">
                            <h1>Hello,</h1>
                            <h3>I'm Clara</h3>

                            <div className="home--buttons-container">
                                <div className="home--button blue-bg">
                                    <Link to="/resume" id="resume-button">RESUME</Link>
                                </div>
                                <div className="home--button outline-box">
                                    <Link to="/projects" id="projects-button">PROJECTS</Link>
                                </div>
                            </div>

                            <p>{introHome}</p>
                            <div id="intro-phrase">
                                <p id="greater-than-sign">&gt;</p>
                                <p>{introPhrase}</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                <Footer />
            </div>
        </div>
    )
}