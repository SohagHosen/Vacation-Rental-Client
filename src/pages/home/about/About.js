import React from "react";
import "./about.css";
import about from "../../../assets/aboutus.jpg";
const About = () => {
  return (
    <div className="about container text-center my-5">
      <h1>About US</h1>
      <div className="row mt-4">
        <div className="col-lg-6 col-12">
          {" "}
          <img src={about} className="img-fluid " alt="" />
        </div>
        <div className="col-lg-6 col-12 text-start">
          <h2>About Vacation Rental</h2>
          <p>
            Vacation Rental provides online Hotel Bookings of hotels in
            Bangladesh and worldwide. Book cheap, budget and luxury hotels at
            great prices on best hotel booking site.
          </p>
          <p>
            By investing in technology that takes the friction out of travel,
            Vacation Rental seamlessly connects millions of travelers to
            memorable experiences, a variety of transportation options, and
            incredible places to stay – from homes to hotels, and much more. As
            one of the world’s largest travel marketplaces for both established
            brands and entrepreneurs of all sizes, Vacation Rental enables
            properties around the world to reach a global audience and grow
            their businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
