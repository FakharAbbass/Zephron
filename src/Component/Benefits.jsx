import React from "react";
import { benefits } from "./Benefitmenu";

function Benefits() {
  const benefit = benefits;
  return (
    <div className="benefits">
      <div className="container">
        <h2 className="text-center">
          Our <strong>Benefits</strong>
        </h2>

        <div className="row">
          {benefit.map((ben, index) => (
            <div key={index} className={ben.column}>
              <div className={ben.className}>
                <div className={ben.className2}>
                  <img src={ben.image} key={index} />
                  <h5>
                    <strong>{ben.h5}</strong>
                  </h5>
                  <p>{ben.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="design-4">
        <img src="Group28.png" alt="" />
      </div>
    </div>
  );
}

export default Benefits;
