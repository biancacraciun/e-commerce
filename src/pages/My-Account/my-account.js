import React from "react";
import { Link } from "react-router-dom";
import Card from "../../commons/util/components/cards/card";
import "./my-account.css";

const MyAccount = () => {
  return (
    <div className="my-account">
      <section className="account-information">
        <p className="titles" role="subtitle">
          Account Information
        </p>
        <Card title="CONTACT INFORMATION" change="Change Password" />
      </section>
      <section className="address-book">
        <div className="cards-title">
          <p className="titles" role="subtitle">
            Address Book
          </p>
          <Link to="/" className="address-manager">
            Manage Addresses
          </Link>
        </div>
        <div className="cards">
          <Card
            title="DEFAULT BILING ADDRESS"
            more="Address"
            data="You have not set a default billing address."
          />
          <Card
            title="DEFAULT SHIPPING ADDRESS"
            more="Address"
            data="You have not set a default shipping address."
          />
        </div>
      </section>
    </div>
  );
};

export default MyAccount;
