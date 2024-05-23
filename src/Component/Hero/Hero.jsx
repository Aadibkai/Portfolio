import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="ho" className="container">
      <div>
        <div className="hero">
          <img
            style={{ height: "250px", borderRadius: "210px" }}
            src="./img/me.png"
            alt=""
          />
          <h1>
            <span>I'm Adib Kazi ,</span> frontend devloper based in pune
          </h1>
          <p>
            I am a frontend devloper from pune,Maharastra with 1 year of
            experience.
          </p>
          <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink
                href="#co"
                style={{ textDecoration: "none", color: "white" }}
              >
                Connect With Me
              </AnchorLink>
            </div>
            <div className="hero-resme">My resume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
