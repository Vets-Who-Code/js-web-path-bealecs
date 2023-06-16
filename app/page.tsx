import React from "react";
import "./page.css";
import { HeroSection } from "./Components/Hero";
import { Blog } from "./Components/Blog";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <Blog />
    </div>
  );
}
