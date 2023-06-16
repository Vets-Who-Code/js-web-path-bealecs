"use client"
import { useContext } from "react";
import { AboutPage } from "./About";
import { ThemeContext } from "../store/CtxProvider";

export default function About() {
    const theme = useContext(ThemeContext);
    return (
        <main className={theme.body}>
          <AboutPage />
        </main>
      );
}