import { useState, useEffect } from 'react';
import axios from 'axios';

const useSubscriber = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSubscribers = () => {
        setIsLoading(true);
        axios.get('http://localhost:8000/subscribers/', {
            headers: { 'Authorization': `JWT ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setSubscribers(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching subscribers', error);
            setError(error);
            setIsLoading(false);
        });
    };

    const addSubscriber = (newSubscriberData) => {
        setIsLoading(true);
        const data = {
            ...newSubscriberData,
            subscriptions: newSubscriberData.subscriptions.map(sub => sub.id) 
        };
        axios.post('http://localhost:8000/subscribers/', data, {
            headers: { 'Authorization': `JWT ${localStorage.getItem('accessToken')}` }
        })
        .then(() => {
            fetchSubscribers();
        })
        .catch(error => {
            console.error('Error adding subscriber', error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    

    const deleteSubscriber = (subscriberId) => {
        setIsLoading(true);
        axios.delete(`http://localhost:8000/subscribers/${subscriberId}/`, {
            headers: { 'Authorization': `JWT ${localStorage.getItem('accessToken')}` }
        })
        .then(() => {
            fetchSubscribers();
        })
        .catch(error => {
            console.error('Error deleting subscriber', error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchSubscribers();
    }, []);

    return { subscribers, isLoading, error, addSubscriber, deleteSubscriber };
};

export default useSubscriber;
