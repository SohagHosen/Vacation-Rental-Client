import React from "react";
import "./hero.css";
const HeroSection = () => {
  return (
    <header className="hero d-flex justify-content-center  align-items-center">
      <article>
        <h2 className="display-4 fw-bold text-center">
          Welcome to Vacation Rental
        </h2>
        <p className="text-center fs-2 fw-bold">Hotels and Resorts</p>
      </article>
    </header>
  );
};

export default HeroSection;
