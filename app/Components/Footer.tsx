import React from "react";
import FooterStyles from './CSS_Modules/Footer.module.css';

export const Footer = () => {

    return (
        <section className={FooterStyles.footer}>
            <section className={FooterStyles.formSection}>
                <form>
                    <h3>Leave some feedback about the site</h3>
                    <label htmlFor="feedback-name">Name</label>
                    <input type="text" id="feedback-name" placeholder="Name..." />
                    <label htmlFor="feedback-msg">Feedback</label>
                    <textarea id="feedback-msg" placeholder="Feedback..."></textarea>
                    <button type="submit" className={FooterStyles.submitFeedback}>Submit Feedback</button>
                </form>
                <a aria-label="Footer icon button for Clif's Github profile" className={FooterStyles.footerButton} href='https://github.com/bealecs' target="_blank" rel="noopener noreferrer"></a>
                <a aria-label="Footer icon button for Clif's Codepen profile" className={FooterStyles.footerButton} href='https://codepen.io/clifcodes' target="_blank" rel="noopener noreferrer"></a>
                <a aria-label="Footer icon button for Clif's LinkedIn profile" className={FooterStyles.footerButton} href='https://www.linkedin.com/in/clif-beale/' target="_blank" rel="noopener noreferrer"></a>
            </section> 
        </section>
        
    )
} 