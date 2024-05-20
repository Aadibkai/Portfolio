import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img
              style={{ height: "250px", borderRadius: "210px" }}
              src="./img/me.png"
              alt="Profile"
            />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am an experienced Frontend Developer with over a decade of
                professional experience in the field. Throughout my career, I
                have had the privilege of collaborating with prestigious
                organizations, contributing to their success and growth.
              </p>
              <p>
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I
                bring to each project.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
          <div className="about-achievement">
            <h1>50+</h1>
            <p>Projects Completed</p>
          </div>
          <div className="about-achievement">
            <h1>100+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
