"use client";
import React, { useState } from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import Script from "next/script";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import Head from "next/head";

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
      <Head>
        <title>Clif Codes</title>
        <meta name="description">Clifton Beale's professional portfolio page</meta>
      </Head>
      <body className={"container_" + theme}>
        <GoogleAnalytics />
        <Navigation theme={theme} handler={onThemeChange} />
        {children}
      </body>
    </html>
  );
}
