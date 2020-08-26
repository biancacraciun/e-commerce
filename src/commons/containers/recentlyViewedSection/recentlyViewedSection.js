import React from 'react';

import RecentlyViewedProduct from '../../components/recentlyViewedProduct/recentlyViewedProduct';

import './recentlyViewedSection.css';

const RecentlyViewedSection = () => {
    return (
        <div className="recently-section">
            <span id="section-title">Recently Viewed</span>
            <RecentlyViewedProduct />
        </div>
    )
};

export default RecentlyViewedSection;