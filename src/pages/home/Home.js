import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import HeroSection from "./hero/HeroSection";
import Rooms from "./rooms/Rooms";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Rooms />
      <About />
      <Contact />
    </>
  );
};

export default Home;
