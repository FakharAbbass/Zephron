import React from "react";
import { services } from "./Servicesmenu";

function Services() {
  const service = services;

  return (
    <div>
      <section className="detail-sections">
        <div className="container">
          <div className="row flex-column">
            {service.map((serve, index) => (
              <div key={index} className={serve.column}>
                <div className={serve.classdetail}>
                  <img src={serve.image} alt="" />
                </div>
                <div className={serve.class1}>
                  <div className={serve.class2}>
                    <img src={serve.image2} alt="" />
                  </div>
                  <div className={serve.class3}>
                    <h2>{serve.h2}</h2>
                    <p>{serve.p}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
