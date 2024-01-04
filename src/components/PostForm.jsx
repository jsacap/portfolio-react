import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './Editor';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

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
      const postDataToSend = {
        title,
        content,
        tags: tags.map(tag => ({ name: tag })),
        cover_photo: coverPhoto
      };
      console.log(postDataToSend)
  
      const url = id ? `http://localhost:8000/post/${id}/` : 'http://localhost:8000/post/';
      const method = id ? 'put' : 'post';
  
      const response = await axios[method](url, postDataToSend, {
        headers: {
          'Authorization': `JWT ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
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
        <input type='text' value={tags.join(', ')} 
        onChange={(e) => setTags(e.target.value.split(', '))} />
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
