import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../../components/BlogCard';
import { Spinner, Flex } from '@chakra-ui/react';

const LatestProjects = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'https://portfolio-backend-production-sanchojralegre.up.railway.app/post';
        axios.get(apiUrl)
            .then(response => {
                setArticles(response.data.slice(0, 3)); // Get only the latest 3 articles
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner />
    }

    return (
        <Flex direction={{ base: "column", md: "row" }} wrap="wrap" justifyContent="center" alignItems="center" gap='20px'>
            {articles.map(article => (
                <BlogCard
                    key={article.id}
                    id={article.id}
                    coverPhoto={article.cover_photo || 'default_image_url'}
                    title={article.title}
                    content={`${article.content.slice(0, 300)}...`} // Adjust as needed
                    tags={article.tag_names}
                />
            ))}
        </Flex>
    );
};

export default LatestProjects;
