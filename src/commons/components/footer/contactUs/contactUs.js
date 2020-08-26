import React from 'react';

import './contactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h3>Contact us</h3>
            <section className="phone">
                <span>PHONE:</span>
                <p className="info">
                    0232.766.266
                </p>
            </section>

            <section className="email">
                <span>EMAIL:</span>
                <p className="info">
                    eCommerce.shop@gmail.com
                </p>
            </section>
        </div>
    )
};

export default ContactUs;