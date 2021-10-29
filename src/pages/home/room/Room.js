import React from "react";

const Room = ({ img, name }) => {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
