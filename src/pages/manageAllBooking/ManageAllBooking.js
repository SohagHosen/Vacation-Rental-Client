import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageAllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setAllBookings(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(allBookings);
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
  return (
    <div class="container-fluid" style={{ minHeight: "450px" }}>
      <div class="table-responsive">
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
                <td>{booking.status}</td>
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
  );
};

export default ManageAllBooking;
