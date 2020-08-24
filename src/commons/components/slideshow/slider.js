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
        console.log(e)
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
                
                <p className="description">
                    The best running shoes are shoes that will be kind and gentle on your 
                    feet throughout any running exercise.
                    This benefit will reflect itself in its most striking way 
                    immediately after a workout, when the way your feet feel 
                    then is a good indication of whether you have the right pair 
                    of running shoes or not.
                </p>
            </div>
        );
    }   
};

export default Slider;