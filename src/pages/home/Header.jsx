import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const bgImageUrl = '/home/bgimage.png';
    const [imageLoaded, setImageLoaded] = useState(false);
    const tinyImage = '/home/blur.png';

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true); 
        };
        img.src = bgImageUrl; 
    }, [bgImageUrl]);

    useEffect(() => {
        const typed = new Typed('.typed', {
            strings: ["Full-Stack Developer", "FX Trader", "Investor", "Data Analyst", "Freelancer"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 2000
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const heroStyle = {
        backgroundImage: `url(${imageLoaded ? bgImageUrl : tinyImage})`
    };

    return (
        <>
            <div id="hero" className="home__hero route bg-image" style={heroStyle}>
                <div className='overlay-itro'></div>
                <div className='home__hero-content display-table'>
                    <div className='table-cell' data-aos='zoom-in-down' data-aos-once='true' data-aos-duration='5000' data-aos-easing='ease-in'>
                        <div className='container'>
                            <h1 className='home__hero-title mb-b'>Sancho Jr Alegre</h1>
                            <p className='home__hero-subtitle'>
                                <span className='typed'></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
