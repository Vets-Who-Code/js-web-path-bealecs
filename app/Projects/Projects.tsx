import React from "react";
import ProjectsStyles from "../Components/CSS_Modules/Projects.module.css";
import { Navigation } from "../Components/Navigation";
import { Footer } from "../Components/Footer";
import Link from "next/link";

export const ProjectsPage = () => {
  return (
    <>
      <h2 className={ProjectsStyles.projH2} id="projectsSection">
        My <span className={ProjectsStyles.name2}>Projects</span>
      </h2>
      <h2 className={ProjectsStyles.treats}>Click on a project card</h2>
      <article className={ProjectsStyles.container} id="projects">
        <Link
          style={{ textDecoration: "none" }}
          href="/PWP"
          className={ProjectsStyles.cardsSection}
        >
          <section id="pwpSection">
            <h4>Pips with Paul</h4>
            <img
              src="/pwpLogo.webp"
              alt="Screenshot of pips with paul website"
            />
            <p>
              Get your learning journey started today! Personalized courses
              built towards your success.
            </p>
          </section>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className={ProjectsStyles.cardsSection}
          href="/ClifsCatalog"
        >
          <section id="clifCatalogSection">
            <h4>Clif's Catalog</h4>
            <img
              src="/banner.webp"
              alt="Screenshot of Clif's Catalog website"
            />
            <p>
              A cookbook inspired from lack of inspiration; what started as a
              random meal generator has grown into something larger, and
              something that I can be more proud of.
            </p>
          </section>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className={ProjectsStyles.cardsSection}
          href="/CCLighting"
        >
          <section id="ccLightingSection">
            <h4>Cross & Carlile Lighting</h4>
            <img
              src="/cclightinglogo.webp"
              alt="Screenshot of Cross & Carlile Lighting website"
            />
            <p>
              Exterior lighting company based in southeastern VA. With Cross &
              Carlile, you are guaranteed a bright experience.
            </p>
          </section>
        </Link>
      </article>
      <p className={ProjectsStyles.para}>
        At the start of each project, I was jumping into mostly unfamiliar
        territory. Through completing such projects, I was able to continue
        expanding on my knowledge, and put real world use cases into my code.
      </p>
      <br />
      <p className={ProjectsStyles.para}>
        Making projects with my code has not been the only way for me to learn,
        personally. Lately, I have been creating blog posts on subjects that I
        feel could use some light. Some of the latest posts can be found
        directly on the{" "}
        <a className={ProjectsStyles.landingAnchor} href="./">
          landing page
        </a>
        .
      </p>
      <section id="app" className={ProjectsStyles.issue10}></section>
      <Footer />
    </>
  );
};
