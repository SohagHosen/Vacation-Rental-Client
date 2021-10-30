import React, { useEffect, useState } from "react";
import "./rooms.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  let history = useHistory();
  const handleClick = (id) => {
    history.push({
      pathname: "/bookingRoom",
      state: { id: id },
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="our-rooms text-center my-5">
      <h1 className="">Our Rooms</h1>
      <div className=" container my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {rooms?.map((room) => (
            <div key={room._id} className="col">
              <div className="card">
                <img
                  height="200px"
                  src={room.img}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text text-muted">{room.desc}</p>
                  <div>
                    <p>${room.price} / Per night</p>
                  </div>
                  <button
                    onClick={() => handleClick(room._id)}
                    className="btn w-100 bg-success text-white fw-bold"
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
