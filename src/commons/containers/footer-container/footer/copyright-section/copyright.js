import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import './copyright.css';

const Copyright = () => {
    return (    
        <div className="copyright">
            <FontAwesomeIcon icon={faCopyright}/>
            <p>
                2020. All rights reserved.
            </p>
        </div>
    )
};

export default Copyright;