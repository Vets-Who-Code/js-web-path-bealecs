"use client";
import React, { createContext, useContext, useState } from "react";
import Contact from "../Contact/page";
import ThemeContextProvider, { ThemeContext } from "./CtxProvider";
import { Main } from "../Components/Main";

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
    console.log(theme.body)
  };

  const ctxValue: Contact = {
    clicked: clicked,
    clickHandle: clickHandle,
  };

  return (
    <ContactContext.Provider value={ctxValue}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
