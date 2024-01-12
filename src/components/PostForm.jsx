import React from 'react';
import axios from 'axios';
import Editor from './Editor';
import { useParams, useNavigate } from 'react-router-dom';
import usePostForm from './Hooks/usePostForm';
import { Box, Center, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    title, setTitle, content, setContent, coverPhoto, setCoverPhoto, tags, setTags,
    handleCoverPhotoChange, handleSubmit, isLoading, error 
  } = usePostForm(id, navigate);

  const updateTags = (tagString) => {
    const tagsArray = tagString.split(',').map(tag => ({ name: tag.trim() }));
    setTags([...tagsArray]);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <Center py={10} bg='#040C18'>
        <Box w="full" maxW="2xl" p={6} bg="#040C18" boxShadow="md" borderRadius="md">
          <VStack spacing={4}>
            <FormLabel>Title:</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormLabel>Content:</FormLabel>
            <Editor value={content} onChange={(value) => setContent(value)} />
            <FormLabel>Tags:</FormLabel>
            <Input
              type='text'
              value={tags.map(tag => tag.name).join(', ')}
              onChange={(e) => updateTags(e.target.value)}
            />
            <FormLabel>Cover Photo:</FormLabel>
            <Input type="file" accept="image/*" onChange={handleCoverPhotoChange} />
            <Button type="submit" colorScheme="blue">
              {id ? 'Update' : 'Submit'}
            </Button>
          </VStack>
        </Box>
      </Center>
    </form>
  );
};

export default PostForm;
