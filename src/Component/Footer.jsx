import React from "react";
import { Link } from "react-router-dom";
import { footers } from "./Footermenu";
import { linkfooters } from "./Footermenu";
function Footer() {
  const footer = footers;
  const linkfooter = linkfooters;
  return (
    <div>
      <div className="footer-back bg-dark mt-5">
        <div className="container">
          <div className="row">
            {footer.map((foot, index) => (
              <div key={index} className={foot.col}>
                <div className={foot.classimg}>
                  <img src={foot.image} alt="" />
                </div>
                <p className={foot.pclass}>{foot.p}</p>
              </div>
            ))}
            <div className="col-6">
              <div className="parent-anchor mt-5">
                <div className="anchor-1">
                  {linkfooter.map((wet, index) => (
                    <Link key={index} to="/navbar">
                      {wet.linkk}
                    </Link>
                  ))}
                </div>
                <div className="anchor-2">
                  {linkfooter.map((jet, index) => (
                    <Link key={index} to="/blogs">
                      {jet.link2}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
