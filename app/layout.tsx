import React from "react";
import "./page.css";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import { Main } from "./Components/Main";
import { Metadata } from "next";
import ThemeContextProvider from "./store/CtxProvider";
import ContactContextProvider from "./store/ContactContext";

export const metadata: Metadata = {
  title: "Clif Codes",
  description: "Clifton Beale's Professional Portfolio",
  robots: "all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <ContactContextProvider>
        <ThemeContextProvider>
        <GoogleAnalytics />
          <Main>{children}</Main>
        </ThemeContextProvider>
        </ContactContextProvider>
      </body>
    </html>
  );
}
