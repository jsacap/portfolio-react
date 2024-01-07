import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Badge } from '@chakra-ui/react';


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
    <div className='jsa__blog-container_article' onClick={handleClick}>
      <div className='jsa__blog-container_article-image'>
        <img src={coverPhoto || 'default_image_url'} alt='Article Cover Photo' />
      </div>
      <div className='jsa__blog-container_article-content'>
        <div>
          <h3>{title}</h3>
          {content}
        </div>
        
          <div>
          {Array.isArray(tags) && tags.map(tagName => {
  return (
    <Badge key={tagName} borderRadius='full' px='2' colorScheme='light' bg={'teal'} mr={2} mb={2}>
      {tagName}
    </Badge>
  );
})}


          
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
