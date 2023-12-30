import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Grid, GridItem, chakra } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');

  // interface Tag {
  //   id: number;
  //   name: string;
  // }

  // // interface Props {
  // //   handleDeleteTag: (id: number) => void;
  // //   tags: Tag[];
  // // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!tagInput.trim()) {
        setError('Tag cannot be empty!');
        return;
      }

      const headers = {
        Authorization: `JWT ${accessToken}`,
      };

      const response = await axios.post('http://localhost:8000/tags/', 
      { name: tagInput }, 
      { headers });

      console.log('Tag Created:', response.data);
      setTagInput('');
      setError('');
      fetchTags();
    } catch (error) {
      console.error(error.message);
      setError('Failed to create tag');
    }
  };

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
      <h2 className='m-5'>Create Tags</h2>
      {error && <p>{error}</p>}
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        <div>
          <Input 
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          htmlSize={10} 
          width='auto' 
          placeholder='Add a Tag' 
          />
        </div>
    <div>
      <Button 
      type='submit'
      onClick={handleSubmit}
      colorScheme='blue'>Add</Button>
    </div>
  </Grid>
    </div>
  );
};

export default Tags;
