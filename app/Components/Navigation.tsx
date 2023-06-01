"use client";
import React, { useState } from "react";
import NavigationStyles from "./CSS_Modules/Navigation.module.css";
import Link from "next/link";

export const Navigation = () => {
  const [active, setActive] = useState(false);

  const hamburgerClick = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <>
      <nav className={NavigationStyles.nav}>
        <div className={NavigationStyles.logoDiv}>
          <h1 id="logotitle">
            <Link className={NavigationStyles.logoTitle} href="/">
              <span className={NavigationStyles.logoLetters}>C</span>lif{" "}
              <span className={NavigationStyles.logoLetters}>C</span>odes
            </Link>
          </h1>
        </div>
        <ul className={NavigationStyles.navLinks}>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/Projects">
              Projects
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/About">
              About
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/Contact">
              Contact
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/Resume">
              Resume
            </Link>
          </li>
          <li className={NavigationStyles.themer} id="themer"></li>
        </ul>
        <div
          className={NavigationStyles.hamburgerMenu}
          id="hamburger-menu"
          onClick={hamburgerClick}
        >
          <span className={NavigationStyles.hamburgerBar}></span>
          <span className={NavigationStyles.hamburgerBar}></span>
          <span className={NavigationStyles.hamburgerBar}></span>
        </div>
      </nav>

      {active && (
        <section className={NavigationStyles.dropDown} id="drop-down">
          <ul>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/Projects">
              Projects
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/About">
              About
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/Contact">
              Contact
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="/Resume">
              Resume
            </Link>
          </li>
          </ul>
        </section>
      )}
    </>
  );
};
