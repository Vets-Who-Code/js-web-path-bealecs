"use client";
import React, { useState } from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  const onThemeChange = () => {
    setTheme((prevTheme) => (prevTheme !== "dark" ? "dark" : "light"));
  };

  return (
    <html lang="en">
      <body className={"container_" + theme}>
        <Navigation theme={theme} handler={onThemeChange} />
        {children}
      </body>
    </html>
  );
}
