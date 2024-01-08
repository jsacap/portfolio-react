import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { FaCode, FaChartLine } from 'react-icons/fa';
import { HStack } from '@chakra-ui/react';

export function Navigation() {
  const isLoggedIn = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; 
  };
  

  

  return (
    <div>
      
      <Navbar className='navbar-transparent' variant="dark">
        <Navbar.Brand href="/" className='brand-padding'>Sancho Jr. Alegre</Navbar.Brand>
        <Nav className="me-auto">
          <HStack>
          <FaCode />
          <Nav.Link href="/">Projects</Nav.Link>
          <FaChartLine />
          <Nav.Link href="/marketblog">Market Insights</Nav.Link>
          </HStack>
        </Nav>
        <Nav>
          <HStack>
          <Link to='https://github.com/jsacap' target='__blank' rel='noopener noreferror'>
            <AiFillGithub padding={5} color='white' />
          </Link>
          {isLoggedIn() && <Nav.Link href='/post'>New Project Post</Nav.Link>}
          {isLoggedIn() && <Nav.Link href='/tags'>Tags</Nav.Link>}
          {isLoggedIn() && <Nav.Link href='/logout'>Logout</Nav.Link>}
          {/* {isLoggedIn() ? <Nav.Link href='/logout'>Logout</Nav.Link> : <Nav.Link href="/login" className='brand-padding'>Login</Nav.Link>} */}
          </HStack>
        </Nav>
      </Navbar>
    </div>
  );
}
