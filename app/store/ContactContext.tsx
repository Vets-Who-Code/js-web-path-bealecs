"use client";
import React, { createContext, useState } from "react";

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

  const clickHandle = () => {
    if (!clicked) {
      setClicked(true);
      console.log("clicked")
    } else {
      setClicked(false);
      console.log("clicked")
    }
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
