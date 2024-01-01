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
          setTags(postData.tags);
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
      selectedTags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });

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

  // Fetch tags and set them to the state
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tags/');
        setTags(response.data);
      } catch (error) {
        console.error('Failed fetching tags', error);
      }
    };
    fetchTags();
  }, []);

  const handleTagCheckboxChange = (tag) => {
    // If the tag is already selected, remove it; otherwise, add it
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
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
        {tags.map((tag) => (
          <div key={tag.id}>
            <input
              type="checkbox"
              id={`tag-${tag.id}`}
              value={tag.id}
              checked={selectedTags.includes(tag.id)}
              onChange={() => handleTagCheckboxChange(tag.id)}
            />
            <label htmlFor={`tag-${tag.id}`}>{tag.name}</label>
          </div>
        ))}
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
