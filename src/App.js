import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact" 
import "./styles.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/Personal-Portfolio/" element={<Home />} />
                    <Route exact path="/Personal-Portfolio/resume" element={<Resume />} />
                    <Route exact path="/Personal-Portfolio/projects" element={<Projects />} />
                    <Route exact path="/Personal-Portfolio/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}