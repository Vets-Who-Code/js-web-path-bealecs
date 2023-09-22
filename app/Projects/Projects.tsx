"use client"
import React, { useState } from "react";
import ProjectsStyles from "../Components/CSS_Modules/Projects.module.css";
import Image from "next/image";
import { CCLighting } from "../CCLighting/CCLighting";
import { ClifsCatalog } from "../ClifsCatalog/ClifsCatalog";
import { PWP } from "../PWP/PWP";

export const ProjectsPage = () => {

  const [currentProjectDisplay, setCurrentProjectDisplay] = useState("");
  
  const renderProject = () => {
    switch (currentProjectDisplay) {
      case "ClifCatalog":
        return <ClifsCatalog />;
      case "PWP":
        return <PWP />;
      case "CCLighting":
        return <CCLighting />;
      default:
        return <ClifsCatalog />;
    }
  };

  return (
    <div className={ProjectsStyles.projectsContainer}>
      <h2 className={ProjectsStyles.projH2} id="projectsSection">
        My <span className={ProjectsStyles.name2}>Projects</span>
      </h2>
      <div className={ProjectsStyles.projectDisplay}>{renderProject()}</div>
      <section className={ProjectsStyles.individualContainer} id="projects">
      <button className={ProjectsStyles.cardsSection} onClick={() => setCurrentProjectDisplay("ClifCatalog")}>
          <h4 className={ProjectsStyles.forDesktop}>Next Meal</h4>
          <span className={ProjectsStyles.forMobile}>🍔</span>
          <Image
            src="/banner.webp"
            alt="Screenshot of Clif's Catalog website"
            width={200}
            height={170}
          />
        </button>
        <button className={ProjectsStyles.cardsSection} onClick={() => setCurrentProjectDisplay("PWP")}>
          <h4 className={ProjectsStyles.forDesktop}>Pips with Paul</h4>
          <span className={ProjectsStyles.forMobile}>📈</span>
          <Image
            src="/pwpLogo.webp"
            alt="Screenshot of pips with paul website"
            width={200}
            height={170}
          />
        </button>
        <button className={ProjectsStyles.cardsSection} onClick={() => setCurrentProjectDisplay("CCLighting")}>
          <h4 className={ProjectsStyles.forDesktop}>C&C Lighting</h4>
          <span className={ProjectsStyles.forMobile}>💡</span>
          <Image
            src="/cclightinglogo.webp"
            alt="Screenshot of Cross & Carlile Lighting website"
            width={200}
            height={170}
          />
        </button>
      </section>
    </div>
  );
};
