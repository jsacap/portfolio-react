import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { Box, SimpleGrid, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

const PostsList = () => {
  const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/post';
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
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        p={4}
        bg={'#040C18'}
      >
      </Flex>

      <Box p={4} bg={'#040C18'}>
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
