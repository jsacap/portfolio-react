import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack, Image, Badge, HStack, Skeleton } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ id, coverPhoto, title, content, tags, created }) => {
  const [imageLoaded, setImageLoaded] = useState(false); 
  const [parsedContent, setParsedContent] = useState('');
  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  };
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/blog/article/${id}`);
  };

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
  
    // Extract text content from parsed HTML
    const textContent = doc.body.textContent || '';
  
    // Slice the content to get the first 300 characters as the preview
    const contentPreview = textContent.slice(0, 300);
  
    // Set the parsed content without HTML tags
    setParsedContent(contentPreview);
  }, [content]);
  
  
  
  

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
        whileHover="hover"
      >
        {!imageLoaded && (
          <Skeleton height="300px" width="100%" fadeDuration={1} />
        )}
        <Image
          src={coverPhoto}
          alt={`Cover of ${title}`}
          width="100%"
          height="300px"
          objectFit="cover"
          display={imageLoaded ? "block" : "none"} 
          onLoad={() => setImageLoaded(true)} 
          loading="lazy" 
        />
        <VStack p="4" align="start">
          <Heading size="md">{title}</Heading>
          <Text>{parsedContent}...</Text> 
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
