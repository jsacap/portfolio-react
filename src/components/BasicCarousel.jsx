import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
};

const BasicCarousel = () => {
    return (
        <Slider {...settings}>
            <div><h3>Slide 1</h3></div>
            <div><h3>Slide 2</h3></div>
            <div><h3>Slide 3</h3></div>
        </Slider>
    );
};

export default BasicCarousel;
