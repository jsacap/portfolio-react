import { useState, useEffect } from 'react';
import axios from 'axios';

const useArticles = (apiUrl, filterTag = '') => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        const filteredArticles = filterTag
          ? response.data.filter(article => !article.tags.some(tag => tag.name === filterTag))
          : response.data;

        setArticles(filteredArticles);
      })
      .catch(error => console.error('Error fetching articles:', error))
      .finally(() => setLoading(false));
  }, [apiUrl, filterTag]);

  return { articles, loading };
};

export default useArticles;
