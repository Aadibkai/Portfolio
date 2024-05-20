import React, { useState } from "react";
import "./Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handleSubscribed = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && !error) {
      toast.success("Subscribe successfully");
    } else {
      console.log("Valid email is required to subscribe");
      toast.error("please enter a valid email");
    }
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (value.includes(".com" && "@")) {
      setError("");
    } else {
      setError("! please enter a valid email");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "abf6f513-c6e6-4a94-8375-3c087c25ee4c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
      } else {
        console.log("Error", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>I am a frontend developer from Pune with 1+ year of experience</p>
        </div>
        <div className="footer-top-right">
          <form
            onSubmit={onSubmit}
            className="footer-email-form"
            style={{ display: "flex", gap: "8px" }}
          >
            <input
              style={{ width: "276px", height: "38px", color: "white" }}
              className="footer-email-input"
              type="text"
              placeholder="Enter your email address here..."
              value={email}
              onChange={handleChange}
              required
            />
            <button
              style={{ height: "54px" }}
              onClick={handleSubscribed}
              className="footer-subscribe"
            >
              Subscribe
            </button>

            <ToastContainer />
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-botom">
        <div
          style={{
            display: "flex",
            height: "34px",
            width: "164px",
            gap: "20px",
          }}
          className="image"
        >
          <a
            style={{
              display: "flex",
              height: "34px",
              width: "164px",
              gap: "20px",
            }}
            href="https://www.linkedin.com/in/aadibkazi/"
          >
            <img  src="./img/linkedin.png" alt="" />
          </a>
          <a
            style={{
              display: "flex",
              height: "34px",
              width: "164px",
              gap: "20px",
            }}
            href="https://www.instagram.com/aadib____/"
          >
            <img src="./img/instagram.png" alt="" />
          </a>
          <a
            style={{
              display: "flex",
              height: "34px",
              width: "164px",
              gap: "20px",
            }}
            href="https://github.com/Aadibkai"
          >
            <img src="./img/github.png" alt="" />
          </a>
        </div>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
