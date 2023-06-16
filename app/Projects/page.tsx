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
//ask about next button being a form submission or not? it holds state values for the newform on the radios