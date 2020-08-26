import React from 'react';

import './footer.css';
import Menu from '../../components/footer/footerMenu/footerMenu';
import ContactUs from '../../components/footer/contactUs/contactUs';
import FollowUs from '../../components/footer/followUs/followUs';
import JoinUs from '../../components/footer/joinUs/joinUs';
import Copyright from '../../components/footer/copyrightSection/copyright';

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
    )
};

export default Footer;