import React, { useState, useEffect } from 'react';
import MarketBlogArticle from './MarketBlogArticle'
import axios from 'axios';
import parse from 'html-react-parser';
import { Spinner } from 'react-bootstrap';
import { Badge } from '@chakra-ui/react';

const MarketBlog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsax-production.up.railway.app/blog/api/';
    // const apiUrl = 'http://localhost:8000/blog/api/';
    axios.get(apiUrl)
      .then(response => {
        const filteredArticles = response.data.filter(article => !article.tags.some(tag => tag.name === 'Private_Investor'));
        setArticles(filteredArticles);
      })
      .catch(error => {
        console.error('Failed to fetch data', error);
      });
  }, []);

  

  return (
    <div className='jsa__blog-page'>
      <div className='jsa__header-content col-md-6'>
        <h1 className='gradient__text'>Market Insights</h1>
      </div>
        <p className='col-md-6'>
          On this page, I share my insights and research findings, blending fundamental 
          and technical analysis across diverse markets. Since beginning my trading journey 
          in 2017, I've dedicated countless hours to back-testing and refining my unique trading 
          strategies. This journey has not only led me to consistent profitability, but it has 
          also provided me with a distinctive perspective on market dynamics. I place a strong 
          emphasis on understanding the reasons behind price movements and recognising the significance 
          of historical patterns. My approach is about delving deep into the 'how' and 'why' of market 
          trends, offering readers a comprehensive and insightful view.
        </p>
      <div className='jsa__blog-page-container'>
        {articles.map((article, index) => {

          return (
            <div key={article.id}>
              <MarketBlogArticle
                id={article.id}
                coverPhoto={`https://jsax-production.up.railway.app${article.cover_photo}`}
                title={article.title}
                created={article.created}
                content={parse(`${article.content.slice(0, 300)}...`)}
                tags={article.tags}
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketBlog;


