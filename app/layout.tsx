"use client";
import React, { createContext, useState } from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import GoogleAnalytics from "./Components/GoogleAnalytics";

export const ThemeContext = createContext(false);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [body, setBody] = useState("light");
  const [theme, setTheme] = useState(false);

  const onThemeChange = () => {
    if (!theme) {
      setTheme(true);
      setBody("dark");
    } else {
      setTheme(false);
      setBody("light");
    }
  };

  return (
    <html lang="en">
      <ThemeContext.Provider value={theme}>
      <body className={"container_" + body}>
        <GoogleAnalytics />
          <Navigation theme={body} handler={onThemeChange} />
          {children}
      </body>
      </ThemeContext.Provider>
    </html>
  );
}
