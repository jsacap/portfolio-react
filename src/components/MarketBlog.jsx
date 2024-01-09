import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import { Box, SimpleGrid, Flex, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import marketInsightsImage from '../../src/assets/marketInsightsImage.jpg'
import parse from 'html-react-parser';

const MarketBlog = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'https://jsax-production.up.railway.app/blog/api/';
    axios.get(apiUrl)
      .then(response => {
        const filteredArticles = response.data.filter(article => !article.tags.some(tag => tag.name === 'Private_Investor'));
        setArticles(filteredArticles);
      })
      .catch(error => {
        console.error('Failed to fetch data', error);
      });
  }, []);

  const handlePostClick = (id) => {
    navigate(`/marketblog/article/${id}`);
  };

  return (
    <>
      <Box className='jsa__blog-page' bg="#040C18">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          p={4}
        >
          <VStack spacing={4} align="center" flex="1">
            <Heading className='gradient__text' size="xl">Market Insights</Heading>
            <Text fontSize='lg'>
          On this page, I share my insights and research, blending fundamental 
          and technical analysis across diverse markets. Since beginning my trading journey 
          in 2017, I've dedicated countless hours to back-testing and refining my unique trading 
          strategies. This journey has not only led me to consistent profitability, but it has 
          also provided me with a distinctive perspective on market dynamics. I place a strong 
          emphasis on understanding the reasons behind price movements and recognising the significance 
          of historical patterns. My approach is about delving deep into the 'how' and 'why' of market 
          trends, offering readers a comprehensive and insightful view.
          </Text>
          </VStack>

          <Box flex="1" p={4}>
            <Image
              src={marketInsightsImage}
              alt="Market Insights"
              borderRadius="lg"
              maxW={{ base: "100%", md: "80%" }}
              mx="auto"
              height='400px'
            />
          </Box>
        </Flex>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="20px" p={4}>
          {articles.map(article => (
            <BlogPost
              key={article.id}
              id={article.id}
              coverPhoto={`https://jsax-production.up.railway.app${article.cover_photo}`}
              title={article.title}
              content={article.content}
              tags={article.tags.map(tag => tag.name)}
              onPostClick={handlePostClick}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MarketBlog;
