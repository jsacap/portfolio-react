import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './Editor';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [tags, setTags] = useState([]);

  const updateTags = (tagString) => {
    const tagsArray = tagString.split(',').map(tag => ({ name: tag.trim() }));
    setTags([...tagsArray]); // Ensure tags is directly an array of objects
  };
  
  
  

  useEffect(() => {
    if (id) {
      const fetchPostData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/post/${id}/`);
          const postData = response.data;
          setTitle(postData.title);
          setContent(postData.content);
          setTags(postData.tags.map(tag => tag.name));
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
      console.log(tags);
      formData.append('tags', JSON.stringify(tags.map(tag => tag.name)));

            
  
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
      console.error('Error creating post:', error);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <Editor value={content} onChange={(value) => setContent(value)} />
      </label>
      <br />
      <label>
        Tags:
        <input
          type='text'
          value={tags.map(tag => tag.name).join(', ')}
          onChange={(e) => updateTags(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cover Photo:
        <input type="file" accept="image/*" onChange={handleCoverPhotoChange} />
      </label>
      <br />
      <button type="submit">{id ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default PostForm;
