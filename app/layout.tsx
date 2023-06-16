import React from "react";
import "./page.css";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import { Main } from "./Components/Main";
import { Metadata } from "next";

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
          <GoogleAnalytics />
          <Main>{children}</Main>
      </body>
    </html>
  );
}
