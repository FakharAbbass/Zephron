import React from "react";

function Detail() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-4 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-column justify-content-center align-items-start">
          <div className="parent-zehphron">
            <div className="title-zephron">
              <p>
                <strong>Meet Zephron</strong>
              </p>
            </div>
            <div className="title">
              <p>
                Software and Web Development
                <strong>To Accelerate Your Growth</strong>
              </p>
            </div>
            <div className="title-desc">
              <p>
                Our agency-subscription model allows innovative companies
                deliver radical results throughout their journey
              </p>
            </div>
            <div className="desc-button">
              <button>Discover more</button>
            </div>
          </div>
        </div>
        <div className=" col-sm-4 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img src="Group 25.png" alt="" className="desp-img" />
        </div>
      </div>
    </div>
  );
}

export default Detail;
