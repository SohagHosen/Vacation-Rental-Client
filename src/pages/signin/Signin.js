import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signIn, setUser, setLoading } = useAuth();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleSignin = () => {
    signIn()
      .then((result) => {
        history.replace(from);
        setUser(result.user);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="d-flex align-items-center justify-content-center my-5">
      <div
        style={{
          height: "400px",
          width: "500px",
          backgroundColor: "rgb(226, 226, 226)",
        }}
        className="d-flex align-items-center justify-content-center rounded"
      >
        <button onClick={handleSignin} className="btn btn-danger">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Signin;
