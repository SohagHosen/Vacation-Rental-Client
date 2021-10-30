import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const BookingRoom = () => {
  const { user } = useAuth();
  const [room, setRoom] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const location = useLocation();
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newRoom = { ...room };
    delete newRoom._id;
    const newData = { ...data, ...newRoom };
    newData.date = startDate;
    newData.roomId = room._id;
    newData.status = "pending";
    console.log(newData);
    axios
      .post("https://evening-tor-67309.herokuapp.com/room/booking", newData)
      .then(function (response) {
        console.log(response);
        if (response.data.insertedId) {
          history.push("/bookings");
        }
      });
  };

  useEffect(() => {
    const id = location.state.id;
    axios
      .get(`https://evening-tor-67309.herokuapp.com/room/${id}`)
      .then(function (response) {
        setRoom(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="container my-5">
      <div className="row">
        {room && (
          <div className="col-md-6 col-12">
            <div className=" mb-3">
              <div className="row g-0">
                <div className="col-12">
                  <img src={room.img} className="img-fluid" alt="..." />
                </div>
                <div className="col-12">
                  <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <p className="card-text">{room.desc}</p>
                    <p className="card-text">${room.price} / Per Night</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col-md-6 col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                defaultValue={user?.displayName}
                {...register("userName", { required: true })}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                defaultValue={user?.email}
                {...register("email", { required: true })}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Date
              </label>
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {room.name && (
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Room
                </label>
                <input
                  defaultValue={room.name}
                  {...register("room", { required: true })}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Book now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingRoom;
