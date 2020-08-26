import React, { useState } from 'react';

import StarRating from '../../components/starRating/starRating';
import { Heart, ShoppingBag } from 'react-feather';

import './recentlyViewedProduct.css';

const RecentlyViewed = ({img, title, price}) => {
    const [favourite, setFavourite] = useState(false);

    const addToFavourites = () => {
        setFavourite(!favourite)
    };

    return (
        <div className="recently-product">
            <img src={img} alt={title} name={title} />

            <span className="add-to-shopping-bag">
                <ShoppingBag color="white" size={20} />
            </span>

            <div className="product-details">
                <section className="title favourite">
                    <p>{title}</p>
                    <Heart size={15} color={favourite ? "red" : "#B6B9C0"} className="icon" onClick={addToFavourites}/>
                </section>
                <StarRating className="icon"/>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

RecentlyViewed.defaultProps = {
    img: 'nike-zoom-pegasus-turbo-35.jpg',
    title: 'Nike Zoom Pegasus 35 Turbo',
    price: '$180.00'
};

export default RecentlyViewed;