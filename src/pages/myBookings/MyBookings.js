import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./mybooking.css";
import noData from "../../assets/no-data.jpg";
const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/user/bookings/${user.email}`)
        .then((res) => {
          setBookings(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const cancelBooking = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      axios
        .delete(`http://localhost:5000/booking/cancel/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <>
      {bookings.length === 0 ? (
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{ height: "500px" }}
            src={noData}
            alt=""
          />
        </div>
      ) : (
        <div className="container booking text-center my-5">
          <h1 className=" mt-5">My Bookings</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
            {bookings?.map((booking) => (
              <div key={booking._id} className="col">
                <div className=" mb-3">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img
                        src={booking.img}
                        style={{ height: "200px", width: "100%" }}
                        className="img-fluid"
                        alt="..."
                      />
                    </div>
                    <div
                      className="col-md-6 text-start"
                      style={{ minHeight: "130px", height: "auto" }}
                    >
                      <div className="card-body pt-md-0 position-relative  h-100">
                        <h5 className="card-title">{booking.name}</h5>
                        <small className="text-muted">
                          {booking.date}
                        </small>{" "}
                        <br />
                        <button
                          onClick={() => cancelBooking(booking._id)}
                          className="btn btn-danger position-absolute bottom-0 start-10"
                        >
                          Cancel Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyBookings;
