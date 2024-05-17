import React from "react";
import "./Contact.css";
import "../Desing/Design";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [result, setResult] = React.useState("");
  const notify = () => toast("Submite Sucesfully");
 


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abf6f513-c6e6-4a94-8375-3c087c25ee4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src="" alt="" />
        </div>
        <div style={{ display: "flex" }}>
          <div className="contact-section">
            <div className="contact-left">
              <h1>Let's talk</h1>
              <p>
                I am currently available to take on new projects, so feel free
                to send me a message about anything that you want me to work on.
                You can contact me anytime.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <img src="./img/email.png" alt="Email" />
                  <p>adibkazi1106@gmail.com</p>
                </div>
                <div className="contact-detail">
                  <img
                    style={{
                      backgroundColor: "white",
                      height: "20px",
                      width: "20px",
                    }}
                    src="./img/phone-call.png"
                    alt="Phone"
                  />
                  <p>8007633650</p>
                </div>
                <div className="contact-detail">
                  <img
                    style={{
                      backgroundColor: "white",
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
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>
            <button   onClick={notify} type="submit" className="contact-submit">
              Submit Now
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
