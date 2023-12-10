import "../css/Header.css";
import logo from "../assets/images/homepage/future_community_logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <nav className="logo">
          <NavLink to="/">
            <img data-testid="home-logo" src={logo} alt="Company Logo" />
          </NavLink>
        </nav>
        <nav className="navLinks">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="Team">TEAM</NavLink>
          <NavLink to="Events">EVENTS</NavLink>
          <NavLink to="News">NEWS</NavLink>
          <NavLink to="Fanzone">FAN ZONE</NavLink>
        </nav>
      </div>
      <nav className="navLinksMobile">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="Team">TEAM</NavLink>
        <NavLink to="Events">EVENTS</NavLink>
        <NavLink to="News">NEWS</NavLink>
        <NavLink to="Fanzone">FAN ZONE</NavLink>
      </nav>
    </>
  );
}
