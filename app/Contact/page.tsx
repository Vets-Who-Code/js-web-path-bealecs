"use client";
import React, { useContext, useState } from "react";
import ContactStyles from "../Components/CSS_Modules/Contact.module.css";
import { ContactContext } from "../store/ContactContext";

function genRandKey() {
  const num = Math.floor(Math.random() * 100000);
  return num;
}
interface Props {
  theme: string;
}
  const Contact = (props: Props) => {
  //state for contact form inputs
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contact = useContext(ContactContext);
  
  //POST request to server side API @ app/api/contact/route.ts
  async function sendContactMessage() {
    alert("Thank you for reaching out, I will be in touch soon!");
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: genRandKey(),
        "first-name": fName,
        "last-name": lName,
        email: email,
        message: message,
      }),
    }).then((response) => {
      response.json();
    });
  }

  //handlers for state value changes when filling out the inputs
  const handleFirstNameChange = (e) => {
    setFName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={ ContactStyles.mainDiv }>
      <section className={props.theme === 'container_light' ? ContactStyles.contactContainer : ContactStyles.contactContainerDark} id="contactSection">
        <button onClick={contact.clickHandle} className={ContactStyles.exit}>← Exit</button>
        <h2 className={ContactStyles.contactTitle} id="aboutSection">
          Point of <span className={ContactStyles.name2}>Contact</span>
        </h2>
        <p>If you are looking to get in touch, just leave your info below</p>
        <form
          onSubmit={sendContactMessage}
          className={ContactStyles.contactForm}
        >
          <div className={ContactStyles.formDiv}>
            <label htmlFor="f-name">First Name:</label>
            <input
              id="f-name"
              onChange={handleFirstNameChange}
              value={fName}
              placeholder="First Name"
              type="text"
              minLength={1}
              maxLength={50}
              required
            />
            <label htmlFor="l-name">Last Name:</label>
            <input
              id="l-name"
              onChange={handleLastNameChange}
              value={lName}
              placeholder="Last Name"
              type="text"
              minLength={1}
              maxLength={50}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              onChange={handleEmailChange}
              value={email}
              placeholder="Email"
              type="email"
              minLength={8}
              maxLength={50}
              required
            />
          </div>
          <div className={ContactStyles.textareaDiv}>
            <textarea
              placeholder="Message..."
              onChange={handleMessageChange}
              value={message}
              minLength={10}
              maxLength={500}
            ></textarea>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;