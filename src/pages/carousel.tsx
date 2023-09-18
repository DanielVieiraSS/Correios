import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

import styles from "@/styles/painel.module.css"
export function  Carousel() {
    return (
        <ReactCarousel 
            className={styles.carrossel} 
            showIndicators={false} 
            showThumbs={false} 
            showStatus={false}
            showArrows={false}
            infiniteLoop
            autoPlay
            animationHandler={"fade"}
            transitionTime={1000}
            
        >


    <video src="https://www.youtube.com/watch?v=Bo1ra0hBbHs"></video>
    <video src="https://www.youtube.com/watch?v=Bo1ra0hBbHs"></video>
    <video src="https://www.youtube.com/watch?v=Bo1ra0hBbHs"></video> 
        </ReactCarousel>
    );
}

