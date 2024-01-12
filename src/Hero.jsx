// Hero.jsx
import React from 'react';
import { Box, Flex, VStack, Heading, Text, Image } from '@chakra-ui/react';

const Hero = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Box bg="#040C18" color='white'>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        p={4}
      >
        <VStack spacing={4} align="center" flex="1">
          <Heading className='gradient__text' size="xl">{title}</Heading>
          <Text fontSize='lg'>{description}</Text>
        </VStack>

        <Box flex="1" p={4}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            borderRadius="lg"
            maxW={{ base: "100%", md: "80%" }}
            mx="auto"
            height='400px'
            width='680px'
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
