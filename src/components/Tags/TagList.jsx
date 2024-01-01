import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Grid } from '@chakra-ui/react';
import CreateTags from './CreateTags';

const TagList = () => {
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
      <h2 className='mb-5'>All Tags</h2>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {tags.map((tag) => (
          <div className='row' key={tag.id}>
            <div className='col-md-6'>
              <label className='mb-2'>{tag.name}</label>
            </div>
            <div className='col-md-6'>
              <button
                type='button'
                onClick={() => handleDeleteTag(tag.id)}
                className='btn btn-danger btn-sm'
              >
                X
              </button>
            </div>
          </div>
        ))}
      </Grid>
      <CreateTags fetchTags={fetchTags} />
    </div>
  );
};

export default TagList;
