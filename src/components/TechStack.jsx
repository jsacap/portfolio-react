import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Heading } from '@chakra-ui/react';
import { FaPython, FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiDjango, SiPandas, SiNumpy, SiStreamlit, SiPlotly, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from 'react-icons/di';

const iconSize = '50px';

const technologies = [
    { icon: <FaReact size={iconSize} />, name: 'React' },
    { icon: <SiDjango size={iconSize} />, name: 'Django' },
    { icon: <FaPython size={iconSize} />, name: 'Python' },
    { icon: <IoLogoJavascript size={iconSize} />, name: 'JavaScript' },
    { icon: <SiPandas size={iconSize} />, name: 'Pandas' },
    { icon: <SiNumpy size={iconSize} />, name: 'NumPy' },
    { icon: <FaCss3Alt size={iconSize} />, name: 'CSS' },
    { icon: <FaHtml5 size={iconSize} />, name: 'HTML5' },
    { icon: <SiStreamlit size={iconSize} />, name: 'Streamlit' },
    { icon: <SiPlotly size={iconSize} />, name: 'Plotly' },
    { icon: <DiDjango size={iconSize} />, name: 'REST' },
    { icon: <SiTypescript size={iconSize} />, name: 'TypeScript' },
];

const TechStack = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, 
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        pauseOnHover: true,
    };

    return (
        <div className='jsa__blog-page'>
            <Heading size='lg' textAlign="center" mb={4}>Technologies</Heading>
            <Slider {...settings}>
                {technologies.map((tech, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                        {tech.icon}
                        <span style={{ marginTop: '10px' }}>{tech.name}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TechStack;
