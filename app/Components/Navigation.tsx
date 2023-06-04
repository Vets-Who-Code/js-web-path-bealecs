"use client";
import React, { useEffect, useState } from "react";
import NavigationStyles from "./CSS_Modules/Navigation.module.css";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const themer = document.getElementById("themer");
    themer.addEventListener("click", () => {
      document.body.style.backgroundColor = theme ? "white" : "#1c3144";
      document.body.style.color = theme ? "#1c3144" : "white";
    });
  }, [theme]);

  const changeTheme = () => {
    if (!theme) {
      setTheme(true);
    } else if(theme) {
      setTheme(false);
    }
  };
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
          {theme ? (
            <li
              className={NavigationStyles.themer}
              onClick={changeTheme}
              id="themer"
            >
              <Image src="/dark.svg"
              width={50}
              height={50}
              alt="Theme image for changing the website to light or dark theme" />
            </li>
          ) : (
            <li
              className={NavigationStyles.themer}
              onClick={changeTheme}
              id="themer"
            >
              <Image src="/light.svg"
              width={50}
              height={50}
              alt="Theme image for changing the website to light or dark theme" />
            </li>
          )}
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
