import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="nav-menu" style={{ cursor: "pointer" }}>
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            style={{ color: "white", fontSize: "28px", textDecoration: "none" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            style={{ color: "white", fontSize: "28px", textDecoration: "none" }}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            style={{ color: "white", fontSize: "28px", textDecoration: "none" }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            style={{ color: "white", fontSize: "28px", textDecoration: "none" }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            style={{ color: "white", fontSize: "28px", textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
