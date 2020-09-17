import React from "react";

import "./join-us.css";

const JoinUs = () => {
  return (
    <div className="join-us">
      <h3>Join us</h3>
      <p className="motto-subscribe">
        Be a smart shopper! Join the world of eCommerce
      </p>
      <form action="/action_page.php" className="motto-subscribe">
        <input
          type="email"
          placeholder="Email Address"
          name="email-address"
          className="form-element"
        />
        <button type="submit" className="go-button">
          GO!
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
