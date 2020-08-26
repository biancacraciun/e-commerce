import React, { Component } from 'react';

import "./slider.css";

class Slider extends Component {
    state = {
        slideCount: 1,
        isChanged: false,
    }

    increase = () => {
        const images = ['adidas-banner.jpg', 'ultraboost-banner.jpg', 'new-balance-fresh-foam-hierro-v5.jpg'];
        let index = this.state.slideCount;

        if(index === images.length - 1) {
            index = 0;
        } else {
            index++
        };

        this.setState({
            slideCount: index
        })
    };

    decrease = () => {
        const images = ['adidas-banner.jpg', 'ultraboost-banner.jpg', 'new-balance-fresh-foam-hierro-v5.jpg'];
        let index = this.state.slideCount;

        if(index < 1) {
            index = images.length - 1
        } else {
            index--
        };

        this.setState({
            slideCount: index 
        })
    }

    keyChangeHandler = (e) => {
        e = e || window.event;
        if(e.keyCode === 62) {
            this.increase()
        } else if(e.keyCode === 60) {
            this.decrease()
        }
    };

    render() {
        const images = ['adidas-banner.jpg', 'ultraboost-banner.jpg', 'new-balance-fresh-foam-hierro-v5.jpg'];

        return (
            <div className="slide-container">
                {images.map(img => {
                    if(this.state.slideCount === images.indexOf(img)) {
                        return <div className="slide" 
                                    key={img}
                                    style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}} 
                        />
                    } 
                })}

                <div className="changer">
                    <span role="button" className="arrow" onClick={this.decrease}>{"<"}</span>
                    <div className="bullet-section">
                        {images.map((img) => {
                            return <span key={img} role="button" className={`bullet ${this.state.slideCount === images.indexOf(img) ? 'is-active' : ''}`} />
                        })}
                    </div>
                    <span role="button" className="arrow" onClick={this.increase}>{">"}</span>
                </div>
            </div>
        );
    }   
};

export default Slider;