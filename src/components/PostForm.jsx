import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './Editor';
import { useParams, useNavigate } from 'react-router-dom';
import { Center, FormLabel, TagLabel, VStack } from '@chakra-ui/react';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [tags, setTags] = useState([]);

  const updateTags = (tagString) => {
    const tagsArray = tagString.split(',').map(tag => ({ name: tag.trim() }));
    setTags([...tagsArray]);
  };
  
  
  

  useEffect(() => {
    if (id) {
      const fetchPostData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/post/${id}/`);
          console.log(response.data)
          const postData = response.data;
          setTitle(postData.title);
          setContent(postData.content);
          setTags(postData.tag_names.map(tagName => ({ name: tagName })))
        } catch (error) {
          console.error('Failed fetching data for post', error);
        }
      };
      fetchPostData();
    }
  }, [id]);

  const handleCoverPhotoChange = (e) => {
    const selectedCoverPhoto = e.target.files[0];
    setCoverPhoto(selectedCoverPhoto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
    
      if (id) {
        // Logic for updating an existing post
        tags.forEach(tag => formData.append('tags', tag.name));
      } else {
        // Logic for creating a new post
        const tagStrings = tags.map(tag => tag.name);
        formData.append('tags', JSON.stringify(tagStrings));
      }
  
      if (coverPhoto) {
        formData.append('cover_photo', coverPhoto);
      }
    
      const url = id ? `http://localhost:8000/post/${id}/` : 'http://localhost:8000/post/';
      const method = id ? 'put' : 'post';
    
      const response = await axios[method](url, formData, {
        headers: {
          'Authorization': `JWT ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    
      navigate('/');
      console.log(id ? 'Post Updated:' : 'Post Created', response.data);
    } catch (error) {
      console.error('Error creating or updating post:', error);
    }
  };
  
  

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
