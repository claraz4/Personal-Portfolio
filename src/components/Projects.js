import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import projectsData from "../data/projects";
import "../styles.css";

export default function Projects() {
    // Text for the project
    const projectIntro = "Discover my portfolio of projects that showcase my development journey. " + 
    "Each project here represents a milestone in my learning process and a step towards becoming a better developer. "

    // Creating the array that will render the projects
    const projects = projectsData.map(project => {
        return (
            <div id="project" className="info-box">
                <div id="project--title-parag">
                    <div className="flex-row padding-top-10">
                        <div id="blue-rectangle"></div>
                        <div className="padding-10 flex-column align-start">
                            <h4 className="project--title">{project.projectName}</h4>
                            <h6 className="project--role">{project.roleTitle}</h6>
                        </div>
                    </div>
                    <p className="project--paragraph">{project.paragraph}</p>
                </div>
                <div className={`project--img-container${project.justifyCenter ? " justify-center" : ""}`}>
                    <a href={project.projectURL}>  
                    <picture className="project--img">
                        <source 
                            srcSet={`${require(`../images/${project.imageUrl.desktop}`)}`} 
                            media="(min-width: 800px)" 
                        />
                        <source 
                            srcSet={`${require(`../images/${project.imageUrl.phone800}`)}`} 
                            media="(min-width: 540px) and (max-width: 800px)"
                        />
                        <source 
                            srcSet={`${require(`../images/${project.imageUrl.phone500}`)}`} 
                            media="(min-width: 400px) and (max-width: 540px)"
                        />
                        <source 
                            srcSet={`${require(`../images/${project.imageUrl.phone400}`)}`} 
                        />
                        <img
                            src={`${require(`../images/${project.imageUrl.desktop}`)}`} 
                            className={"project--img"}
                            alt="Project"
                        />    
                    </picture>
                    </a>
                </div>
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
                    <p className="justify-text">{projectIntro}</p>
                </div>
                {projects}
            </div>
                
            <Footer />
        </div>
    )
}