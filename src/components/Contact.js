import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";
import contactData from "../contacts"
import "../styles.css"

export default function Contact() {
    const contact = contactData.map(type => {
        const fullData = [<h4 className="resume--rubric-title">{type.title}</h4>];

        const elements = (
            <div className="contact--info-box">
                {type.elements.map(element => {
                    return (
                        <div className="contact--subelement">
                            <h3>{element.name}:</h3>
                            {element.link !== "" ? <a href={element.link}>{element.display}</a> : <p>{element.display}</p>}
                        </div>
                    )
                })}
            </div>
        );

        fullData.push(elements);
        return fullData;
    })

    return (
        <div className="page--container">
            <Navbar active="contact"/>
            <div className="contact--container">
                <div className="flex-column">
                    <Title 
                        title={"LET'S TALK"}
                        className={" center-content"}
                    />
                </div>
                {contact}
            </div>
            <Footer />
        </div>
    )
}