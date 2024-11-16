import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      setSuccess(false);
      return;
    }
  
    emailjs
      .send(
        "service_2wfwgvm", // Your EmailJS service ID
        "template_r0d26nw", // Your EmailJS template ID
        {
          from_name: name,      // Sender's name (mapped to {{from_name}})
          from_email: email,    // Sender's email (mapped to {{from_email}})
          message: message,     // The message content (mapped to {{message}})
          to_name: "Support",   // The recipient's name (can be a fixed name like "Support" or dynamically set)
        },
        "3MWYQ_VuPA034szHj" // Your public key
      )
      .then(
        (response) => {
          if (response.status === 200) {
            console.log("Email sent successfully:", response);
            setSuccess(true);
            setError(null);
            setName("");
            setEmail("");
            setMessage("");
          }
        },
        (error) => {
          console.error("Error sending email:", error);
          setError("Failed to send message. Please try again.");
          setSuccess(false);
        }
      );
  };    

  return (
    <div className="contact-page">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="contact-svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <div
        className="header"
        data-uk-scrollspy="target: > *; cls:animated uk-animation-slide-bottom-medium; delay: 200;"
      >
        <p className="CONTACT">CONTACT</p>
        <hr className="line"></hr>
      </div>
      <div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-uk-scrollspy="target: > *; cls:animated uk-animation-slide-bottom-medium; delay: 200;"
        >
          <input
            className="contact-input"
            required
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="contact-input"
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="contact-input"
            required
            rows="10"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && (
            <span className="error-message" aria-live="polite">
              {error}
            </span>
          )}
          {success && (
            <span className="success-message" aria-live="polite">
              Message successfully sent!
            </span>
          )}
          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
