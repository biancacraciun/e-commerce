import React from 'react'; 

import Header from '../commons/containers/header/header';
import Categories from '../commons/components/categories/categories';
import Products from '../commons/containers/products/products';
import Slider from '../commons/components/slideshow/slider';
import RecentlyViewedSection from '../commons/containers/recentlyViewedSection/recentlyViewedSection';
import Footer from '../commons/containers/footer/footer';

import './home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className="landing-page" />
            
            <div className="display-products">
                <Categories />
                <Products />
            </div>

            <Slider />
            <RecentlyViewedSection />
            <Footer />
        </>
    )
};

export default Home;