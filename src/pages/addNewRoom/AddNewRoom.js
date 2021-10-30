import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addNewRoom.css";
const AddNewRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://evening-tor-67309.herokuapp.com/room/new", data)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          alert("Room added successfully");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container my-5 new-room text-center">
      <h1>Add a new Room</h1>
      <form className="mt-5 text-start" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Room Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Description
          </label>
          <textarea
            {...register("desc", { required: true })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Image URL
          </label>
          <input
            {...register("img", { required: true })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewRoom;
