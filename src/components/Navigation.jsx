import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  const isLoggedIn = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; 
  };
  if (isLoggedIn()) {
    console.log('Logged in user')
  } else {
    console.log('User not logged in')
  }

  

  return (
    <div>
      <Navbar className='navbar-transparent' variant="dark">
        <Navbar.Brand href="/">Sancho Jr. Alegre</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Projects</Nav.Link>
          <Nav.Link href="blog/">Market Blog</Nav.Link>
        </Nav>
        <Nav>
          
            <Nav.Link href="/login">Login</Nav.Link>
            {isLoggedIn() && <Nav.Link href='/post'>New Project Post</Nav.Link>}
          
        </Nav>
      </Navbar>
    </div>
  );
}
