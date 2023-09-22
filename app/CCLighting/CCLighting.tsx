"use client"
import { useContext } from "react";
import CCLightingStyles from "../Components/CSS_Modules/CCLighting.module.css";
import { ThemeContext } from "../store/CtxProvider";

export const CCLighting = () => {

  const theme = useContext(ThemeContext);

  return (
    <section className={theme.body}>
      <div className={CCLightingStyles.container}>
        <h2>Cross & Carlile Lighting</h2>
        <div className={CCLightingStyles.anchors}>
          <a
            href="https://www.github.com/bealecs/CCLighting"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the Github Repo
          </a>
          <a
            href="https://cclighting.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the site directly
          </a>
        </div>
        <article className={CCLightingStyles.article}>
          <p>
            A starting exterior lighting company started by my older brother and
            also a lifelong friend of mine. I thought it would be a great
            opportunity for all of us if I created a website for them. <br />
            <br />I was able to leverage just about all of the information I
            needed off of their company <a
              className={CCLightingStyles.anchor}
              href="https://www.facebook.com/crossandcarlilelighting/"
              rel="noopener noreferrer"
              target="_blank"
            >
            facebook page 
            </a> and create something that can hopefully bring in more customers for
            their business. <br />
            <br />
            React was the only tool that I utilized for this project. I created
            it fairly quickly, and mostly as a surprise. As the functionality
            *for now* is low, I figured it would be best handled this way.{" "}
            <br />
            <br />
            This project was definitely less challenging than others, but I
            listed it here as I found that it was a practical, real world
            showcase. I am proud of what I have been able to accomplish here,
            and with all of my projects.
          </p>
        </article>
      </div>
    </section>
  );
};
