import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import useAuth from "../../hooks/useAuth";

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);
  const handleLogin = () => {
    history.push("/signin");
  };
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link className="navbar-brand" to="/">
          Vacation Rental
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse
          className="d-flex justify-content-between"
          isOpen={isOpen}
          navbar
        >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/bookings">
                My Bookings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/manageAllBooking">
                Manage All Bookings
              </NavLink>
            </NavItem>
          </Nav>
          {user ? (
            <div className="d-flex gap-2">
              <NavbarText>{user?.displayName}</NavbarText>
              <button onClick={logout} className="btn btn-danger">
                {" "}
                Log out
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="btn btn-success">
              {" "}
              Login
            </button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
