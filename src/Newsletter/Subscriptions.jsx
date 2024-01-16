import React, { useState } from 'react';
import { Box, Button, Input, useToast, VStack, HStack, Text, Center } from '@chakra-ui/react';
import useSubscription from '../components/Hooks/useSubscriber';

const Subscriptions = () => {
  const { subscriptions, addSubscription, deleteSubscription, isLoading, error } = useSubscription();
  const [newSubscriptionName, setNewSubscriptionName] = useState('');
  const toast = useToast();

  const handleDelete = (subscriptionId) => {
    deleteSubscription(subscriptionId);
    toast({
      title: 'Subscription deleted.',
      description: "The subscription has been successfully deleted.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleAdd = () => {
    addSubscription({ name: newSubscriptionName });
    setNewSubscriptionName('');
    toast({
      title: 'Subscription added.',
      description: "A new subscription has been successfully added.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  // Handling errors with a toast
  if (error) {
    toast({
      title: 'An error occurred.',
      description: error.message,
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <>
    <Center h='100vh' bg='blackAlpha.700'>
    <Box p={5} bg='#040C18'  maxW="600px" w="100%" mx="auto" boxShadow="xl" rounded="lg">
      <VStack spacing={4}>
        {isLoading ? <Text>Loading...</Text> : subscriptions.map(subscription => (
          <HStack key={subscription.id} w="100%" justifyContent="start">
            <Text>{subscription.name}</Text>
            <Button colorScheme="red" size="sm" onClick={() => handleDelete(subscription.id)}>
              X
            </Button>
          </HStack>
        ))}
        <HStack w="100%">
          <Input
            placeholder="New Subscription"
            value={newSubscriptionName}
            onChange={(e) => setNewSubscriptionName(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleAdd}>Add</Button>
        </HStack>
      </VStack>
    </Box>
    </Center>
    </>
  );
};

export default Subscriptions;
