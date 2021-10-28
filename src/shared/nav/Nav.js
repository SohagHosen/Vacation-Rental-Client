import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
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
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
