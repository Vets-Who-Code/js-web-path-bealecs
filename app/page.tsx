import React, { useState } from "react";
import "./page.css";
import { HeroSection } from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { Blog } from "./Components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clif Codes",
  description: "Clifton Beale's Professional Portfolio",
};

export default function Page() {
  return (
    <div>
      <HeroSection />
      <Blog />
      <Footer />
    </div>
  );
}
