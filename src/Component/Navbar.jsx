import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { menuItems } from "./Navmenu";

function Navbar() {
  const [show, setShow] = useState(false);
  const menu = menuItems;

  return (
    <header className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flex-column">
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="nav-logo">
              <img src="2.png" alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                show ? "d-block" : "d-none"
              }`}
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav ms-auto" id="navbar">
                {menu.map((list, index) => (
                  <li key={index} className="nav-item">
                    <Link className="nav-link" to="/services" key={list.id}>
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="nav-button">
                <Button
                  id="button-nav"
                  className={`collapse navbar-collapse ${
                    show ? "d-none" : "d-none"
                  }`}
                  text="Get Started"
                ></Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
