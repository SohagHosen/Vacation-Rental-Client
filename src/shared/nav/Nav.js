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
      <Navbar dark color="dark" expand="md">
        <NavbarToggler
          className="navbar-toggler-right"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link className="navbar-brand" to="/">
          Vacation Rental
        </Link>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink exact className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              {user && (
                <>
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
                  <NavItem>
                    <NavLink className="nav-link" to="/addNewRoom">
                      Add new Room
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Nav>
          <NavbarText>
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
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
