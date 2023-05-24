import React from "react";
import ContactStyles from '../Components/CSS_Modules/Contact.module.css';
import { Navigation } from "../Components/Navigation";

export const ContactPage = () => {

    return (
        <>
        <Navigation />
        <section className={ContactStyles.contactContainer} id="contactSection">
            <h2 className={ContactStyles.contactTitle} id="aboutSection">Point of <span className={ContactStyles.name2}>Contact</span></h2>
            <p>The easiest way to get in contact with me, leave me a message here</p>
            <form className={ContactStyles.contactForm}>
                <label htmlFor="f-name">First Name:</label>
                <input id="f-name" placeholder="First Name" type="text" minLength={1} maxLength={25} required/>
                <label htmlFor="l-name">Last Name:</label>
                <input id="l-name" placeholder="Last Name" type="text" minLength={1} maxLength={25} required/>
                <label htmlFor="email">Email:</label>
                <input id="email" placeholder="Email" type="email" minLength={8} maxLength={25} required/>
                <textarea placeholder="Message..." minLength={10} maxLength={180}></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
        </>
    )
}