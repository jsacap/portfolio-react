import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Center, useToast } from '@chakra-ui/react';

const Logout = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      toast({
        title: 'Error',
        description: "You're already logged out.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false); // Update the login state

    toast({
      title: 'Logged out',
      description: "You've successfully logged out.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    navigate('/login');
  };

  return (
    <Center h='100vh' bg='#040C18' textColor='white'>
    <Box bg='#040C18'>
      <h2>LOGOUT</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </Box>
    </Center>
  );
};

export default Logout;
