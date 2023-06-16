"use client";
import { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "../store/CtxProvider";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

export const Main = (props: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContextProvider>
      <Navigation />
      <main className={theme.body}>{props.children}</main>
      <Footer />
    </ThemeContextProvider>
  );
};
