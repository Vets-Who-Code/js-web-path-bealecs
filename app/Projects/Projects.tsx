import React from "react";
import ProjectsStyles from "../Components/CSS_Modules/Projects.module.css";
import { Footer } from "../Components/Footer";
import Link from "next/link";
import Image from "next/image";

export const ProjectsPage = () => {
  return (
    <>
      <h2 className={ProjectsStyles.projH2} id="projectsSection">
        My <span className={ProjectsStyles.name2}>Projects</span>
      </h2>
      <h2 className={ProjectsStyles.treats}>Click on a project card</h2>
      <article className={ProjectsStyles.container} id="projects">
        <section id="pwpSection" className={ProjectsStyles.cardsSection}>
          <h4>Pips with Paul</h4>
          <Link style={{ textDecoration: "none" }} href="/PWP">
            <Image
              src="/pwpLogo.webp"
              alt="Screenshot of pips with paul website"
              width={200}
              height={170}
            />
          </Link>
          <p>
            Get your learning journey started today! Personalized courses built
            towards your success.
          </p>
        </section>
        <section
          id="clifCatalogSection"
          className={ProjectsStyles.cardsSection}
        >
          <h4>Clif's Catalog</h4>
          <Link style={{ textDecoration: "none" }} href="/ClifsCatalog">
            <Image
              src="/banner.webp"
              alt="Screenshot of Clif's Catalog website"
              width={200}
              height={170}
            />
          </Link>
          <p>
            A cookbook inspired from lack of inspiration; what started as a
            random meal generator has grown into something larger, and something
            that I can be more proud of.
          </p>
        </section>
        <section id="ccLightingSection" className={ProjectsStyles.cardsSection}>
          <h4>Cross & Carlile Lighting</h4>
          <Link style={{ textDecoration: "none" }} href="/CCLighting">
            <Image
              src="/cclightinglogo.webp"
              alt="Screenshot of Cross & Carlile Lighting website"
              width={200}
              height={170}
            />
          </Link>
          <p>
            Exterior lighting company based in southeastern VA. With Cross &
            Carlile, you are guaranteed a bright experience.
          </p>
        </section>
      </article>
      <div className={ProjectsStyles.break}></div>
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
