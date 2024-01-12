import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Textarea, FormControl, FormLabel, Alert } from '@chakra-ui/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
            console.log(formData)
            const response = await axios.post('https://portfolio-backend-production-sanchojralegre.up.railway.app/contact/', formData);
            if(response.data.success) {
                setSuccess(true);
                setFormData({ name: '', subject: '', email: '',  message: '' });
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box bg="#040C18" boxShadow="md" borderRadius="lg" p={6} maxW="5xl" mx="auto">
            {success && <Alert status="success">Message sent successfully!</Alert>}
            {error && <Alert status="error">An error occurred!</Alert>}
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input variant='filled' name="name" value={formData.name} onChange={handleChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input variant='filled' name="subject" value={formData.subject} onChange={handleChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Your Email Address</FormLabel>
                    <Input variant='filled' name="email" value={formData.email} onChange={handleChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea variant='filled' name="message" value={formData.message} onChange={handleChange} />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit" isLoading={submitting}>
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default ContactForm;
