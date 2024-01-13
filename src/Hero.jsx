import React from 'react';
import { Box, Flex, VStack, Heading, Text, Image, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Hero = ({ title, description, imageUrl, imageAlt }) => {
  const heroVariants = {
    hidden: { opacity: 0, y: 20},
    visible: { opacity: 1, y:0 }
  };
  return (
    <>
    <motion.div initial='hidden' animate='visible' variants={heroVariants} transition={{ duration: 2 }}>
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
          <AspectRatio ratio={16 / 9} maxW={{ base: "100%", md: "80%" }} mx="auto">
            <Image
              src={imageUrl}
              alt={imageAlt}
              borderRadius="lg"
              maxW="100%"
              objectFit="cover"
              height={{ base: "auto", md: "400px" }} 
              width={{ base: "auto", md: "680px" }}   
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
    </motion.div>
  </>
  );
};

export default Hero;
