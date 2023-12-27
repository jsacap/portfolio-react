import './articlePage.css';
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // const apiUrl = `http://localhost:8000/blog/api/${id}/`; 
    const apiUrl = `https://jsax-production.up.railway.app/blog/api/${id}/`; 
    axios.get(apiUrl)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch article data', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  
  const { title, created, content } = article;
  const coverPhotoUrl = `https://jsax-production.up.railway.app/${article.cover_photo}`;

  const formattedDate = new Date(created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='jsa__articlepage'>
        <img src={coverPhotoUrl} alt='Article cover photo' />
        <h1>{title}</h1>
      <div className='jsa__articlepage-content'>
        <p className='jsa__articlepage-date'>Written on {formattedDate}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default ArticlePage;
