import React from 'react';
import { Box, Heading, Text, VStack, Image, Badge, HStack } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ id, coverPhoto, title, content, tags, created }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    hover: { scale: 1.1 }
  }
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`blog/article/${id}`)
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
      <Image
        src={coverPhoto}
        alt={`Cover of ${title}`}
        width="100%"
        height="300px"
        objectFit="cover"
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
