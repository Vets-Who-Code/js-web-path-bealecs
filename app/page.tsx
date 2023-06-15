import React, { useContext, useState } from "react";
import "./page.css";
import { HeroSection } from "./Components/Hero";
import { Blog } from "./Components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clif Codes",
  description: "Clifton Beale's Professional Portfolio",
  robots: "all",
};

export default function Page() {
  return (
    <div>
      <HeroSection />
      <Blog />
    </div>
  );
}
