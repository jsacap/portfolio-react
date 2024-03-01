import React, { useState } from 'react';
import { Box, Heading, Text, VStack, Image, Badge, HStack, Skeleton } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ id, coverPhoto, title, content, tags, created }) => {
  const [imageLoaded, setImageLoaded] = useState(false); // Image loading state
  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  }
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/blog/article/${id}`)
  }
  
  return (
    <Box
      data-aos='flip-up' data-aos-duration='2000' data-aos-once='true'     
      onClick={handlePostClick}
      key={id}
      bg="#040C18"
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      maxW="xl"
      height="100%"
    >
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="enter"
        whileHover="hover">
        
        {!imageLoaded && (
          <Skeleton height="300px" width="100%" fadeDuration={1} />
        )}
        <Image
          src={coverPhoto}
          alt={`Cover of ${title}`}
          width="100%"
          height="300px"
          objectFit="cover"
          display={imageLoaded ? "block" : "none"} // Only display the image when it's loaded
          onLoad={() => setImageLoaded(true)} // Update loading state when image is loaded
        />

        <VStack p="4" align="start">
          <Heading size="md">{title}</Heading>
          {parse(content)}
          <HStack spacing={2} flexWrap='wrap'>
            {tags.map(tagName => (
              <Badge key={tagName} borderRadius="full" px="2" colorScheme="teal">
                {tagName}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default BlogCard;
