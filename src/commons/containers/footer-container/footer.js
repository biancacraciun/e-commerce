import React from "react";

import "./footer.css";
import Menu from "./footer/footer-menu/footer-menu";
import ContactUs from "./footer/contact-us/contact-us";
import FollowUs from "./footer/follow-us/follow-us";
import JoinUs from "./footer/join-us/join-us";
import Copyright from "./footer/copyright-section/copyright";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="top-footer-section">
        <img src="Sport-logo-with-sneakers.png" alt="banner" name="banner" />
        <Menu />
        <ContactUs />
        <FollowUs />
        <JoinUs />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
