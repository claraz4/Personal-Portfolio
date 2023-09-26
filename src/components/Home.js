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

                    <div className="home--buttons-container">
                        <div className="home--button blue-bg">
                            <a href="/Personal-Portfolio/resume" id="resume-button">RESUME</a>
                        </div>
                        <div className="home--button outline-box">
                            <a href="/Personal-Portfolio/projects" id="projects-button">PROJECTS</a>
                        </div>
                    </div>

                    <p>irure ea velit proident eu deserunt ad minim exercitation in ea exercitation non aliqua ea culpa incididunt ex. aliqua aliqua elit pariatur aliquip irure id cupidatat pariatur consectetur aute eu voluptate eiusmod quis ad. aliquip eu est elit incididunt nisi et officia commodo cillum do aute esse Excepteur sit ex dolor incididunt incididunt. ad dolor amet ad mollit officia proident adipiscing amet sint sunt magna pariatur sed sit quis commodo. reprehenderit ad magna do adipiscing aliquip nulla aute in voluptate mollit veniam et eu amet ad nulla quis tempor.
qui dolor occaecat elit ex deserunt tempor occaecat amet sunt magna esse aliquip magna est consequat. ad nulla proident adipiscing occaecat fugiat ullamco nostrud eu consectetur aute anim dolor est commodo dolor. labore reprehenderit consectetur aliquip in deserunt sunt cupidatat occaecat deserunt nostrud id enim lorem deserunt dolor cillum mollit. aliquip nostrud est dolore minim mollit pariatur labore nisi sed ex est deserunt laboris et exercitation ex. ea consequat irure eu Duis occaecat et ipsum irure deserunt aliquip eiusmod fugiat Duis ipsum Excepteur irure. ut minim sit nisi tempor dolor occaecat commodo sint Duis esse eiusmod laboris enim ipsum anim. ex Duis est fugiat minim eiusmod pariatur Excepteur dolor anim velit incididunt irure nisi do anim lorem incididunt.
nulla nisi ad aliqua tempor magna id quis elit quis in magna labore et laborum occaecat sint et. et in anim commodo cupidatat laborum nisi mollit dolor commodo nisi amet velit commodo est aliquip officia cupidatat. adipiscing aute voluptate pariatur et mollit voluptate culpa et dolor laborum et Duis ullamco culpa aliqua sit eiusmod magna. cupidatat voluptate enim lorem ut aliqua aliquip irure et pariatur elit qui ullamco tempor proident dolor ad. sint fugiat voluptate esse velit incididunt consectetur dolor laboris magna cillum pariatur in non aute officia tempor Duis anim. Duis laboris sint nisi aliquip laborum aute sunt tempor eiusmod aliqua do velit fugiat amet exercitation commodo.
occaecat nostrud nisi Duis aute aliqua aliquip occaecat eiusmod aute tempor aliquip lorem occaecat do aliqua. eu aliqua ut dolore sunt sint esse labore culpa nulla veniam cillum eu occaecat fugiat laboris Excepteur. labore est velit laboris aute sint quis dolore tempor magna nisi ullamco ea fugiat labore eiusmod. eiusmod aliquip ullamco esse eu labore minim ex in esse magna proident irure commodo quis est. voluptate Excepteur consectetur proident et sit officia deserunt laboris veniam labore eiusmod quis anim fugiat dolor tempor aute. non et ut dolor est eiusmod laboris occaecat mollit labore ipsum deserunt Duis nostrud laboris fugiat sint aute.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}