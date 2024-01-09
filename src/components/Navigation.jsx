import React, { useState } from 'react';
import { Flex, Box, IconButton, Link, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FaCode, FaChartLine, FaHamburger } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';
import { DrawerHeader } from '@chakra-ui/react';

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
  const isLoggedIn = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; 
  };

  return (
    <Box as="nav" bg="navbar-transparent" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        {/* Logo/Brand Name */}
        <Link as={RouterLink} to="/" 
        fontWeight="bold" 
        textDecoration='none'
        _hover={{ textDecoration: 'non'}}
        className='brand-padding'>
          Sancho Jr. Alegre
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          ref={btnRef}
          icon={<FaHamburger />}
          onClick={onOpen}
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Open Menu"
        />

        {/* Desktop Links */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <FaCode />
          <Link as={RouterLink} to="/">Projects</Link>
          <FaChartLine />
          <Link as={RouterLink} to="/marketblog">Market Insights</Link>
          {/* ... other desktop links ... */}
        </HStack>

        {/* GitHub Link and Conditional Rendering for Logged In User */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link as={RouterLink} to="https://github.com/jsacap" isExternal>
            <AiFillGithub />
          </Link>
          {isLoggedIn() && <Link as={RouterLink} to="/post">New Project Post</Link>}
          {isLoggedIn() && <Link as={RouterLink} to="/tags">Tags</Link>}
          {isLoggedIn() && <Link as={RouterLink} to="/logout">Logout</Link>}
        </HStack>
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="start" mt={4}>
              <Link as={RouterLink} to="/" onClick={onClose}>Projects</Link>
              <Link as={RouterLink} to="/marketblog" onClick={onClose}>Market Insights</Link>
              {/* ... other mobile links ... */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
