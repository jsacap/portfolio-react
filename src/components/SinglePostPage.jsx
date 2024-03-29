import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const SinglePostPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkUserLoggedIn = () => !!localStorage.getItem('accessToken');
    const apiUrl = `https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${id}/`;

    axios.get(apiUrl)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => console.error('Error fetching post:', error))
      .finally(() => setLoading(false));

    return checkUserLoggedIn;
  }, [id]);

  const handleDeleteClick = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this post?');
    if (isConfirmed) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        await axios.delete(
          `https://portfolio-backend-production-sanchojralegre.up.railway.app/post/${id}/delete_post/`, 
          { headers: { 'Authorization': `JWT ${accessToken}` } }
        );
        navigate('/');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleEditClick = () => {
    if (localStorage.getItem('accessToken')) {
      navigate(`/edit-post/${id}`);
    }
  };

  if (loading) {
    return (
      <Box display='flex' justifyContent="center" alignItems="center" textAlign='center' height='100vh' bg='#040C18'>
        <Spinner size='xl' thickness='6px' color='blue-500' />;
      </Box>
    )
  }

  if (!article) {
    return <Text>No article found</Text>;
  }

  const { title, content, cover_photo } = article;
  return (
    <Box bg='#040C18' textColor='white'>
      <Box bg="BlackAlpha600" boxShadow="md" borderRadius="lg" p={6} maxW="2xl" mx="auto">
        <Image src={cover_photo || 'default_image_url'} alt='Article cover' borderRadius="lg" />

        <Heading as="h1" size="xl" mt={4} mb={6}>
          {title}
        </Heading>

        <Box 
        p={{ base: 1, md: 4 }} 
        m={{ base: 0.5, md: 2 }} 
        dangerouslySetInnerHTML={{ __html: content }}
        className='content-images' 
        />

        {localStorage.getItem('accessToken') && (
          <Box display="flex" justifyContent="space-between" mt={6}>
            <Button colorScheme="blue" onClick={handleEditClick}>
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
