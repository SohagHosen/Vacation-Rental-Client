import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark  text-white text-center">
      <div className="container p-4 pb-0">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example27"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div className="text-center p-3 d-flex gap-2 justify-content-center">
        <p>© 2021 Copyright</p>
        <Link to="/" className="text-primary text-decoration-none">
          Vacation Rental
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
