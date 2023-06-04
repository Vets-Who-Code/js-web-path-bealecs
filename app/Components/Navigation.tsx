import React from "react"
import NavigationStyles from "./CSS_Modules/Navigation.module.css";
import Link from "next/link";

export const Navigation = () => {

    return (
        <>
        <nav className={NavigationStyles.nav}>
            <h1 id="logotitle"><Link className={NavigationStyles.logoTitle} href="/"><span className={NavigationStyles.logoLetters}>C</span>lif <span className={NavigationStyles.logoLetters}>C</span>odes</Link></h1>
            <ul>
                <li className={NavigationStyles.listItem} id="projectsID">
                    <Link className={NavigationStyles.navButton} href="/Projects">Projects</Link>
                </li>
                <li className={NavigationStyles.listItem} id="projectsID">
                    <Link className={NavigationStyles.navButton} href="/About">About</Link>
                </li>
                <li className={NavigationStyles.listItem} id="projectsID">
                    <Link className={NavigationStyles.navButton} href="/Contact">Contact</Link>
                </li>
                <li className={NavigationStyles.listItem} id="projectsID">
                    <Link className={NavigationStyles.navButton} href="/Resume">Resume</Link>
                </li>
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