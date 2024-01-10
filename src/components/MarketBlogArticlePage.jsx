import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Heading, Image, Spinner } from '@chakra-ui/react';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://jsax-production.up.railway.app/blog/api/${id}/`;
    axios.get(apiUrl)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => console.error('Failed to fetch article data', error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Box bg='#040C18' textAlign="center" py="20">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!article) {
    return <Box textAlign="center" py="20">Article not found</Box>;
  }

  const { title, created, content } = article;
  const coverPhotoUrl = `https://jsax-production.up.railway.app${article.cover_photo}`;

  const formattedDate = new Date(created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box bg='#040C18'>
      <Box bg="BlackAlpha600" boxShadow="md" borderRadius="lg" p={6} maxW="5xl" mx="auto">
        <Image src={coverPhotoUrl} alt='Article cover photo' borderRadius="lg" mx='auto' />

        <Heading as="h1" size="xl" mt={4} mb={6}>
          {title}
        </Heading>

        <Box p={{ base: 1, md: 4 }} m={{ base: 0.5, md: 2 }} dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  );
};

export default ArticlePage;
