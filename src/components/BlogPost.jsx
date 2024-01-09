import React from 'react';
import { Box, Image, Heading, Text, Badge } from '@chakra-ui/react';

const BlogPost = ({ id, title, coverPhoto, tags, content, onPostClick }) => {
  return (
    <Box 
      maxW="xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => onPostClick(id)}
      _hover={{ shadow: "md", cursor: "pointer" }}
      bg="transparent"
    >
      <Image
        src={coverPhoto || 'default_image_url'}
        alt='Article Cover Photo'
        boxSize="100%"
        objectFit="cover" 
        height='300px'
      />

      <Box p="4"> 
        <Heading size="lg" mb="2">{title}</Heading> 
        <Text mb="4" overflowY="auto">{content}</Text>
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
    </Box>
  );
};

export default BlogPost;
