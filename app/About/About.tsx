import React from "react";
import AboutStyles from '../Components/CSS_Modules/About.module.css';
import { Footer } from "../Components/Footer";

export const AboutPage = () => {

    return (
        <>
        <h2 className={AboutStyles.aboutTitle} id="aboutSection">About <span className={AboutStyles.name2}>Clif</span></h2>
        <section className={AboutStyles.aboutContainer}>            
            <div className={AboutStyles.aboutDiv}>
                <img className={AboutStyles.aboutImg} src="/collage.webp" alt="collage of Clif, his wife Mari, and two dogs Nymeria and Max" />
                <p><span className={AboutStyles.firstLetter}>L</span>earning web development has been a passion of mine for over a year now, focusing more on the front-end, but also exploring other aspects. 
                <br />
                <br />
                <span className={AboutStyles.firstLetter}>M</span>y goal is to improve each day with the help of <a className={AboutStyles.vwcTag} href="https://vetswhocode.io" target="_blank" rel="noopener noreferrer">#VetsWhoCode</a>, a veteran-led community that trains and supports transitioning veterans in the development field. 
                I am grateful to be part of this amazing group and excited to learn more in the future.
                </p>
                <br />
                <p><span className={AboutStyles.firstLetter}>M</span>arisela (my wife) and my puppies mean more than anything to me. 
                    I have a very strong work ethic, and really put my all into what I am doing. Most of my time is spent either with my wife, working, or honing my skills for web development.
                </p>
            </div>
        </section>
        <Footer />
        </>
    )
}