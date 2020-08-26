import React from 'react';

import { Facebook, Twitter, Instagram } from 'react-feather';

import './followUs.css';

const FollowUs = () => {
    return (
        <div className="follow-us">
            <h3>Follow us</h3>
            <section className="social">
                <Facebook color="white" size={15}/>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </section>

            <section className="social">
                <Twitter color="white" size={15} />
                <a href="https://twitter.com" target="_blank" rel="noopener norefferer">Twitter</a>
            </section>

            <section className="social">
                <Instagram color="white" size={15} />
                <a href="https://www.instagram.com/?hl=ro" target="_blank" rel="noopener norefferer">Instagram</a>
            </section>
        </div>
    )
};

export default FollowUs;