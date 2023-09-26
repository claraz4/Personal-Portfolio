import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import resumeBoxesData from "../resumeBoxes";
import skillsData from "../skills";
import "../styles.css"
import ReactMde from "react-mde";

export default function Resume() {
    // Creating the array to render the experience and education mainly with their respective boxes
    const resumeBoxes = resumeBoxesData.map((title) => {
        const fullArray = [<h4 className="resume--rubric-title">{title.rubricTitle}</h4>]
        
        fullArray.push(title.rubricInfo.map((info) => {
            return (
                <div className="resume--info-box">
                    <p className="resume--date">{info.date}</p>
                    <p className="resume--subtitle">{info.subtitle}</p>
                    <p className="resume--subinfo">{info.subinfo1}</p>
                    <p className="resume--subinfo">{info.subinfo2}</p>
                    <p className="resume--paragraph">{info.paragraph1}</p>
                    <p className="resume--paragraph">{info.paragraph2}</p>
                </div> 
            )}
        ))

        return fullArray;
    });

    // Creating the array that will render the skillset
    const skills = skillsData.map(skill => {
        const fullData = [<h3 className="resume--rubric-title">{skill.skill}</h3>]; // I can use this syntax since I know there is only one key
        fullData.push(skill.allSkills.map(s => {
            return (
                <div className="flex-row">
                    <div id="small-blue-box"></div>
                    <p>{s}</p>
                </div>
            )
        }))
        fullData.push(<br></br>);

        return fullData;
    })

    return (
        <div className="page--container">
            <Navbar active="resume"/>
            <div className="resume--container">
                <div className="resume--title">
                    <div id="blue-box"></div>
                    <h1 className="resume--page-title">RESUME</h1>
                </div>
                {resumeBoxes}
                <div className="resume--info-box">
                    {skills}
                </div>
            </div>
            <Footer />
        </div>
    )
}