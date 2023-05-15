import React from "react";
import './CSS_Modules/Hero.css'
import Image from "next/image";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons"

export const HeroSection = () => {

    return (
    <section className="landing-section" id="landingSection">
        <div>
            <Image height={375} width={400} src="/pfp.webp" className="pfp" alt="Professional shot of Clif Beale with a transparent background"/>
        </div>
        <div className="landing-info">
            <h2 className="name">I'm <span className="name2">Clif</span></h2>
            <h3 className="typewriter-text"><span className="typewriter">Husband, Web Developer, Veteran, Gamer</span><span className="typewriter-cursor"></span></h3>
            <a className="vwc" href="https://vetswhocode.io" target="_blank" rel="noopener noreferrer">#VetsWhoCode</a>
            <div className="icons-flex">
                <FontAwesomeIcon icon={faCode} width={50} className="icon" />
                <FontAwesomeIcon icon={faCode} width={50} className="icon" />
                <FontAwesomeIcon icon={faCode} width={50} className="icon" />
            </div>
        </div>
    </section>
    )
}