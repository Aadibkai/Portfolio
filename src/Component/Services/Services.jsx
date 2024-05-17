import React from "react";
import "./Services.css";
import "../Service_data";
import Service_Data from "../Service_data";
const Services = () => {
  return (
    <div id="services">
      <div className="services">
        <div className="services-title">
          <h1>My Services</h1>
          <img src="" alt="" />
        </div>
        <div className="service-container">
          {Service_Data.map((service, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="servives-readmore">
                  <p>Read More</p>
                  <img
                    style={{ display: "flex", width: "40px", height: "60px" }}
                    src="./img/Arrow.png"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
