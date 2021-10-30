import axios from "axios";
import React, { useEffect, useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import HeroSection from "./hero/HeroSection";
import Rooms from "./rooms/Rooms";
import { Spinner } from "reactstrap";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://evening-tor-67309.herokuapp.com/rooms")
      .then((response) => {
        setRooms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{ height: "500px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner
            style={{ height: "100px", width: "100px" }}
            color="primary"
          />
        </div>
      ) : (
        <>
          <HeroSection />
          <Rooms rooms={rooms} />
          <About />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
