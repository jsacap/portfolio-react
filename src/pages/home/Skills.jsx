import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SiDjango, SiReact, SiJavascript, SiHtml5, SiCss3, SiStreamlit, SiNumpy, SiPlotly, SiPandas } from 'react-icons/si';
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";



const Skills = () => {
    const iconSize = '30px';
    const settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 500,
        pauseOnHover: true
      };
      

  return (
    <>
    <section id='skills' className='skills section-bg'>

        <div className='container' data-aos='fade-up'>
            <div className='section-title'>
            <h2>Full-Stack Development</h2>
            <p>
                Skills spans across the full spectrum of web development, encompassing front-end 
                and back-end technologies, database management, and API integration.
            </p>
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
                <div>
                    <div className='skills-item'>
                        <SiPandas size={iconSize} /> {/* Replace with actual icon if available */}
                        <p>Pandas - A powerful data analysis and manipulation library for Python.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <SiStreamlit size={iconSize} /> {/* Replace with actual icon if available */}
                        <p>Streamlit - An open-source app framework for Machine Learning and Data Science teams.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <SiNumpy size={iconSize} /> {/* Replace with actual icon if available */}
                        <p>NumPy - A fundamental package for scientific computing with Python.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <SiPlotly size={iconSize} /> {/* Replace with actual icon if available */}
                        <p>Plotly - A graphing library that makes interactive, publication-quality graphs online.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <DiDjango size={iconSize} /> {/* Replace with actual icon if available */}
                        <p>Django REST API - A powerful and flexible toolkit for building Web APIs with Django.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <BiLogoPostgresql size={iconSize} /> {/* Replace with actual icon if available */}
                        <p>PostgreSQL - A powerful, open source object-relational database system.</p>
                    </div>
                    </div>

                </Slider>
        </div>
        </section>
</>
  )
}
  

export default Skills