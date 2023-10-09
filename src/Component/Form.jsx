import React from "react";

function Form() {
  return (
    <div>
      <section className="form">
        <div className="container">
          <div className="row">
            <div className="form-img col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <img src="Group 127.png" alt="" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="form-write">
                <h2>Write To us</h2>
                <p>
                  <strong>Get the thing you want</strong>
                </p>
              </div>

              <div className="form-inputs">
                <div>
                  <label>Name</label> <br />
                  <input type="text" name="name" />
                </div>
                <div className="input-2">
                  <label>Email</label> <br />
                  <input type="text" />
                </div>
              </div>
              <div className="text-area">
                <label>How can we help you</label> <br />
                <textarea name="" id="" cols="20" rows="6"></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
