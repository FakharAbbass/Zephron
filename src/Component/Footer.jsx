import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const footer = [
    {
      col: "footer-logo col-6 mt-5 text-center",
      classimg: "footer-img",
      image: "Layer 1.png",
      pclass: "copy-right text-center mt-4",
      p: "Copyright 2023 Zephron. All rights reserved.",
    },
  ];
  const linkfooter = [
    {
      linkk: "Services",
    },
    { linkk: "How it Works" },
    { linkk: "How it Works" },
    { linkk: "Pricing" },
    { linkk: "Blogs" },
    { link2: "Client login" },
    { link2: "Get Started" },
    { link2: "Terms & conditions" },
    { link2: "Privacy policy" },
  ];
  return (
    <div>
      <div className="footer-back bg-dark mt-5">
        <div className="container">
          <div className="row">
            {footer.map((foot) => (
              <div className={foot.col}>
                <div className={foot.classimg}>
                  <img src={foot.image} alt="" />
                </div>
                <p className={foot.pclass}>{foot.p}</p>
              </div>
            ))}
            <div className="col-6">
              <div className="parent-anchor mt-5">
                <div className="anchor-1">
                  {linkfooter.map((wet) => (
                    <Link to="/navbar">{wet.linkk}</Link>
                  ))}
                </div>
                <div className="anchor-2">
                  {linkfooter.map((jet) => (
                    <Link to="/blogs">{jet.link2}</Link>
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
