import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter,
// } from "react-router-dom";

// import Header from "../../commons/containers/header/header";
import Products from "../../pages/Products/products";
import Slider from "../../commons/components/slideshow/slider";
import RecentlyViewedSection from "../../commons/containers/recently-viewed-section/recently-viewed-section";
// import Footer from "../../commons/containers/footer-container/footer";

import "./home.css";

const Home = (props) => {
  return (
    <>
      {/* <Header openSideDrawer={props.openSideDrawer} /> */}
      <div className="landing-page" />

      <div className="display-products">
        <Products />
      </div>

      <Slider />
      <RecentlyViewedSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
