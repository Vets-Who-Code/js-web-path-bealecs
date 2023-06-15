import React from "react";
import "./page.css";
import { Navigation } from "./Components/Navigation";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import ThemeContextProvider from "./store/CtxProvider";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <ThemeContextProvider>
          <Navigation />
          <Main>{children}</Main>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
