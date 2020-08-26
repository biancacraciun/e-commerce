import React from 'react';

import './joinUs.css';

const JoinUs = () => {
    return (
        <div className="join-us">
            <h3>Join us</h3>
            <p id="motto">
                Be a smart shopper! 
                Join the world of eCommerce 
            </p>
            <form action="/action_page.php" id="subscribe">
                <input type="email" placeholder="Email Address" name="email-address" className="form-element" />
                <button type="submit" className="form-element">GO!</button>
            </form>
        </div>
    )
};

export default JoinUs;