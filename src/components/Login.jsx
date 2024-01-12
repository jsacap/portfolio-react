import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box, FormControl, FormLabel, Input, Button, VStack, Heading, useToast, Center
} from '@chakra-ui/react';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-backend-production-sanchojralegre.up.railway.app/auth/jwt/create/', {
        username,
        password,
      });

      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      setIsLoggedIn(true); 
      toast({title: 'Login Successful', description: 'You are now logged in', status:'success', duration:5000, isClosable:true})
      navigate('/');
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Center h="100vh" bg='#040C18'>
      <Box w="md" p={6} bg="#040C18" borderRadius="md" boxShadow="base" textColor='white'>
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="lg" textAlign="center">Sign In</Heading>
          <form onSubmit={handleLogin}>
            <FormControl id="username" isRequired mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter Username"
                variant='filled'
                onChange={e => setUsername(e.target.value)}
                value={username}
              />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                variant='filled'
                placeholder="Enter Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              mt={6}
            >
              Submit
            </Button>
          </form>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
