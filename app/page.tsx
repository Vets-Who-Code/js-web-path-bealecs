import React from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import { HeroSection } from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { Blog } from "./Components/Blog";
import { CRUD } from "./CRUD/CRUD";

export default function Page() {

    return (
        <div>
            <Navigation />
            <HeroSection />
            <Blog />
            <CRUD />
            <Footer />
        </div>
    );
}