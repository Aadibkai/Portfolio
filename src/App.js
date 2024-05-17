import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Hero />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="services" element={<Services />} />
    //     <Route path="work" element={<MyWork />} />
    //     <Route path="contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
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
