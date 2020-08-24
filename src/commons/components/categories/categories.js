import React from 'react';

import './categories.css';

const Categories = () => {
    return (
        <div className="all-categories">
            <span id="shop-by" className="common-margin">SHOP BY:</span>
            <nav className="options common-margin">
                <ul id="options-list">
                    <li>
                        <input type="checkbox" id="new-arrivals" name="new-arrivals" value="New arrivals" />
                        <span className="new-checkbox" />
                        <label htmlFor="new-arrivals"> New arrivals </label>
                    </li>
                    <li>
                        <input type="checkbox" id="men" name="men" value="Men" />
                        <span className="new-checkbox" />
                        <label htmlFor="men"> Men </label> 
                    </li>
                    <li>
                        <input type="checkbox" id="women" name="women" value="Women" />
                        <span className="new-checkbox" />
                        <label htmlFor="women"> Women </label>
                    </li>
                    <li>
                        <input type="checkbox" id="boys" name="boys" value="Boys" />
                        <span className="new-checkbox" />
                        <label htmlFor="boys"> Boys </label>
                    </li>
                    <li>
                        <input type="checkbox" id="girls" name="girls" value="Girls" />
                        <span className="new-checkbox" />
                        <label htmlFor="girls"> Girls </label>
                    </li>
                    <li>
                        <input type="checkbox" id="shoes" name="shoes" value="Shoes" />
                        <span className="new-checkbox" />
                        <label htmlFor="shoes"> Shoes </label>
                    </li>
                    <li>
                        <input type="checkbox" id="clothes" name="chlotes" value="Clothes" />
                        <span className="new-checkbox" />
                        <label htmlFor="clothes"> Clothes </label> 
                    </li>
                    <li>
                        <input type="checkbox" id="accessories" name="accessories" value="Accessories" />
                        <span className="new-checkbox" />
                        <label htmlFor="accessories"> Accessories </label>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Categories;