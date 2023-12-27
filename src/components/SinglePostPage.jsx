import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SinglePostPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postData, setPostData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // const apiUrl = `http://localhost:8000/post/${id}/`;
    const apiUrl = `https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${id}/`;
    axios
      .get(apiUrl)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch article data', error);
      });
  }, [id]);

  useEffect(() => {
    const userIsLoggedIn = !!localStorage.getItem('accessToken');
    setIsLoggedIn(userIsLoggedIn);
  }, []);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        // const response = await axios.get(`http://localhost:8000/post/${id}/`);
        const response = await axios.get(`https://portfolio-backend-production-sanchojralegre.up.railway.app/${id}/`);
        setPostData(response.data);
      } catch (error) {
        console.error('Error Fetching Post Data', error);
      }
    };

    fetchPostData(); // Simplified without checking id
  }, [id]);

  const handleDeleteClick = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this post?');

    if (isConfirmed) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (postData && postData.id) {
          const response = await axios.delete(
            // `http://localhost:8000/post/${postData.id}/delete_post/`, 
            `https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${postData.id}/delete_post/`, 
            {
              headers: {
                'Authorization': `JWT ${accessToken}`,
              },
            }
          );
          navigate('/')
          console.log('Post Deleted', response.data);
        }
      } catch (error) {
        console.error('Error deleting post', error);
      }
    }
  };

  const handleEditClick = () => {
    if (isLoggedIn) {
      navigate(`/edit-post/${id}`);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  const { title, content } = article;
  const coverPhotoUrl = `${article.cover_photo}`;

  return (
    <div className='jsa__articlepage'>
      <img src={coverPhotoUrl} alt='Article cover photo' />
      <h1>{title}</h1>
      <div className='jsa__articlepage-content'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {isLoggedIn && (
        <>
          <button className='btn btn-primary' onClick={() => handleEditClick(id)}>
            Edit
          </button>
          <button className='btn btn-danger' onClick={handleDeleteClick}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;