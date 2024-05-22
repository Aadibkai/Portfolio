import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="nav-menu" style={{ cursor: "pointer" }}>
        <li><AnchorLink style={{color:"white",fontSize:"28px",textDecoration:"none"}} href="#home">Home  </AnchorLink></li>
        <li><AnchorLink style={{ color: "white", fontSize: "28px", textDecoration: "none" }} href="#about"> About Me</AnchorLink></li>
        <li><AnchorLink style={{color:"white",fontSize:"28px",textDecoration:"none"}} href="#services">Services</AnchorLink></li>
        <li><AnchorLink style={{color:"white",fontSize:"28px",textDecoration:"none"}} href="#portfolio">Portfolio</AnchorLink></li>
        <li><AnchorLink style={{color:"white",fontSize:"28px",textDecoration:"none"}} href="#contact">Contact</AnchorLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
