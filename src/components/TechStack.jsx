import React, { useEffect, useRef } from 'react';
import { Center, HStack, Text, VStack, Container, Heading } from '@chakra-ui/react';
import { FaPython, FaReact, FaCss3Alt, FaHtml5, } from 'react-icons/fa';
import { SiDjango, SiPandas, SiNumpy, SiStreamlit, SiPlotly, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from 'react-icons/di'
const iconSize = '24px'

const technologies = [
    { icon: <FaReact size={iconSize} />,  name: 'React' },
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

const TechnologyItems = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1; 
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Heading size='lg' textAlign="center">Technologies</Heading>
            <div className='techstack'>
                {technologies.map((tech, index) => (
                    <div key={index} className="techstack-item">
                        {tech.icon}
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
    
    
    
};

const TechStack = () => {
    return <TechnologyItems />;
};

export default TechStack;