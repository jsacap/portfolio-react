import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box, Image, Heading, Text, Badge } from '@chakra-ui/react';


const SinglePost = ({ id, title, coverPhoto, tags, content }) => {

  
  const navigate = useNavigate();

  const handleClick = () => {
    

    navigate(`/blog/article/${id}`, {
      state: {
        id,
        title,
        coverPhoto,
        tags,
        content: typeof content === 'string' ? content : undefined,
      },
    });
  };

  return (
    
    <Box 
          maxW="xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          onClick={handleClick}
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
            <Box mb="4" overflowY="auto">{content}</Box>
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
export default SinglePost;
