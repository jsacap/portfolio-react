import React from 'react'
import { MdCurrencyBitcoin, MdOutlineCandlestickChart, } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { PiStrategy } from "react-icons/pi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';




const MarketExperience = () => {
    const iconSize = '30px';
    const settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 500,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        };     
      
  return (
    <>
    <section id='skills' className='skills section-bg'>

        <div className='container' data-aos='fade-up'>
            <div className='section-title'>
            <h2>TRADER & INVESTOR</h2>
            <p>
            Over 7 years of experience in FX and Commodity markets. Includes long-term stock investment 
            strategies, using methods like Discounted Cash Flow for determining intrinsic values, coupled 
            with Technical Analysis for optimal entry points. Portfolio is both self-funded and backed by 
            proprietary trading firms.                 
            </p>
            </div>

            <Slider {...settings}>
                <div>
                    <div className='skills-item'>
                    <MdCurrencyBitcoin size={iconSize} />
                    <p>Experience in trading and investing in major cryptocurrencies such as Bitcoin and Ethereum, as well as various altcoins.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <FaChartLine size={iconSize} />
                    <p>Active trader in FX and Commodities, focusing on a core selection of 10 FX pairs, Gold, and WTI Crude Oil.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <PiStrategy size={iconSize} />
                    <p>Expertise in developing, testing, and implementing robust trading strategies as part of my trading playbook.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <MdOutlineCandlestickChart size={iconSize} />
                    <p>Extensive experience in backtesting thousands of historical data to validate the edge of each trading strategy and asset over time.</p>
                    </div>
                </div>
                

                </Slider>
        </div>
        </section>
</>
  )
}

export default MarketExperience