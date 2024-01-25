import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SiDjango, SiReact, SiHtml5, SiCss3, SiStreamlit, SiNumpy, SiPlotly, SiPandas, SiTypescript, SiScikitlearn  } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandPython } from "react-icons/tb";
import { HStack } from '@chakra-ui/react';
import { FaCss3, FaNode, FaGithub } from 'react-icons/fa'
import { AiFillHtml5, AiTwotoneHtml5 } from "react-icons/ai";




const Skills = () => {
    const iconSize = '30px';
    const settings = {
        dots: true,
        infinite: true,
        speed: 7000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 100,
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

        <div className='container' data-aos='fade-up' data-aos-duration='7000'>
            <div className='section-title'>
            <h2>Full-Stack Developer</h2>
            <p>
                Skills cover a wide range of web development and data science, including front-end and back-end technologies, 
                database management, API integration, as well as advanced techniques for analysing and visualising data.
            </p>
            </div>

            <Slider {...settings}>
                <div>
                    <div className='skills-item'>
                        <HStack justify='center'>
                            <TbBrandPython size={iconSize} />
                            <SiDjango size={iconSize} />
                            <BiLogoPostgresql size={iconSize} />
                        </HStack>
                    <p><strong>Python, Django & PostgreSQL</strong> - Python for versatile programming, Django for efficient backend development, and PostgreSQL for robust database management.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                        <HStack justify='center' mr='4'>
                            <SiReact size={iconSize} />
                            <IoLogoJavascript size={iconSize} />
                            <SiTypescript size={iconSize} />
                            <FaNode size={iconSize} />
                    </HStack>
                    <p><strong>React, JavaScript, TypeScript & Node</strong> - A powerful combination for full-stack web development. React and JavaScript for the frontend, TypeScript for error-free code, and Node for the backend.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <HStack justify='center'>
                        <IoLogoJavascript size={iconSize} />
                        <AiFillHtml5 size={iconSize} />
                        <FaCss3 size={iconSize} />
                    </HStack>
                    <p><strong>HTML, CSS & JavaScript</strong> - The foundational trio for web development. HTML for structure, CSS for styling, and JavaScript for interactivity.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <HStack justify='center'>
                        <DiDjango size='60px' />
                    </HStack>
                    <p><strong>Django REST</strong> - Specialized in using Django REST framework for building scalable and maintainable APIs.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <HStack justify='center'>
                        <FaGithub size={iconSize} />
                    </HStack>
                    <p><strong>Git</strong> - Proficient in Git for version control and GitHub for source code management and collaboration, essential tools for modern software development workflows.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                        <HStack justify='center'>
                            <SiStreamlit size={iconSize} />
                            <SiNumpy size={iconSize} />
                            <SiPlotly size={iconSize} />
                            <SiPandas size={iconSize} />
                            <SiScikitlearn size={iconSize} />
                        </HStack>
                    <p><strong>Streamlit, NumPy, Plotly, Pandas & Scikit-Learn</strong> - A suite of Python libraries for data analysis, visualization, and machine learning.</p>
                    </div>
                </div>
                

                </Slider>
        </div>
        </section>
</>
  )
}
  

export default Skills