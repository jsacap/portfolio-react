import React, { useState } from 'react'
import Editor from '../Editor'
import useSubscriber from '../Hooks/useSubscriber';
import useSubscription from '../hooks/useSubscription';
import { sendNewsletter } from './sendNewsletter';
import { FormControl, FormLabel, Input, Select, Button, Box, Heading, useToast, Center } from '@chakra-ui/react';
import createEmailHtml from './createEmailHtml';


const ComposeNewsletter = () => {
    const [subject, setSubject] = useState('')
    const { subscriptions, isLoading, loadingSubscriptions } = useSubscription();
    const [content, setContent] = useState('');
    const [selectedSubscription, setSelectedSubscription] = useState('');
    const toast = useToast();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formattedContent = createEmailHtml(content);
      const newsletterData = { subject, message: content, subscription: selectedSubscription };

      try {
          await sendNewsletter(newsletterData);
          toast({
              title: "Newsletter Sent",
              description: "Your newsletter has been successfully sent.",
              status: "success",
              duration: 5000,
              isClosable: true,
          });
      } catch (error) {
          toast({
              title: "Error",
              description: error.message,
              status: "error",
              duration: 5000,
              isClosable: true,
          });
          console.error('error', error.message);
      }
  };

  return (
    <Center h='100vh' bg='#040C18'>
      <Box p={5} width='700px' shadow='md' borderWidth='1px'>
          <Heading mb={4}>Compose Newsletter</Heading>
          <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                  <FormLabel>To:</FormLabel>
                  <Select placeholder="Select subscription" 
                          value={selectedSubscription} 
                          onChange={(e) => setSelectedSubscription(e.target.value)}
                          isDisabled={isLoading}>
                      {subscriptions.map(sub => (
                          <option key={sub.id} value={sub.name}>{sub.name}</option>
                      ))}
                  </Select>
              </FormControl>
              <FormControl mt={4} isRequired>
                  <FormLabel>Subject:</FormLabel>
                  <Input type="text" 
                         value={subject} 
                         onChange={(e) => setSubject(e.target.value)} />
              </FormControl>
              <FormControl mt={4} isRequired>
                  <FormLabel>Content:</FormLabel>
                  <Editor value={content} onChange={setContent} />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">Send Newsletter</Button>
          </form>
      </Box>
      </Center>
  );
};

export default ComposeNewsletter;
