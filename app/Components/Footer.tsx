"use client"
import React, { useContext } from "react";
import FooterStyles from "./CSS_Modules/Footer.module.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { ThemeContext } from "../store/CtxProvider";

export const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className={theme.body === 'container_light' ? FooterStyles.footerSection : FooterStyles.footerSectionDark}>
      <div className={FooterStyles.otherLinks}>
        <h2>Useful Links</h2>
        <Link className={FooterStyles.linkies} href="/">
          Back to home page
        </Link>
        <Link className={FooterStyles.linkies} href="https://dev.to/bealecs" target="_blank" rel="noreferrer noopener">
          My Dev.to Profile
        </Link>
        <Link className={FooterStyles.linkies} href="Feedback" target="_blank" rel="noreferrer noopener">
          Leave some feedback
        </Link>
      </div>
      <div className={FooterStyles.socialLinks}>
        <SocialIcon
          className={FooterStyles.socialIcons}
          url="https://github.com/bealecs"
          bgColor="white"
        />
        <SocialIcon
          className={FooterStyles.socialIcons}
          url="https://www.linkedin.com/in/clif-beale/"
          bgColor="white"
        />
        <SocialIcon
          className={FooterStyles.socialIcons}
          url="https://codepen.io/clifcodes"
          bgColor="white"
        />
      </div>
    </section>
  );
};
