import React from "react";
import FooterStyles from './CSS_Modules/Footer.module.css';
import { SocialIcon } from "react-social-icons";

export const Footer = () => {

    return (
            <section className={FooterStyles.footerSection}>
                <div className={FooterStyles.socialLinks}>
                    <SocialIcon className={FooterStyles.socialIcons} url="https://github.com/bealecs" bgColor="white" />
                    <SocialIcon className={FooterStyles.socialIcons} url="https://www.linkedin.com/in/clif-beale/" bgColor="white" />
                    <SocialIcon className={FooterStyles.socialIcons} url="https://codepen.io/clifcodes" bgColor="white" />
                </div>
                <form className={FooterStyles.feedbackForm}>
                    <h3>Leave some feedback about the site</h3>
                    <label htmlFor="feedback-name">Name</label>
                    <input type="text" id="feedback-name" placeholder="Name..." />
                    <label htmlFor="feedback-msg">Feedback</label>
                    <textarea id="feedback-msg" placeholder="Feedback..."></textarea>
                    <button type="submit" className={FooterStyles.submitFeedback}>Submit Feedback</button>
                </form>
            </section>
    )
} 