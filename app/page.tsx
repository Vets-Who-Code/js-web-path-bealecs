import React, { useRef } from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import { HeroSection } from "./Components/Hero";
import { Footer } from "./Components/Footer";

export default function Page() {

    return (
        <div>
            <Navigation />
            <HeroSection />
            <Footer />
        </div>
    );
}