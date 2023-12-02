import "../css/Footer.css";
import logo from "../assets/images/homepage/future_community_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-layer-1">
          <Link to="/Faq">FAQ </Link> · <Link to="/ContactUs">CONTACT US</Link>{" "}
          ·<Link to="/PrivacyStatement"> PRIVACY STATEMENT</Link> ·
          <Link to="/TermsAndConditions"> TERMS & CONDITIONS</Link>
        </div>
        <div className="footer-layer-2">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f fa-3x"></i>
          </a>
          <a href="https://twitter.com/?lang=en">
            <i className="fa-brands fa-twitter fa-3x"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram fa-3x"></i>
          </a>
        </div>
        <div className="footer-layer-3">
          <p>&copy; FutureSports 2023. All rights reserved.</p>
        </div>
        <div className="footer-layer-4">
          <img src={logo} alt="Company Logo" />
        </div>
      </footer>
    </>
  );
}
