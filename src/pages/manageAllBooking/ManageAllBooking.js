import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "reactstrap";
import noData from "../../assets/no-data.jpg";
import "./manage.css";
const ManageAllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => {
        setAllBookings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [status]);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      axios
        .delete(`http://localhost:5000/booking/cancel/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            const remaining = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  };
  const handleActive = (id) => {
    axios
      .patch(`http://localhost:5000/booking/status/${id}`, {
        status: "activate",
      })
      .then((response) => {
        console.log(response);
        if (response.data.matchedCount) {
          setStatus(!status);
        }
      })
      .catch((error) => console.log(error));
  };
  const handleDeactivate = (id) => {
    axios
      .patch(`http://localhost:5000/booking/status/${id}`, {
        status: "pending",
      })
      .then((response) => {
        console.log(response);
        if (response.data.matchedCount) {
          setStatus(!status);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {loading ? (
        <div
          style={{ height: "450px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner
            style={{ height: "100px", width: "100px" }}
            color="primary"
          />
        </div>
      ) : (
        <>
          {allBookings.length === 0 ? (
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid"
                style={{ height: "500px" }}
                src={noData}
                alt=""
              />
            </div>
          ) : (
            <div
              class="container-fluid my-5 manage text-center"
              style={{ minHeight: "450px" }}
            >
              <h1>Manage all Bookings</h1>
              <div class="table-responsive-lg mt-5">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Room ID</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBookings?.map((booking) => (
                      <tr key={booking._id}>
                        <th scope="row">{booking._id}</th>
                        <td>{booking.userName}</td>
                        <td>{booking.email}</td>
                        <td>{booking.date}</td>
                        <td>
                          {booking.status === "pending" ? (
                            <div className="d-flex gap-3">
                              <span class="position-relative">
                                {booking.status}
                                <span
                                  style={{ top: "13px", left: "-12px" }}
                                  class="position-absolute translate-middle p-2 bg-danger border border-light rounded-circle"
                                >
                                  <span class="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </span>
                              <button
                                onClick={() => handleActive(booking._id)}
                                className="border-0 bg-white text-success"
                              >
                                Activate
                              </button>
                            </div>
                          ) : (
                            <div className="d-flex gap-3">
                              <span class=" position-relative">
                                {booking.status}
                                <span
                                  style={{ top: "13px", left: "-12px" }}
                                  class="position-absolute translate-middle p-2 bg-success border border-light rounded-circle"
                                >
                                  <span class="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </span>
                              <button
                                onClick={() => handleDeactivate(booking._id)}
                                className="border-0 bg-white text-danger"
                              >
                                Deactivate
                              </button>
                            </div>
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(booking._id)}
                            className="btn btn-danger"
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ManageAllBooking;
