import React from 'react';
import { Box, Image, Heading, Text, Badge } from '@chakra-ui/react';
import parse from 'html-react-parser';

const BlogPost = ({ id, title, coverPhoto, tags, content, onPostClick, created }) => {
  const stripHtml = (htmlString) => {
    const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlString;
      return tempDiv.textContent || tempDiv.innerText || "";
    };
  
    const strippedContent = stripHtml(content);
    const contentPreview = `${strippedContent.slice(0, 300)}...`;
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(dateString).toLocaleDateString('en-AU', options);
    };
    const formattedDate = formatDate(created);
  

  return (
    <Box 
      maxW="xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => onPostClick(id)}
      _hover={{ shadow: "md", cursor: "pointer" }}
      bg="transparent"
      color='white'
      
    >
      <Image
        src={coverPhoto || 'default_image_url'}
        alt='Article Cover Photo'
        boxSize="100%"
        objectFit="cover" 
        height='300px'
      />

      <Box p="1"> 
        <Heading size="lg" mb="2">{title}</Heading> 
        <Text p="1" m="1" overflowY="auto">Written on - {formattedDate}</Text>
        <Text p="1" m="1" overflowY="auto">{contentPreview}</Text>
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
