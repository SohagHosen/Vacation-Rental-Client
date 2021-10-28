import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-dark  text-white text-center">
      <div class="container p-4 pb-0">
        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div class="col-md-5 col-12">
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example27"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="text-center p-3 d-flex gap-2 justify-content-center">
        <p>© 2021 Copyright</p>
        <Link to="/" class="text-primary text-decoration-none">
          Vacation Rental
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
