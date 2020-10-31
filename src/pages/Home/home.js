import React, { useState } from "react";

import Products from "../../pages/Products/products";
import Slider from "../../commons/components/slideshow/slider";
import RecentlyViewedSection from "../../commons/containers/recently-viewed-section/recently-viewed-section";
// import Footer from "../../commons/containers/footer-container/footer";

import "./home.css";

const Home = (props) => {
  return (
    <>
      <div className="landing-page" />

      <div className="display-products">
        <Products />
      </div>

      <Slider />
      <RecentlyViewedSection />
    </>
  );
};

export default Home;
