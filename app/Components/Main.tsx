"use client";
import { useContext } from "react";
import { ThemeContext } from "../store/CtxProvider";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ContactContextProvider, {
  ContactContext,
} from "../store/ContactContext";
import Contact from "../Contact/page";

interface Props {
  children: React.ReactNode;
}

export const Main = (props: Props) => {
  const theme = useContext(ThemeContext);
  const contact = useContext(ContactContext);

  return (
    <div>
      <Navigation />
      {contact.clicked ? (
        <Contact />
      ) : (
        <main className={theme.body}>{props.children}</main>
      )}
      <Footer />
    </div>
  );
};
