import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Header from "../../commons/containers/header/header";
import Categories from "../../commons/components/categories/categories";
import Products from "../../commons/containers/products/products";
import Slider from "../../commons/components/slideshow/slider";
import RecentlyViewedSection from "../../commons/containers/recently-viewed-section/recently-viewed-section";
import Footer from "../../commons/containers/footer-container/footer";
import SignIn from "../../pages/Sign-In/sign-in";

import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="landing-page" />

      <div className="display-products">
        <BrowserRouter>
          <Route exact path="/">
            <Categories />
            <Products />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
        </BrowserRouter>
      </div>

      <Slider />
      <RecentlyViewedSection />
      <Footer />
    </>
  );
};

export default Home;
