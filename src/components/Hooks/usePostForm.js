import { useState, useEffect } from 'react';
import axios from 'axios';

const usePostForm = (id) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPostData = async () => {
        try {
        //   const response = await axios.get(`https://sanchojralegre.up.railway.app/post/${id}/`);
          const response = await axios.get(`http://localhost:8000/post/${id}/`);
          const postData = response.data;
          setTitle(postData.title);
          setContent(postData.content);
          setTags(postData.tag_names.map(name => ({ name }))); // Convert to object format
        } catch (error) {
          console.error('Failed fetching data for post', error);
          setError(error);
        }
      };
      fetchPostData();
    }
  }, [id]);

  const handleCoverPhotoChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e, navigateCallback) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      const tagNames = tags.map(tag => tag.name); // Convert to array of strings
      formData.append('tags', JSON.stringify(tagNames));

      if (coverPhoto) {
        formData.append('cover_photo', coverPhoto);
      }

    //   const url = id 
    //       ? `https://sanchojralegre.up.railway.app/post/${id}/` 
    //       : 'https://sanchojralegre.up.railway.app/post/';
    //   const method = id ? 'put' : 'post';

    //   await axios[method](url, formData, {
    //     headers: {
    //       'Authorization': `JWT ${localStorage.getItem('accessToken')}`,
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
      const url = id 
          ? `http://localhost:8000/post/${id}/` 
          : 'http://localhost:8000/post/';
      const method = id ? 'put' : 'post';

      await axios[method](url, formData, {
        headers: {
          'Authorization': `JWT ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      navigateCallback();
    } catch (error) {
      console.error('Error creating/updating post:', error);
      setError(error);
    }
  };

  return {
    title, setTitle,
    content, setContent,
    coverPhoto, setCoverPhoto,
    tags, setTags,
    handleCoverPhotoChange, handleSubmit,
    error
  };
};

export default usePostForm;
