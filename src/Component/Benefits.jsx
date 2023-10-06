import React from "react";

function Benefits() {
  const benefit = [
    {
      Row: "row mt-5",
      column: "col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      className: "benefit-item",
      className2: "benefit-under",
      image: "Group26.png",
      h5: "Consistent, Quality Web Development",
      p: "24/7 support that has serviced over 200 small businesses",
    },
    {
      row: "row",
      column: "col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      className: "benefit-2",
      className2: "benefit-under-2",
      image: "Group.png",
      h5: "Fractional Dev Team, Manager, and CTO",
      p: " Universal solutions: from quick fixes to website optimizationto strategic planning.",
    },
    {
      row: "row",
      column: "col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      className: "benefit-item",
      className2: "benefit-under-3",
      image: "Group94.png",
      h5: "Customer Control and Transparency",
      p: " A real-time, fully transparent dashboard that shows status updates and completion estimations.",
    },
  ];
  return (
    <div className="benefits">
      <div className="container">
        <h2 className="text-center">
          Our <strong>Benefits</strong>
        </h2>

        <div className="row">
          {benefit.map((ben) => (
            <div className={ben.column}>
              <div className={ben.className}>
                <div className={ben.className2}>
                  <img src={ben.image} />
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
