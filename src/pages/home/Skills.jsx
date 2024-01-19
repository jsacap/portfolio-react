import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SiDjango, SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const Skills = () => {
    const iconSize = '30px';
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
      

  return (
    <>
    <section id='skills' className='skills section-bg'>

        <div className='container' data-aos='fade-up'>
            <div className='section-title'>
            <h2>Full-Stack Development</h2>
            <p>Developer skills for both frontend and backend technologies as well as database and APIs.</p>
            </div>

            <Slider {...settings}>
                <div>
                    <div className='skills-item'>
                    <SiDjango size={iconSize} />
                    <p>Django - High-level Python web framework that encourages rapid development.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiReact size={iconSize} />
                    <p>React - A JavaScript library for building user interfaces.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiJavascript size={iconSize} />
                    <p>JavaScript - One of the core technologies of the World Wide Web.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiHtml5 size={iconSize} />
                    <p>HTML5 - Standard markup language for documents designed to be displayed in a web browser.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiCss3 size={iconSize} />
                    <p>CSS3 - Style sheet language used for describing the presentation of a document written in a markup language.</p>
                    </div>
                </div>
                </Slider>
        </div>
        </section>
</>
  )
}
  

export default Skills