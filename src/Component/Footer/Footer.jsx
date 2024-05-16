import React from "react";
import "./Footer.css";

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "abf6f513-c6e6-4a94-8375-3c087c25ee4c");

    try {
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
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
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
            <div className="footer-email-input">
              <img style={{ height: "26px" }} src="./img/person.png" alt="" />
              <input type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <button type="submit" className="footer-subscribe">
              Subscribe
            </button>
          </form>
          {result && <p className="form-result">{result}</p>}
        </div>
      </div>
      <hr />
      <div className="footer-botom">
        {/* <p className="footer-bottom-left">@2025 Adib Kazi. All rights reserved.</p> */}
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
            <img src="./img/linkedin.png" alt="" />
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
