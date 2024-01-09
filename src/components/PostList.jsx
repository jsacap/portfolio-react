import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';
import parse from 'html-react-parser';
import { Box, SimpleGrid, Flex, Heading, Text, VStack } from '@chakra-ui/react';


const PostsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/post';
    // const apiUrl = 'https://portfolio-backend-production-sanchojralegre.up.railway.app/post';
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
        <VStack>
        <Box flex="1" mb={{ base: 4, md: 0 }}>
          <Heading as="h1" size="xl" mt={3}>
            Projects
          </Heading>
        </Box>
        <Text
          flex="1"
          textAlign={{ base: "left", md: "left" }}
          fontSize="lg"
          
        >
        This page showcases my work as a full-stack developer. Here, you'll find a collection of projects that I've created using different programming languages. To me, a project is more than just code; it's about solving problems and making our lives easier. 
        Each project I work on has a specific goal in mind, to address a challenge and improve efficiency in my personal pursuits. This focus allows me to be creative in finding innovative solutions and apply the knowledge I've gained throughout my career. <br />
        Every project is like a puzzle, combining different skills, methods, and technologies that I've learned over time. It's exciting to see these elements come together and create something functional and impactful.
      </Text>
      </VStack>
      </Flex>

<Box p={4} bg={'#040C18'}>
  <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
    {articles.map(article => (
      <Box key={article.id} height="100%">
        <SinglePost
          id={article.id}
          coverPhoto={article.cover_photo || 'default_image_url'}
          title={article.title}        
          content={parse(`${article.content.slice(0, 300)}...`)}
          tags={article.tag_names}
        />
      </Box>
    ))}
  </SimpleGrid>
</Box>
</>
);
};
export default PostsList;
