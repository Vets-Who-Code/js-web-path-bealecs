"use client";
import React, { createContext, useState } from "react";

type Ctx = {
  body: string;
  onThemeChange: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Ctx>({
  body: "container_dark",
  onThemeChange: () => {},
});

const ThemeContextProvider = (props: Props) => {
  const [body, setBody] = useState("container_dark");

  const onThemeChange = () => {
    if (body == 'container_dark') {
      setBody("container_light");
    } else {
      setBody("container_dark");
    }
  };

  const ctxValue: Ctx = {
    body: body,
    onThemeChange: onThemeChange,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
