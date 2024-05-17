import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import MyWork from "./Component/MyWork/MyWork";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Design from "./Component/Desing/Design";
const App = () => {
  return (
  
        <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
          <Design />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              overflow: "auto",
            }}
          >
            <Navbar style={{ height: "10vh", width: "100%" }} />
            <Hero style={{ height: "90vh", width: "100%" }} />
            <About style={{ height: "auto", width: "100%" }} />
            <Services style={{ height: "auto", width: "100%" }} />
            <MyWork style={{ height: "auto", width: "100%" }} />
            <Contact style={{ height: "auto", width: "100%" }} />
            <Footer style={{ height: "10vh", width: "100%" }} />
          </div>
        </div>
      );
    };
    
export default App;
