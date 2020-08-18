import React from 'react';

import './categories.css';

const categories = () => {
    return (
        <div className="all-categories">
            <span id="shop-by">SHOP BY:</span>
            <nav className="options">
                <ul>
                    <li>
                        <input type="checkbox" id="new-arrivals" name="new-arrivals" value="New arrivals" />
                        <span></span>
                        <label htmlFor="new-arrivals"> New arrivals </label>
                    </li>
                    <li>
                        <input type="checkbox" id="men" name="men" value="Men" />
                        <span></span>
                        <label htmlFor="men"> Men </label> 
                    </li>
                    <li>
                        <input type="checkbox" id="women" name="women" value="Women" />
                        <span></span>
                        <label htmlFor="women"> Women </label>
                    </li>
                    <li>
                        <input type="checkbox" id="boys" name="boys" value="Boys" />
                        <span></span>
                        <label htmlFor="boys"> Boys </label>
                    </li>
                    <li>
                        <input type="checkbox" id="girls" name="girls" value="Girls" />
                        <span></span>
                        <label htmlFor="girls"> Girls </label>
                    </li>
                    <li>
                        <input type="checkbox" id="shoes" name="shoes" value="Shoes" />
                        <span></span>
                        <label htmlFor="shoes"> Shoes </label>
                    </li>
                    <li>
                        <input type="checkbox" id="clothes" name="chlotes" value="Clothes" />
                        <span></span>
                        <label htmlFor="clothes"> Clothes </label> 
                    </li>
                    <li>
                        <input type="checkbox" id="accessories" name="accessories" value="Accessories" />
                        <span></span>
                        <label htmlFor="accessories"> Accessories </label>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default categories;