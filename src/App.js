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

    <div
      style={{
        position: "relative",
      }}
    >
      <Design />
      <div
        style={{
          position: "absolute",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
