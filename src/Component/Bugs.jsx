import React from "react";

function Bugs() {
  const bug = [
    {
      column: "detail mt-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      image: "Group 131.png",
    },
    {
      column: "detail mt-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      image: "Group 132.png",
    },
    {
      column: "detail-3 mt-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      image: "Group 133.png",
    },
  ];
  const text = [
    {
      col: "col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      textclass: "text",
      p: "Fixed Over ",
      p2: "10,000 bugs",
    },
    {
      col: "col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      textclass: "text-2",
      p: "Served Over ",
      p2: "200 clients",
    },
    {
      col: "col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4",
      textclass: "text",
      p: " Managed 100+ Servers",
      p2: "100+ Servers",
    },
  ];
  return (
    <div>
      <section className="details mt-5">
        <div className="container">
          <div className="banner-detail row">
            {bug.map((set) => (
              <div className={set.column}>
                <img src={set.image} />
              </div>
            ))}
            <div className="banner-text row text-center mb-3">
              {text.map((tex) => (
                <div className={tex.col}>
                  <p className={tex.textclass}>
                    {tex.p}
                    <br></br>
                    <strong>{tex.p2}</strong>
                  </p>
                </div>
              ))}
            </div>
            {/* <div className="detail mt-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <img src="Group 131.png" alt="" />
            </div>
            <div className="detail mt-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <img src="Group 132.png" alt="" />
            </div>
            <div className="detail-3 mt-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <img src="Group 133.png" alt="" />
            </div>
            <div className="banner-text row text-center mb-3">
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <p className="text">
                  Fixed Over <br />
                  <strong>10,000 bugs</strong>
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <p className="text-2">
                  Served Over <br />
                  <strong>200 clients</strong>
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <p className="text">
                  Managed <br />
                  <strong>100+ Servers</strong>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bugs;
