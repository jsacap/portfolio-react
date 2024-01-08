import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

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
          <Nav.Link href="/">Projects</Nav.Link>
          <Nav.Link href="/marketblog">Market Insights</Nav.Link>
        </Nav>
        <Nav>
          <Link to='https://github.com/jsacap' target='__blank' rel='noopener noreferror'>
            <AiFillGithub padding={5} color='white' />
          </Link>
          {isLoggedIn() && <Nav.Link href='/post'>New Project Post</Nav.Link>}
          {isLoggedIn() && <Nav.Link href='/tags'>Tags</Nav.Link>}
          {isLoggedIn() && <Nav.Link href='/logout'>Logout</Nav.Link>}
          {/* {isLoggedIn() ? <Nav.Link href='/logout'>Logout</Nav.Link> : <Nav.Link href="/login" className='brand-padding'>Login</Nav.Link>} */}

        </Nav>
      </Navbar>
    </div>
  );
}
