import { useState, useEffect } from 'react';
import axios from 'axios';

const usePostForm = (postId, navigate) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (postId) {
      setIsLoading(true);
      axios.get(`http://localhost:8000/post/${postId}/`)
        .then(response => {
          const postData = response.data;
          setTitle(postData.title);
          setContent(postData.content);
          setTags(postData.tag_names.map(tagName => ({ name: tagName })));
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Failed fetching data for post', error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [postId]);

  const handleCoverPhotoChange = (e) => {
    const selectedCoverPhoto = e.target.files[0];
    setCoverPhoto(selectedCoverPhoto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);

      if (postId) {
        tags.forEach(tag => formData.append('tags', tag.name));
      } else {
        const tagStrings = tags.map(tag => tag.name);
        formData.append('tags', JSON.stringify(tagStrings));
      }

      if (coverPhoto) {
        formData.append('cover_photo', coverPhoto);
      }

      const url = postId ? `http://localhost:8000/post/${postId}/` : 'http://localhost:8000/post/';
      const method = postId ? 'put' : 'post';

      await axios[method](url, formData, {
        headers: {
          'Authorization': `JWT ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/');
    } catch (error) {
      console.error('Error submitting post:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { title, setTitle, content, setContent, coverPhoto, setCoverPhoto, tags, setTags, handleCoverPhotoChange, handleSubmit, isLoading, error };
};

export default usePostForm;
