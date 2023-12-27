import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // Check if tokens exist
    if (!accessToken || !refreshToken) {
      console.error('Access or refresh token non-existent. User is not logged in.');
      return;
    }

    try {
      // Make a POST request to the logout endpoint
      const response = await axios.delete(
        'http://localhost:8000/auth/users/logout/',
        {}, 
        {
          headers: {
            'Authorization': `JWT ${accessToken}`,          
          },
        }
      );

      console.log('Logout successful');
      
      // Clear the tokens from localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      console.log('Tokens destroyed after logout');

      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
      // Handle logout failure
    }
  };

  return (
    <div>
      <h2>LOGOUT</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Logout;
