import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Badge } from '@chakra-ui/react'; // Add this import

const MarketBlogArticlePage = ({ id, coverPhoto, title, created, content, tags }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const articleDetails = {
      id,
      title,
      created,
      coverPhoto,
      tags,
      content: typeof content === 'string' ? content : undefined,
    };

    navigate(`/marketblog/article/${id}`, { state: articleDetails });
  };

  const formattedDate = new Date(created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='jsa__blog-container_article' onClick={handleClick}>
      <div className='jsa__blog-container_article-image'>
        <img src={coverPhoto} alt='Article Cover Photo' />
      </div>
      <div className='jsa__blog-container_article-content'>
        <div>
          <h3>{title}</h3>
          <p>Written on - {formattedDate}</p>
          {content}
          {Array.isArray(tags) && tags.map(tag => (
            <Badge key={tag.name} borderRadius='full' px='2' colorScheme='light' bg={'teal'} mr={2} mb={2}>
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketBlogArticlePage;
