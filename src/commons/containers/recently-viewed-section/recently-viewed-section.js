import React from "react";

import RecentlyViewedProduct from "../../components/recently-viewed-product/recently-viewed-product";

import "./recently-viewed-section.css";

const RecentlyViewedSection = () => {
  return (
    <div className="recently-section">
      <span id="section-title">Recently Viewed</span>
      <RecentlyViewedProduct />
    </div>
  );
};

export default RecentlyViewedSection;
