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
  body: "container_light",
  onThemeChange: () => {},
});

const ThemeContextProvider = (props: Props) => {
  const [body, setBody] = useState("container_light");

  const onThemeChange = () => {
    if (body == 'container_light') {
      setBody("container_dark");
    } else {
      setBody("container_light");
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
