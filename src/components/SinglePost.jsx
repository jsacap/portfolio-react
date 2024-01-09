import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogPost from './BlogPost';
import { Spinner } from '@chakra-ui/react';

const SinglePage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post data using the id
    axios.get(`http://localhost:8000/post/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch post', error);
      });
  }, [id]);

  const handlePostClick = postId => {
    navigate(`/blog/article/${postId}`);
  };

  if (!post) {
    return <Spinner />;
  }

  return (
    <BlogPost
      id={post.id}
      title={post.title}
      coverPhoto={post.cover_photo || 'default_image_url'}
      tags={post.tag_names}
      content={post.content}
      onPostClick={handlePostClick}
    />
  );
};

export default SinglePage;
