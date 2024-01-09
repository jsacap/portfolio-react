import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box, HStack, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Link, VStack
} from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaCode, FaChartLine } from 'react-icons/fa';

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const isLoggedIn = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; 
  };

  return (
    <Box>
      <HStack justifyContent="space-between" p={4}>
        <Link as={RouterLink} to="/" fontWeight="bold">
          Sancho Jr. Alegre
        </Link>
        <IconButton
          ref={btnRef}
          icon={<FaHamburger />}
          onClick={onOpen}
          display={{ base: "inline-flex", md: "none" }}
        />
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack align="start">
              <Link as={RouterLink} to="/" onClick={onClose}>Projects</Link>
              <Link as={RouterLink} to="/marketblog" onClick={onClose}>Market Insights</Link>
              {isLoggedIn() && <Link as={RouterLink} to="/post" onClick={onClose}>New Project Post</Link>}
              {isLoggedIn() && <Link as={RouterLink} to="/tags" onClick={onClose}>Tags</Link>}
              {isLoggedIn() && <Link as={RouterLink} to="/logout" onClick={onClose}>Logout</Link>}
              {/* ... other links ... */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
