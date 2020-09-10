import React from "react";

import "./contact-us.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h3>Contact us</h3>
      <section>
        <span className="phone">PHONE:</span>
        <p className="info">0232.766.266</p>
      </section>

      <section>
        <span className="e-mail">EMAIL:</span>
        <p className="info">eCommerce.shop@gmail.com</p>
      </section>
    </div>
  );
};

export default ContactUs;
