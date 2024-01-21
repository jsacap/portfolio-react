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

        <div className='container' data-aos='fade-up'>
            <div className='section-title'>
            <h2>Full-Stack Development</h2>
            <p>
            Skills span across the full spectrum of web development, encompassing front-end and back-end technologies, 
            database management, API integration, as well as advanced techniques for data analysis and visualization.
            </p>
            </div>

            <Slider {...settings}>
                <div>
                    <div className='skills-item'>
                    <SiDjango size={iconSize} />
                    <p><strong>Django</strong> - A high-level Python web framework ideal for backend development. Used for clean, pragmatic design and provides a comprehensive suite of tools to build scalable web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiReact size={iconSize} />
                    <p><strong>React</strong> A highly efficient JavaScript library for building dynamic and responsive user interfaces. React's component-based architecture streamlines the development of complex, interactive web applications.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiJavascript size={iconSize} />
                    <p><strong>JavaScript</strong> A cornerstone of modern web development, JavaScript is an essential language for creating interactive and dynamic user experiences on the web. Its versatility extends from front-end browser scripting to back-end server applications.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiHtml5 size={iconSize} />
                    <p><strong>HTML5</strong> The latest standard of HTML, offering new semantic elements and APIs for building modern, rich web experiences. HTML5 is fundamental for structuring the content of web applications and websites.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                    <SiCss3 size={iconSize} />
                    <p><strong>CSS3</strong> An advanced version of CSS, it brings new features and capabilities to web design, allowing for more sophisticated styling, animations, and responsive layouts.</p>
                    </div>
                </div>
                <div>
                    <div className='skills-item'>
                        <SiPandas size={iconSize} /> {/* Replace with actual icon if available */}
                        <p><strong>Pandas</strong> A versatile and powerful data analysis library for Python, perfect for data manipulation, cleaning, and exploration. Pandas is widely used in data science for its DataFrame functionality.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <SiStreamlit size={iconSize} /> {/* Replace with actual icon if available */}
                        <p><strong>Streamlit</strong> A revolutionary open-source app framework designed for Machine Learning and Data Science. Streamlit simplifies the process of turning data scripts into shareable web apps.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <SiNumpy size={iconSize} />
                        <p><strong>NumPy</strong> A foundational package for scientific computing in Python. NumPy offers powerful array objects, and is central to numerical computations in Python ecosystems.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <SiPlotly size={iconSize} /> {/* Replace with actual icon if available */}
                        <p><strong>Plotly</strong> - A versatile graphing library that supports interactive, publication-quality charts and graphs. Widely used for data visualization in both Python and JavaScript environments.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <DiDjango size={iconSize} /> {/* Replace with actual icon if available */}
                        <p><strong>Django REST API</strong> - A robust toolkit for building Web APIs with Django. It's known for its flexibility and power in creating scalable and maintainable web services.</p>
                    </div>
                    </div>
                    <div>
                    <div className='skills-item'>
                        <BiLogoPostgresql size={iconSize} /> {/* Replace with actual icon if available */}
                        <p><strong>PostgreSQL</strong> - An advanced, open source object-relational database system, known for its reliability, robustness, and performance in handling complex data operations.</p>
                    </div>
                </div>

                </Slider>
        </div>
        </section>
</>
  )
}
  

export default Skills