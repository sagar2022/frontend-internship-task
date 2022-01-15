import React from "react";

const Contact = () => {
  return (
    <>
      <section className="section" id="contact">
        <div className="section-title">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-form">
          <h4>Contact us</h4>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
        </div>
        <button className="contact-btn">Submit</button>
        <div className="contact-info">
          <h4>Connet with us</h4>
          <p>
            <strong>Email:- </strong>fakeemailid@gmail.com
          </p>
          <p>
            <strong>Phone:- </strong> +977-01-4534233, +977-9867546544
          </p>
          <p>
            <strong>Location:- </strong> Battisputali-21, Kathmandu, Nepal
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
