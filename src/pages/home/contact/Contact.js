import React from "react";
import contact from "../../../assets/contact.jpg";
import useAuth from "../../../hooks/useAuth";
import "./contact.css";
const Contact = () => {
  const { user } = useAuth();
  return (
    <div className="contact container text-center my-5">
      <h1>Contact US</h1>
      <div className="row mt-4">
        <div className="col-lg-6 col-12 text-start">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Type your massage here...
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
          <button className="w-100 btn btn-success fw-bold">Submit</button>
        </div>
        <div className="col-lg-6 col-12 ">
          <img src={contact} className="img-fluid " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
