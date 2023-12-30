import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const accessToken = localStorage.getItem('accessToken');

  const fetchTags = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8000/tags/');
      setTags(response.data);
    } catch (error) {
      console.error('Failed Fetching Tags', error.message);
    }
  }, []);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const handleDeleteTag = async (id) => {
    try {
      if (!accessToken) {
        console.log('Access denied');
        return;
      }

      const confirmDelete = window.confirm('Delete Tag?');
      if (!confirmDelete) {
        return;
      }

      const headers = {
        Authorization: `JWT ${accessToken}`,
      };

      await axios.delete(`http://localhost:8000/tags/${id}/delete_tag/`, {
        headers: headers,
      });

      fetchTags();
    } catch (error) {
      console.error('Failed to delete', error.message);
    }
  };

  return (
   
    <div className='jsa__articlepage text-white'>
      <h2>All Tags</h2>      
        {tags.map((tag) => (
        <div className='row'>
          <div className='col-md-6' key={tag.id}>
            <label className='mb-2'>{tag.name}</label>
          </div>
          <div className='col-md-6'>
              <button
                type='button'
                onClick={() => handleDeleteTag(tag.id)}
                className='btn btn-danger'
              >
                X
              </button>
          </div>
        </div>
          
        ))}
      
    </div>
  );
};

export default Tags;
