import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="nav-menu">
        <li>
          <AnchorLink 
           className="anchor-link" href="#home">
          
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
