import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


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
        <div className='gradient__text'>
          <div>
          {Array.isArray(tags) && tags.map(tag => {
  console.log('Tag:', typeof(tag));
  return (
    <li key={tag.name} className='btn tag-button'>{tag.name}</li>
  );
})}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
