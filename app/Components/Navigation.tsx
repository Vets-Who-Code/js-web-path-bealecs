"use client";
import React, { useContext, useState } from "react";
import NavigationStyles from "./CSS_Modules/Navigation.module.css";
import Link from "next/link";
import { ThemeContext } from "../store/CtxProvider";
import ContactContextProvider, { ContactContext } from "../store/ContactContext";


export const Navigation = () => {
  const [active, setActive] = useState(false);

  const hamburgerClick = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  
 const theme = useContext(ThemeContext);
 const contact = useContext(ContactContext);
 
  return (
    <ContactContextProvider>
      <nav className={theme.body === 'container_light' ? NavigationStyles.nav : NavigationStyles.navDark}>
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
            <Link className={NavigationStyles.navButton} href="Projects">
              Projects
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="About">
              About
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID" onClick={contact.clickHandle}>
            <Link className={NavigationStyles.navButton} href="#">
              Contact
            </Link>
          </li>
          <li className={NavigationStyles.listItem} id="projectsID">
            <Link className={NavigationStyles.navButton} href="Resume">
              Resume
            </Link>
          </li>

          <li className={NavigationStyles.themer} id="themer" onClick={theme.onThemeChange}>
            {theme.body === "container_light" ? 
              "🌛"
             : 
              "⛅"
            }
          </li>
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
        <section className={theme.body === 'container_light' ? NavigationStyles.dropDown : NavigationStyles.dropDownDark} id="drop-down">
          <ul>
            <li className={NavigationStyles.listItem} id="projectsID">
              <Link className={NavigationStyles.navButton} href="Projects">
                Projects
              </Link>
            </li>
            <li className={NavigationStyles.listItem} id="projectsID">
              <Link className={NavigationStyles.navButton} href="About">
                About
              </Link>
            </li>
            <li className={NavigationStyles.listItem} onClick={contact.clickHandle} id="projectsID">
              <Link className={NavigationStyles.navButton} href="#">
                Contact
              </Link>
            </li>
            <li className={NavigationStyles.listItem} id="projectsID">
              <Link className={NavigationStyles.navButton} href="Resume">
                Resume
              </Link>
            </li>
            <li className={NavigationStyles.themer} id="themer" onClick={theme.onThemeChange}>
            {theme.body === "container_light" ? 
              "🌛"
             : 
              "⛅"
            }
          </li>
          </ul>
        </section>
      )}
      </ContactContextProvider>
  );
};
