import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';
import axios from 'axios';

const PostPage = ({ isEditing, postData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);

  useEffect(() => {
    if (isEditing && postData) {
      setTitle(postData.title || '');
      setContent(postData.content || '');
      setTags(postData.tags || []);
    }
  }, [isEditing, postData]);

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
      formData.append('tags', JSON.stringify(tags || []));

      if (coverPhoto) {
        formData.append('cover_photo', coverPhoto);

        const accessToken = localStorage.getItem('accessToken');

        if (isEditing && postData) {
          const response = await axios.put(
            `http://localhost:8000/post/${postData.id}/`,
            formData,
            {
              headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log('Post updated', response.data);
        } else {
          const response = await axios.post(
            'http://localhost:8000/post',
            formData,
            {
              headers: {
                'Authorization': `JWT ${accessToken}`,
              },
            }
          );

          console.log('Post Created', response.data);
        }
      }
    } catch (error) {
      console.error('Error creating/updating post', error);
    }
  };

  return (
    <div>
      <PostForm isEditing={isEditing} postData={postData} />
    </div>
  );
};

export default PostPage;
