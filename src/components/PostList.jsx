import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { Box, SimpleGrid, Flex } from '@chakra-ui/react';
import Hero from '../Hero';

const PostsList = () => {
  const imageUrl = '/portfolio.jpg'
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    const apiUrl = 'https://portfolio-backend-production-sanchojralegre.up.railway.app/post';
    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch data', error);
      });
  }, []);

  

  return (    
    <>
    <Hero
    title="Projects"
    description="This page showcases my work as a full-stack developer. Here, you'll find a collection of projects that I've created using different programming languages. To me, a project is more than just code; it's about solving problems and making our lives easier. 
                Each project I work on has a specific goal in mind, to address a challenge and improve efficiency in my personal pursuits. This focus allows me to be creative in finding innovative solutions and apply the knowledge I've gained throughout my career. <br />
                Every project is like a puzzle, combining different skills, methods, and technologies that I've learned over time. It's exciting to see these elements come together and create something functional and impactful."
    imageUrl={imageUrl}
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

      <Box p={4} bg={'#040C18'} color='white'>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="20px">
          {articles.map(article => (
            <BlogCard
              key={article.id}
              id={article.id}
              coverPhoto={article.cover_photo || 'default_image_url'}
              title={article.title}        
              content={`{parse${article.content.slice(0, 300)}...`}
              tags={article.tag_names}              
              
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default PostsList;
