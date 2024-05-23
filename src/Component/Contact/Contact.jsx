import React, { useState } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event, field) => {
    const value = event.target.value;
    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    }
  };

  const handleSubscribed = (e) => {
    e.preventDefault();
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validNameRegex = /^[a-zA-Zà-ÿÀ-ÿ'’-]+([ a-zA-Zà-ÿÀ-ÿ'’-]+)*$/;

    if (!validEmailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!validNameRegex.test(name)) {
      toast.error("Please enter a valid name");
      return;
    }

    toast.success("Submit successfully");
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
    <div id="co" className="contact">
      <div className="contact_title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact_container">
        <div className="contact_left">
          <h1>Let's talk</h1>
          <p className="contact_left_para">
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <img src="./img/email.png" alt="Email" />
              <p>adibkazi1106@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img
                style={{
                  backgroundColor: "#a0a0a0",
                  height: "20px",
                  width: "20px",
                  // color:"#a0a0a0"
                }}
                src="./img/phone-call.png"
                alt="Phone"
              />
              <p>8007633650</p>
            </div>
            <div className="contact_detail">
              <img
                style={{
                  backgroundColor: "#a0a0a0",
                  height: "20px",
                  width: "20px",
                }}
                src="./img/location.png"
                alt="Location"
              />
              <p>Pune, Maharashtra</p>
            </div>
          </div>
        </div>
        <form className="contact_right">
          <div className="sub_contact_right">
            <div className="contact_right_inp_container">
              <label htmlFor="name">Your Name</label>
              <input
                className="contact_right_inp"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                value={name}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
            <div className="contact_right_inp_container">
              <label htmlFor="email">Your Email</label>
              <input
                className="contact_right_inp"
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => handleChange(e, "email")}
                name="email"
                value={email}
                required
              />
            </div>
            <div className="contact_right_inp_container ">
              <label htmlFor="message">Write your message here</label>
              <textarea
                className="contact_right_inp"
                name="message"
                rows="8"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="contact_right_inp_container_btn">
              <button
                type="button"
                onSubmit={onSubmit}
                onClick={handleSubscribed}
                className="contact_submit"
              >
                Submit Now
              </button>
            </div>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
