import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  let { user, loading } = useAuth();
  if (loading) {
    return (
      <div
        style={{ height: "450px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner style={{ height: "100px", width: "100px" }} color="primary" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
