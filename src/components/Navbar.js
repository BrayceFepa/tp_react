import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white fixed-top mt-5 px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          COLO<span className="text-danger">SHOP</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PROMOTION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PAGES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="icon-shop">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span id="counter">2</span>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
