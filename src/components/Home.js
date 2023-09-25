import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import claraPic from "../images/clara.JPG";
import instagramLogo from "../images/instagram-logo.png"
import twitterLogo from "../images/twitter-logo.png"
import linkedinLogo from "../images/linkedin-logo.png"
import githubLogo from "../images/github-logo.png"
import "../styles.css";

export default function Home() {
    return (
        <div className="page--container">
            <Navbar active="aboutme" />
            <div className="home--container">
                <div className="home--personal-info">
                    <div className="home--img-container">
                        <img src={claraPic} className="home--img"/>
                    </div>
                    <div className="home--name-container">
                        <h1 className="home--name">Clara</h1>
                        <h1 className="home--name">Zammar</h1>
                        <div className="home--personal-info-separator"></div>
                    </div>
                    <h3 className="home--profession">DEVELOPER</h3>
                    <div className="home--social-media">
                        <a href="https://www.instagram.com/clarazammar/">
                            <img src={instagramLogo}/>
                        </a>
                        <a href="https://www.twitter.com/claraz4/">
                            <img src={twitterLogo}/>
                        </a>
                        <a href="https://www.linkedin.com/in/clara-zammar-951748262/">
                            <img src={linkedinLogo}/>
                        </a>
                        <a href="https://github.com/claraz4">
                            <img src={githubLogo}/>
                        </a>
                    </div>
                </div>
                <div className="home--text">
                    <h1>Hello,</h1>
                    <h3>I'm Clara</h3>
                    <p>I do this this and this and this and this and this and this and this and this and this and this and this</p>
                    <p>I do this this and this and this and this and this and this and this and this and this and this and this</p>
                    <p>I do this this and this and this and this and this and this and this and this and this and this and this</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}