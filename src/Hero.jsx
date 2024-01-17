import React from 'react';
import { Box, Flex, VStack, Heading, Text, Image, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Hero = ({ title, description, imageUrl, imageAlt, videoUrl }) => {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const renderMedia = () => {
    if (videoUrl) {
      return (
        <video
          data-aos='flip-right'
          data-aos-duration='1500'
          autoPlay
          muted
          style={{ borderRadius: 'lg', maxWidth: '100%', objectFit: 'cover', height: 'auto', width: '100%' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <Image
          data-aos='flip-right'
          data-aos-duration='1500'
          src={imageUrl}
          alt={imageAlt}
          borderRadius="lg"
          maxW="100%"
          objectFit="cover"
          height={{ base: "auto", md: "400px" }} 
          width={{ base: "auto", md: "680px" }}
        />
      );
    }
  };

  return (
    <>
      <motion.div initial='hidden' animate='visible' variants={heroVariants} transition={{ duration: 2 }}>
        <Box className='hero' color='white'>
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
                {renderMedia()}
              </AspectRatio>
            </Box>
          </Flex>
        </Box>
      </motion.div>
    </>
  );
};

export default Hero;
