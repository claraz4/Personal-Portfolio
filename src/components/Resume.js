import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import resumeBoxesData from "../data/resumeBoxes";
import skillsData from "../data/skills";
import "../styles.css"
import ReactMde from "react-mde";

export default function Resume() {
    // Creating the array to render the experience and education mainly with their respective boxes
    const resumeBoxes = resumeBoxesData.map((title) => {
        const fullArray = [<h4 className="resume--rubric-title">{title.rubricTitle}</h4>]
        
        fullArray.push(title.rubricInfo.map((info) => {
            return (
                <div className="info-box">
                    <div className="resume--info">
                        <p className="resume--date">{info.date}</p>
                        <p className="resume--subtitle">{info.subtitle}</p>
                        <p className="resume--subinfo">{info.subinfo1}</p>
                        <p className="resume--subinfo">{info.subinfo2}</p>
                    </div>
                    <div className="resume--text">
                        <p className="resume--paragraph">{info.paragraph1}</p>
                        <p className="resume--paragraph">{info.paragraph2}</p>
                    </div> 
                </div> 
            )}
        ))

        return fullArray;
    });

    // Creating the array that will render the skillset
    const skills = skillsData.map(skill => {
        const fullData = [<h3 className="resume--rubric-title">{skill.skill}</h3>]; // I can use this syntax since I know there is only one key
        
        const partData = (
            <div id="skills">
                {skill.allSkills.map(s => {
                return (
                    <div className="flex-row">
                        <div id="small-blue-box"></div>
                        <p>{s}</p>
                    </div>
                )})}
            </div>
        );

        fullData.push(partData);
        fullData.push(<br></br>);

        return fullData;
    })

    return (
        <div className="page--container">
            <Navbar active="resume"/>
            <div className="resume--container">
                <div className="flex-row space-between">
                    <Title 
                        title={"RESUME"}
                        className={""}
                    />
                    <div id="cv-button">
                        <a href="actual file url" 
                        download>DOWNLOAD CV</a>
                    </div>
                </div>
                {resumeBoxes}
                <div className="info-box" id="skills-container">
                    {skills}
                </div>
            </div>
            <Footer />
        </div>
    )
}