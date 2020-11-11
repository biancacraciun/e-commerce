import React, { useState } from "react";

import Products from "../../pages/Products/products";
import Slider from "../../commons/components/slideshow/slider";
import RecentlyViewedSection from "../../commons/containers/recently-viewed-section/recently-viewed-section";

import "./home.css";

const Home = (props) => {
  return (
    <div>
      <div className="landing-page" />

      <Products />

      <Slider />
      <RecentlyViewedSection />
    </div>
  );
};

export default Home;
