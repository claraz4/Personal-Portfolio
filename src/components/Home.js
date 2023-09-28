import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import claraPic from "../images/clara.webp";
import instagramLogo from "../images/instagram-logo.webp"
import twitterLogo from "../images/twitter-logo.webp"
import linkedinLogo from "../images/linkedin-logo.webp"
import githubLogo from "../images/github-logo.webp"
import { Link } from "react-router-dom";
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