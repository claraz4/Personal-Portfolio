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
        <div>
            <div className="home--background-color flex-row">
                <div className="background-1"></div>
                <div className="background-2"></div>
            </div>
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

                        <div className="home--buttons-container">
                            <div className="home--button blue-bg">
                                <a href="/Personal-Portfolio/resume" id="resume-button">RESUME</a>
                            </div>
                            <div className="home--button outline-box">
                                <a href="/Personal-Portfolio/projects" id="projects-button">PROJECTS</a>
                            </div>
                        </div>

                        <p> 
                            et sint laboris cupidatat qui lorem aute amet occaecat aliquip commodo incididunt sunt ullamco Duis esse amet enim officia. ea do enim et consequat ex magna occaecat voluptate velit deserunt fugiat voluptate veniam ipsum exercitation ut Duis.
                        </p>
                        </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}