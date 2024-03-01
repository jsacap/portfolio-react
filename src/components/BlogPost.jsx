import React, { useState, useEffect } from 'react';
import { Box, Image, Heading, Text, Badge, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const BlogPost = ({ id, title, coverPhoto, tags, content, onPostClick, created }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [parsedContent, setParsedContent] = useState('');

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
  
    const images = doc.querySelectorAll('img');
    images.forEach(image => {
      image.setAttribute('loading', 'lazy');
    });
  
    const contentText = doc.body.textContent || '';
    
    const contentPreview = contentText.slice(0, 300);
    setParsedContent(contentPreview);
  }, [content]);
  

  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString('en-AU', options);
  };

  const formattedDate = formatDate(created);

  return (
    <Box 
      data-aos='flip-up' data-aos-duration='2000' data-aos-once='true'
      maxW="xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => onPostClick(id)}
      _hover={{ shadow: "md", cursor: "pointer" }}
      bg="transparent"
      color='white'      
    >
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="enter"
        whileHover="hover"
      >
        {!imageLoaded && (
          <Skeleton height="300px" fadeDuration={1} />
        )}
        <Image
          src={coverPhoto || 'default_image_url'}
          alt='Article Cover Photo'
          boxSize="100%"
          objectFit="cover" 
          height='300px'
          display={imageLoaded ? "block" : "none"}
          onLoad={() => setImageLoaded(true)}
        />

        <Box p="1"> 
          <Heading size="lg" mb="2">{title}</Heading> 
          <Text p="1" m="1" overflowY="auto">Written on - {formattedDate}</Text>
          <Text p="1" m="1" overflowY="auto">{parsedContent}...</Text> {/* Display the sliced content as the preview */}
          <Box display="flex" flexWrap="wrap"> 
            {Array.isArray(tags) && tags.map(tagName => (
              <Badge
                key={tagName}
                borderRadius="full"
                px="2"
                colorScheme="teal"
                mr="2"
                mb="2"
              >
                {tagName}
              </Badge>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default BlogPost;
