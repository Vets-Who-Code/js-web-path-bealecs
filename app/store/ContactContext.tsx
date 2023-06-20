"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Contact from "../Contact/page";
import ThemeContextProvider, { ThemeContext } from "./CtxProvider";

type Contact = {
  clicked: boolean;
  clickHandle: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const ContactContext = createContext<Contact>({
  clicked: false,
  clickHandle: () => {},
});

const ContactContextProvider = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const theme = useContext(ThemeContext);

  const clickHandle = () => {
    setClicked(!clicked);
  };

  const ctxValue: Contact = {
    clicked: clicked,
    clickHandle: clickHandle,
  };

  return (
    <ContactContext.Provider value={ctxValue}>
        {clicked ? (
          <main className={theme.body}>
            {props.children}
            <Contact />
          </main>
        ) : (
          <main className={theme.body}>{props.children}</main>
        )}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
