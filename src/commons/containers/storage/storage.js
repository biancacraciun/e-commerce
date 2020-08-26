import React from 'react';

import './storage.css';

const Storage = (props) => {
    return (
        <div className="storage">
            You have no items in your {props.component}.
        </div>  
    )
};

export default Storage;