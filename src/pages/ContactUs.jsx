import Banner from "../components/Banner";
import "../css/ContactUs.css";

export default function ContactUs() {
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
            <select id="dropdown">
              <option value="option1">Fan Feedback</option>
              <option value="option2">Ticket Enquiries</option>
              <option value="option3">Other</option>
            </select>
            <label htmlFor="email-input">Your Email:</label>
            <p id="email-validation"></p>
            <input
              type="text"
              id="email-input"
              placeholder="Enter your email here..."
            />
            <label htmlFor="message-input">Your Message:</label>
            <p id="message-validation"></p>
            <input
              type="text"
              id="message-input"
              placeholder="Enter your message here..."
            />
            <button id="submit-btn" onclick="validateAndSubmit()" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
