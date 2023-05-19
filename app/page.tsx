import React from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import { HeroSection } from "./Components/Hero";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Resume } from "./Components/Resume";
import { Footer } from "./Components/Footer";

export default function Page() {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <Projects />
            <About />
            <Contact />
            <Resume />
            <Footer />
        </div>
    );
}