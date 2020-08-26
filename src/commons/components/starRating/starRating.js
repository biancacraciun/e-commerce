import React, { useState } from 'react';

import { Star } from 'react-feather';

import './starRating.css';

const StarRating = () => {
    const [rating, setRating] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1; 
                return (
                    <label key={ratingValue}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}/>
                        <Star className="star" color={`${ratingValue <= rating ? '#ffc107' : '#B6B9C0'}`} size={13}/>
                    </label>  
                )
            })}
        </div>
    )
};

export default StarRating;