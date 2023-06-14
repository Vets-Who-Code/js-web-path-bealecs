"use client"
import { useContext } from "react";
import { ThemeContext } from "../store/CtxProvider";

interface Props {
  children: React.ReactNode;
}

export const Main = (props: Props) => {
  const theme = useContext(ThemeContext);

  return (
      <main className={theme.body}>{props.children}</main>
  );
};
