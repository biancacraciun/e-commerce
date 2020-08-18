import React from 'react';

import { PhoneCall } from 'react-feather';

import './menu.css';

const menu = () => {
    return (
        <ul className="menu">
            <li className="dropdown-container">
                <a href="#" className="dropdown-btn"> Shop </a>
                <ul className="dropdown-content">
                    <li>
                        <a href="#"> Home </a>
                    </li>
                    <li>
                        <a href="#"> Products </a>
                    </li>
                    <li>
                        <a href="#"> Pages </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#"> Contact us </a>
            </li>
            <li>
                <a href="#"> Sign in </a>
            </li>
            <li>
                <a href="#"> Create an account </a>
            </li>
            <li className="phone-call">
                <PhoneCall color="white" size={20}/>
                <span>0232.766.266</span>
            </li>
        </ul>
    )
};

export default menu;