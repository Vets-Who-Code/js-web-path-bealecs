"use client"
import { useContext } from "react";
import { ThemeContext } from "../store/CtxProvider";
import { ProjectsPage } from "./Projects";
import '../page.css';

export default function Projects() {

  const theme = useContext(ThemeContext);

  return (
    <main className={theme.body}>
      <ProjectsPage />
    </main>
  );
}
