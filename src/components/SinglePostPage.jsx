import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';


const SinglePostPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postData, setPostData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `http://localhost:8000/post/${id}/`;
    // const apiUrl = `https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${id}/`;
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
        const response = await axios.get(`http://localhost:8000/post/${id}/`);
        // const response = await axios.get(`https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${id}/`);
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
            `http://localhost:8000/post/${postData.id}/delete_post/`, 
            // `https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${postData.id}/delete_post/`, 
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
    return <div className='jsa__articlepage'>
      <Spinner />;
      </div>
  }

  const { title, content } = article;
  const coverPhotoUrl = `${article.cover_photo}`;

  return ( 
    <Box bg='#040C18'>
    <Box bg="BlackAlpha600" boxShadow="md" borderRadius="lg" p={6} maxW="2xl" mx="auto">
      <Image src={coverPhotoUrl} alt='Article cover photo' borderRadius="lg" />

      <Heading as="h1" size="xl" mt={4} mb={6}>
        {title}
      </Heading>

      <Box p={{ base: 1, md: 4 }} 
      m={{ base: 0.5, md: 2}}
      className='jsa__articlepage-content' dangerouslySetInnerHTML={{ __html: content }} />

      {isLoggedIn && (
        <Box display="flex" justifyContent="space-between" mt={6}>
          <Button colorScheme="blue" onClick={() => handleEditClick(id)}>
            Edit
          </Button>
          <Button colorScheme="red" onClick={handleDeleteClick}>
            Delete
          </Button>
        </Box>
      )}
    </Box>
    </Box>

  );
};

export default SinglePostPage;