import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact" 
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Website() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/resume" element={<Resume />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}