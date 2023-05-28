import React from "react";
import FooterStyles from './CSS_Modules/Footer.module.css';
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export const Footer = () => {

    return (
            <section className={FooterStyles.footerSection}>
                <div className={FooterStyles.socialLinks}>
                    <SocialIcon className={FooterStyles.socialIcons} url="https://github.com/bealecs" bgColor="white" />
                    <SocialIcon className={FooterStyles.socialIcons} url="https://www.linkedin.com/in/clif-beale/" bgColor="white" />
                    <SocialIcon className={FooterStyles.socialIcons} url="https://codepen.io/clifcodes" bgColor="white" />
                </div>
                <div className={FooterStyles.otherLinks}>
                    <h2>Useful Links</h2>
                    <Link href='/' >Back to top</Link>
                    <Link href='/' >Back to landing</Link>
                    <Link href='/' >Leave some feedback</Link>
                </div>
            </section>
    )
} 