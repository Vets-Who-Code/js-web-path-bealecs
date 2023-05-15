import React from "react"
import "./CSS_Modules/Navigation.css";

export const Navigation = () => {

    return (
        <>
        <nav>
            <h1 id="logotitle" className="logo-title"><span className="logo-letters">C</span>lif <span className="logo-letters">C</span>odes</h1>
            <ul>
                <li className="nav-button" id="projectsID">Projects <i className="fa fa-handshake-o"></i></li>
                <li className="nav-button" id="aboutID">About <i className="fa fa-male"></i></li>
                <li className="nav-button" id="contactID">Contact <i className="fa fa-address-book-o"></i></li>
                <li className="nav-button" id="resumeID">Resume <i className="fa fa-briefcase"></i></li>
                <li className="themer" id="themer"></li>
            </ul>
            <div className="hamburger-menu">
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
            </div>
        </nav>

        <section className="drop-down">
        <ul>
            <li className="nav-button" id="hamburgerProjectsID">Projects</li>
            <li className="nav-button" id="hamburgerAboutID">About</li>
            <li className="nav-button" id="hamburgerContactID">Contact</li>
            <li className="nav-button" id="hamburgerResumeID">Resume</li>
        </ul>
    </section>
    </>
    )
}