import React from "react"
import ProjectsStyles from '../Components/CSS_Modules/Projects.module.css';
import { Navigation } from "../Components/Navigation";

export const ProjectsPage = () => {
    return (
        <>
            <Navigation />
            <h2 className={ProjectsStyles.projH2} id="projectsSection">My <span className={ProjectsStyles.name2}>Projects</span></h2>
            <h2 className={ProjectsStyles.treats}>Click on a project card to view the repo</h2>
            <article className={ProjectsStyles.container} id="projects">
                <section className={ProjectsStyles.cardsSection} id="pwpSection">
                    <h4>Pips with Paul</h4>
                    <img src="/pwpLogo.webp" alt="Screenshot of pips with paul website" />
                    <p>Get your learning journey started today! Personalized courses built towards your success.
                    </p>
                </section>
                <section className={ProjectsStyles.cardsSection} id="clifCatalogSection">
                    <h4>Clif's Catalog</h4>
                    <img src="/banner.webp" alt="Screenshot of Clif's Catalog website" />
                    <p>A cookbook inspired from lack of inspiration; what started as a random meal generator has grown into something larger, and something that I can be more proud of.</p>
                </section>
                <section className={ProjectsStyles.cardsSection} id="ccLightingSection">
                    <h4>Cross & Carlile Lighting</h4>
                    <img src="/cclightinglogo.webp" alt="Screenshot of Cross & Carlile Lighting website" />
                    <p>Exterior lighting company based in southeastern VA. With Cross & Carlile, you are guaranteed a bright experience.
                    </p>
                </section>
                <section id="apiSection">
                    <h2>Can you guess my favorite music artist at the moment?</h2>
                    <button className={ProjectsStyles.api} id="api">Find out</button>
                </section>
                <section id="issue7">
                    <h2>My Top Recommended Songs</h2>
                </section>
            </article>

            <section id="app" className={ProjectsStyles.issue10}>

            </section>
        </>
        
    )
}