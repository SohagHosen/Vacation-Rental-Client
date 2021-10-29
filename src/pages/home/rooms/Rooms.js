import React, { useEffect, useState } from "react";
import "./rooms.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  let history = useHistory();
  const handleClick = () => {
    history.push("/bookingRoom");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/hotels")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="our-rooms text-center my-5">
      <h1 className="">Our Rooms</h1>
      <div className=" container my-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {rooms?.map((room) => (
            <div class="col">
              <div class="card">
                <img
                  height="200px"
                  src={room.img}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{room.name}</h5>
                  <p class="card-text text-muted">{room.desc}</p>
                  <div>
                    <p>${room.price} / Per night</p>
                  </div>
                  <button
                    onClick={handleClick}
                    class="btn w-100 bg-success text-white fw-bold"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
