import React from "react";

const Room = ({ img, name }) => {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>

          <button class="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
