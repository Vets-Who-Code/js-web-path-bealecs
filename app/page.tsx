import React from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import { HeroSection } from "./Components/Hero";

export default function Page() {
    return (
        <div>
            <Navigation />
            <HeroSection />
        </div>
    );
}