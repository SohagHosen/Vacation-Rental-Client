import React from "react";
import { useHistory } from "react-router";
import page404 from "../../assets/404.jpg";
const NotFound = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="text-center my-5">
        <img style={{ height: "400px" }} src={page404} alt="" /> <br />
        <button onClick={handleHome} className="btn btn-primary">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
