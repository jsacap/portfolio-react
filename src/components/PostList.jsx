import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';
import parse from 'html-react-parser';

const PostsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const apiUrl = 'http://localhost:8000/post';
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
    <div className='jsa__blog-page'>
      <div className='jsa__header-content mb-2 col-md-6'>
        <h1 className='mt-3'>Projects</h1>
      </div>
      <p className='col-md-6 text-center'>
        This page showcases my work as a full-stack developer. Here, you'll find a collection of projects that I've created using different programming languages. To me, a project is more than just code; it's about solving problems and making our lives easier. 
        Each project I work on has a specific goal in mind, to address a challenge and improve efficiency in my personal pursuits. This focus allows me to be creative in finding innovative solutions and apply the knowledge I've gained throughout my career. <br />
        Every project is like a puzzle, combining different skills, methods, and technologies that I've learned over time. It's exciting to see these elements come together and create something functional and impactful.
      </p>
      
      <div className='jsa__blog-page-container mt-7'>
        {articles.map(article => (
          <div key={article.id}>
            <SinglePost
              id={article.id}
              coverPhoto={article.cover_photo || 'default_image_url'}
              title={article.title}
              content={parse(`${article.content.slice(0, 300)}...`)}
              tags={article.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
