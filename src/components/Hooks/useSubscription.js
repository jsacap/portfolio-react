import { useState, useEffect } from 'react';
import axios from 'axios';

const useSubscription = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSubscriptions = () => {
        setIsLoading(true);
        axios.get('http://localhost:8000/subscriptions/', {
            headers: { 'Authorization': `JWT ${localStorage.getItem('accessToken')}` }
        })
        .then(response => {
            setSubscriptions(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching subscriptions', error);
            setError(error);
            setIsLoading(false);
        });
    };

    const addSubscription = (newSubscriptionData) => {
        setIsLoading(true);
        axios.post('http://localhost:8000/subscriptions/', newSubscriptionData, {
            headers: { 'Authorization': `JWT ${localStorage.getItem('accessToken')}` }
        })
        .then(() => {
            fetchSubscriptions();
        })
        .catch(error => {
            console.error('Error adding subscription', error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const deleteSubscription = (subscriptionId) => {
        setIsLoading(true);
        axios.delete(`http://localhost:8000/subscriptions/${subscriptionId}/`, {
            headers: { 'Authorization': `JWT ${localStorage.getItem('accessToken')}` }
        })
        .then(() => {
            fetchSubscriptions();
        })
        .catch(error => {
            console.error('Error deleting subscription', error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    return { subscriptions, isLoading, error, addSubscription, deleteSubscription };
};

export default useSubscription;
