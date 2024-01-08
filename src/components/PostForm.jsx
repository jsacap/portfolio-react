import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './Editor';
import { useParams, useNavigate } from 'react-router-dom';
import usePostForm from './Hooks/usePostForm';
import { Center, FormLabel, TagLabel, VStack } from '@chakra-ui/react';

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
      <Center paddingY={2}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        </Center>
        <br />
        <Center>
        <label>
          Content:
          <Editor value={content} onChange={(value) => setContent(value)} />
        </label>
        </Center>
        <br />
        <Center paddingY={2}>
        <FormLabel>
          Tags:
          <input
            type='text'
            value={tags.map(tag => tag.name).join(', ')}
            onChange={(e) => updateTags(e.target.value)}
          />
        </FormLabel>
        </Center>
        <br />
          <Center>
        <FormLabel paddingX={5}>
          Cover Photo:
        </FormLabel>
          <input type="file" accept="image/*" onChange={handleCoverPhotoChange} />
        </Center>
        <br />
        <Center>
        <button type="submit">{id ? 'Update' : 'Submit'}</button>
        </Center>
      </form>
  );
};

export default PostForm;
