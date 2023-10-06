import React from "react";

function Services() {
  const service = [
    {
      column: "col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mt-5",
      classdetail: "detail-no",
      image: "01.png",
      class1: "parent-sec-1 d-flex",
      class2: "sec-img",
      image2: "DaaS Graphic.png",
      class3: "sec-text mt-5",
      h2: "Development-as-a-Service (DaaS)",
      p: "Never worry about unreliable contractors and always have access to professional web development and troubleshooting services. View your service utilization, request status, and more through our customer doshboard",
    },
    {
      column:
        "second-sec col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mt-5",
      classdetail: "detail-no",
      image: "02.png",
      class1: "parent-sec-2 d-flex text-center",
      class2: "sec-img-2",
      image2: "OBJECTS.png",
      class3: "sec-text-2 text-center mt-5",
      h2: "Trained Account Admins",
      p: "Maximize your operational efficiency with expert diagnosis and requirement intake while minimizing miscommunication and delays with dedicated account admins.",
    },

    {
      column: "col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mt-5",
      classdetail: "detail-no",
      image: "03.png",
      class1: "parent-sec-1 text-center d-flex",
      class2: "sec-img-3",
      image2: "Group 40.png",
      class3: "sec-text-3 mt-5",
      h2: "Proprietary Customer Dashboard",
      p: "Intuitively submit requests and monitor its status with our in-house dashboard portal. Whatever your need is, we will take core of it.",
    },
  ];

  return (
    <div>
      <section className="detail-sections">
        <div className="container">
          <div className="row flex-column">
            {service.map((serve) => (
              <div className={serve.column}>
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
