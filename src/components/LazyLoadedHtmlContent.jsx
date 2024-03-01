// LazyLoadedHtmlContent.js
import React from 'react';
import parse from 'html-react-parser';

const LazyLoadedHtmlContent = ({ htmlContent }) => {
  const options = {
    replace: domNode => {
      if (domNode.name === 'img') {
        return (
          <img
            {...domNode.attribs}
            loading="lazy"
            alt={domNode.attribs.alt || 'Lazy loaded image'}
          />
        );
      }
    },
  };

  return <div>{parse(htmlContent, options)}</div>;
};

export default LazyLoadedHtmlContent;
