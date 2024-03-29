import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero';
import BlogPost from './BlogPost';
import CardSkeleton from './CardSkeleton';
import useArticles from './Hooks/useArticles';

const MarketBlog = () => {
  const { articles, loading } = useArticles('https://jsax-production.up.railway.app/blog/api/', 'Private_Investor');
  const navigate = useNavigate();
  const imageUrl = '/chart.gif';
  const videoUrl = '/analysis_-_31251 (720p).mp4'

  const handlePostClick = (id) => {
    navigate(`/marketblog/article/${id}`);
  };

  return (
    <>
      <Hero        
        title="Market Insights"
        description="On this page, I share my insights and research, blending fundamental 
                    and technical analysis across diverse markets. Since beginning my trading journey 
                    in 2017, I've dedicated countless hours to back-testing and refining my unique trading 
                    strategies. This journey has not only led me to consistent profitability, but it has 
                    also provided me with a distinctive perspective on market dynamics. I place a strong 
                    emphasis on understanding the reasons behind price movements and recognising the significance 
                    of historical patterns. My approach is about delving deep into the 'how' and 'why' of market 
                    trends, offering readers a comprehensive and insightful view."
        videoUrl={videoUrl}
        imageAlt="Market Insights Image"
      />
      <Box className='jsa__blog-page' bg="#040C18">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="20px" p={4}>
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />            
            </>
          ) : (
            articles.map(article => (
              <BlogPost
                key={article.id}
                id={article.id}              
                coverPhoto={`https://jsax-production.up.railway.app${article.cover_photo}`}
                title={article.title}
                created={article.created}
                content={article.content}
                tags={article.tags.map(tag => tag.name)}
                onPostClick={handlePostClick}
              />
            ))
          )}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MarketBlog;
