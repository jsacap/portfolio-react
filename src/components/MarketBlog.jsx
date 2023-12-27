import React, { useState, useEffect } from 'react';
import MarketBlogArticle from './MarketBlogArticle'
import axios from 'axios';
import parse from 'html-react-parser';

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
        <p className='col-md-6'>On this page, you will find a collection of market-related articles. These articles consist of my own observations and research, which combine both fundamental and technical analysis for various markets.</p>
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
                tags={article.tags.map(tag => tag.name).join('  ')}
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketBlog;


