import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '@chakra-ui/react';
import { Button, Grid, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';


const CreateTag = ({fetchTags}) => {
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');

  const accessToken = localStorage.getItem('accessToken');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!tagInput.trim()) {
        setError(
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Tag Create Fail</AlertTitle>
          <AlertDescription>Tag cannot be blank</AlertDescription>
        </Alert>);
        return;
      }

      const headers = {
        Authorization: `JWT ${accessToken}`,
      };

      const response = await axios.post(
        'http://localhost:8000/tags/',
        { name: tagInput },
        { headers }
      );

      
      setTagInput('');
      setError('');
      fetchTags();
    } catch (error) {
      console.error(error.message);
      setError('Failed to create tag');
    }
  };

  return (
    <div className='jsa__articlepage text-white'>
      <h2 className='m-5'>Create Tags</h2>
      {error && <p className='text-dark'>{error}</p>}
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
            colorScheme='blue'
          >
            Add
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default CreateTag;
