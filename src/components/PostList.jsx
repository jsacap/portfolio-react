import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { Box, SimpleGrid, Flex, Center, Heading } from '@chakra-ui/react';
import Hero from '../Hero';



import CardSkeleton from './CardSkeleton';
import TechStack from './TechStack';
import BasicCarousel from './BasicCarousel';

const PostsList = () => {
  const videoUrl = '/world.webm'
  
  const imageUrl = '/worldgif.gif'
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const apiUrl = 'https://portfolio-backend-production-sanchojralegre.up.railway.app/post';
    axios.get(apiUrl)
      .then(response => {
        setArticles([...response.data].reverse());;
        setLoading(false)
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  

  return (    
    <>
    
    <Hero    
    title="Projects"
    description="Here are a few projects I've worked on, either to practice my skills as a full-stack developer or to provide solutions for myself or others. Learning to code has been beneficial, enabling me to tackle a wide range of activities, from 
    small-scale daily automation to comprehensive statistical analysis for my trading and investing, and everything in between. Each project I work on has a specific goal in mind: to address a challenge and improve efficiency in my personal pursuits. 
    This focus allows me to be creative in finding innovative solutions while continually evolving to adapt to the exponential age in which we live."
    videoUrl={videoUrl}
    imageAlt='Portfolio Image' 
    />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        p={4}
        bg={'#040C18'}
      >
      </Flex>
      
      <TechStack />
      
            
      
      <Box p={4} bg={'#040C18'} color='white'>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="20px">
        {loading ? (
          <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          </>
        ) : (
          articles.map(article => (
            <BlogCard
              key={article.id}
              id={article.id}
              coverPhoto={article.cover_photo || 'default_image_url'}
              title={article.title}        
              content={`{parse${article.content.slice(0, 300)}...`}
              tags={article.tag_names}              
              
            />
          ))
        )}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default PostsList;
