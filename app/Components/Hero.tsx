import React from "react";
import HeroStyles from './CSS_Modules/Hero.module.css'
import Image from "next/image";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons"

export const HeroSection = () => {

    return (
    <section className={HeroStyles.landingSection} id="landingSection">
        <div>
            <Image height={375} width={400} src="/pfp.webp" className={HeroStyles.pfp} alt="Professional shot of Clif Beale with a transparent background"/>
        </div>
        <div className={HeroStyles.landingInfo}>
            <h2 className={HeroStyles.name}>I'm <span className={HeroStyles.name2}>Clif</span></h2>
            <h3 className={HeroStyles.typewriterText}><span className={HeroStyles.typewriter}>Husband, Web Developer, Veteran, Gamer</span><span className={HeroStyles.typewriterCursor}></span></h3>
            <a className={HeroStyles.vwc} href="https://vetswhocode.io" target="_blank" rel="noopener noreferrer">#VetsWhoCode</a>
            <div className={HeroStyles.iconsFlex}>
                <FontAwesomeIcon icon={faCode} width={50} className={HeroStyles.icon} />
                <FontAwesomeIcon icon={faCode} width={50} className={HeroStyles.icon} />
                <FontAwesomeIcon icon={faCode} width={50} className={HeroStyles.icon} />
            </div>
        </div>
    </section>
    )
}