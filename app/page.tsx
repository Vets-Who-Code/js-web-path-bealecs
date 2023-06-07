import React, { useState } from "react";
import "./page.css";
import { HeroSection } from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { Blog } from "./Components/Blog";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <Blog />
      <Footer />
    </div>
  );
}
