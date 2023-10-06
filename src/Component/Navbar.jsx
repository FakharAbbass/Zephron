import React, { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";

function Navbar() {
  const [show, setShow] = useState(false);
  const menu = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Contact" },
  ];
  return (
    <section className="main">
      <div className="container">
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
                  <li className="nav-item">
                    {menu.map((list) => (
                      <Link className="nav-link" to="/services" key={list.id}>
                        {list.name}
                      </Link>
                    ))}
                  </li>
                </ul>
                <div className="nav-button">
                  <button
                    id="button-nav"
                    className={`collapse navbar-collapse ${
                      show ? "d-none" : "d-none"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Detail></Detail>
    </section>
  );
}

export default Navbar;
