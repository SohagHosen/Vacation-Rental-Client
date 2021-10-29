import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  let { user, loading } = useAuth();
  if (loading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "200px" }}
      >
        <Spinner color="primary" type="grow">
          Loading...
        </Spinner>
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
