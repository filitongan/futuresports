import React, { useState } from "react";
import Banner from "../components/Banner";
import "../css/ContactUs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Contact us page
export default function ContactUs() {
  //setup required states
  const [enquiryType, setEnquiryType] = useState("Fan Feedback");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [messageValidation, setMessageValidation] = useState("");

  //function that handles dropdown menu selection
  function handleEnquiryTypeChange(e) {
    setEnquiryType(e.target.value);
  }

  //function that handles email input change
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailValidation("");
  }

  //function that handles message input change
  function handleMessageChange(e) {
    setMessage(e.target.value);
    setMessageValidation("");
  }

  //function that validates input then submits / shows success message if all inputs are valid
  //if inputs are not valid, it will set the validation error to show to the user
  function validateAndSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    let hasValidationError = false;

    if (!emailRegex.test(email)) {
      setEmailValidation(
        "Invalid email format! Please enter an email with format like: myemail@gmail.com"
      );
      hasValidationError = true;
    }

    if (message.length > 500) {
      setMessageValidation("Message must be under 500 characters!");
      hasValidationError = true;
    } else if (message.length < 1) {
      setMessageValidation("Message must be more than one character!");
      hasValidationError = true;
    }

    if (!hasValidationError) {
      toast.success("Message Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
      setMessage("");
    }
  }

  return (
    <>
      <Banner bannerText="CONTACT US" page="contactus" />
      <div className="main-content-contact-us">
        <div className="left-section">
          <div className="left-section-title">Contact Information</div>
          <div className="line">
            <div className="icon">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div className="text">+61 1234 5678</div>
          </div>
          <div className="line">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">futuresports@gmail.com</div>
          </div>
          <div className="line">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">42 Wallaby Way, Sydney, NSW 2000</div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62936.40868583611!2d151.16290627364216!3d-33.86099100986651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1699790836626!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className="right-section">
          <div className="right-section-title">
            For any questions not answered in FAQ - use the contact form below!
          </div>
          <div className="form">
            <label htmlFor="dropdown">Your Enquiry Type:</label>
            <select
              id="dropdown"
              onChange={handleEnquiryTypeChange}
              value={enquiryType}
            >
              <option value="Fan Feedback">Fan Feedback</option>
              <option value="Ticket Enquiries">Ticket Enquiries</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="email-input">Your Email:</label>
            <p id="email-validation">{emailValidation}</p>
            <input
              type="text"
              id="email-input"
              placeholder="Enter your email here..."
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="message-input">Your Message:</label>
            <p id="message-validation">{messageValidation}</p>
            <input
              type="text"
              id="message-input"
              value={message}
              placeholder="Enter your message here..."
              onChange={handleMessageChange}
            />
            <button id="submit-btn" onClick={validateAndSubmit} type="submit">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
