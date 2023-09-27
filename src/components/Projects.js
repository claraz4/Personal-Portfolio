import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import projectsData from "../projects";
import "../styles.css"

export default function Projects() {
    // Creating the array that will render the projects
    const projects = projectsData.map(project => {
        return (
            <div className="info-box remove-padding">
                <div className="flex-row padding-top-10">
                    <div id="blue-rectangle"></div>
                    <div className="padding-10 flex-column align-start">
                        <h4 className="project--title">{project.projectName}</h4>
                        <h6 className="project--role">{project.roleTitle}</h6>
                    </div>
                </div>
                <p className="project--paragraph">{project.paragraph}</p>
                <img src={require(`../images/${project.imageUrl}`)} className="project--img" />
            </div>
        )
    });

    return (
        <div className="page--container">
            <Navbar active="projects"/>
            <div className="projects--container">
                <div className="flex-column">
                    <Title 
                        title={"PROJECTS"}
                        className={" center-content"}
                    />
                    <p className="justify-text">qui consequat ex irure laborum do dolore pariatur consequat aliquip exercitation commodo ullamco commodo in velit. eu occaecat nisi esse veniam sint irure consectetur eiusmod commodo esse id laboris cillum voluptate anim aute non.</p>
                </div>
                {projects}
            </div>
                
            <Footer />
        </div>
    )
}