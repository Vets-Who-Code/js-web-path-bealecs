"use client"
import React, { useContext } from "react";
import "./page.css";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import { Main } from "./Components/Main";
import { Metadata } from "next";
import ThemeContextProvider, { ThemeContext } from "./store/CtxProvider";

export const metadata: Metadata = {
  title: "Clif Codes",
  description: "Clifton Beale's Professional Portfolio",
  robots: "all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useContext(ThemeContext)
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
        <GoogleAnalytics />
          <Main>{children}</Main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
