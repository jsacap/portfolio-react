import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const bgImage = "url('/home/hero-bg.jpg')";

    useEffect(() => {
        const typed = new Typed('.typed', {
            strings: ["FX Trader", "Investor", "Full-Stack Developer", "Data Analyst", "Freelancer"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 2000
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="hero" className="home__hero route bg-image" style={{ backgroundImage: bgImage }}>
            <div className='overlay-itro'></div>
            <div className='home__hero-content display-table'>
                <div className='table-cell'>
                    <div className='container'>
                        <h1 className='home__hero-title mb-b'>Sancho Jr Alegre</h1>
                        <p className='home__hero-subtitle'>
                            <span className='typed'></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
