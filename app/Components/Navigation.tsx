import React from "react"
import NavigationStyles from "./CSS_Modules/Navigation.module.css";

export const Navigation = () => {

    return (
        <>
        <nav className={NavigationStyles.nav}>
            <h1 id="logotitle" className={NavigationStyles.logoTitle}><span className={NavigationStyles.logoLetters}>C</span>lif <span className={NavigationStyles.logoLetters}>C</span>odes</h1>
            <ul>
                <li className={NavigationStyles.navButton} id="projectsID">Projects</li>
                <li className={NavigationStyles.navButton} id="aboutID">About</li>
                <li className={NavigationStyles.navButton} id="contactID">Contact</li>
                <li className={NavigationStyles.navButton} id="resumeID">Resume</li>
                <li className={NavigationStyles.themer} id="themer"></li>
            </ul>
            <div className={NavigationStyles.hamburgerMenu}>
                <span className={NavigationStyles.hamburgerBar}></span>
                <span className={NavigationStyles.hamburgerBar}></span>
                <span className={NavigationStyles.hamburgerBar}></span>
            </div>
        </nav>

        <section className={NavigationStyles.dropDown}>
        <ul>
            <li className={NavigationStyles.navButton} id="hamburgerProjectsID">Projects</li>
            <li className={NavigationStyles.navButton} id="hamburgerAboutID">About</li>
            <li className={NavigationStyles.navButton} id="hamburgerContactID">Contact</li>
            <li className={NavigationStyles.navButton} id="hamburgerResumeID">Resume</li>
        </ul>
    </section>
    </>
    )
}