import React, { useState } from 'react';
import { Box, Button, Input, Checkbox, Stack, useToast, VStack, HStack, Text, Center } from '@chakra-ui/react';
import useSubscriber from '../components/Hooks/useSubscriber';
import useSubscription from '../components/Hooks/useSubscription';

const Subscribers = () => {
    const { subscribers, addSubscriber, deleteSubscriber, isLoading: isSubscribersLoading, error: subscriberError } = useSubscriber();
    const { subscriptions, isLoading: isSubscriptionsLoading } = useSubscription();
    const [newSubscriber, setNewSubscriber] = useState({ first_name: '', last_name: '', email: '', subscriptions: [] });
    const toast = useToast();
  
    const handleSubscriptionChange = (subscriptionId, isChecked) => {
        setNewSubscriber(prev => {
          const newSubscriptions = isChecked 
            ? [...prev.subscriptions, { id: subscriptionId }]
            : prev.subscriptions.filter(sub => sub.id !== subscriptionId);
          return { ...prev, subscriptions: newSubscriptions };
        });
      };
      
  
    const handleDelete = (subscriberId) => {
      deleteSubscriber(subscriberId);
      toast({
        title: 'Subscriber deleted.',
        description: "The subscriber has been successfully deleted.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    };
  
    const handleAdd = () => {
      addSubscriber(newSubscriber);
      setNewSubscriber({ first_name: '', last_name: '', email: '', subscriptions: [] });
      toast({
        title: 'Subscriber added.',
        description: "A new subscriber has been successfully added.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    };
  
    return (
      <Center h="100vh">
        <Box p={5} maxW="600px" w="100%" mx="auto" boxShadow="xl" rounded="lg">
          <VStack spacing={4}>
            {isSubscribersLoading ? <Text>Loading subscribers...</Text> : subscribers.map(subscriber => (
              <HStack key={subscriber.id} w="100%" justifyContent="space-between">
                <Text>{`${subscriber.first_name} ${subscriber.last_name} - (${subscriber.email}) - Subscriptions: ${subscriber.subscription_names.join(', ')}`}</Text>


                <Button colorScheme="red" size="sm" onClick={() => handleDelete(subscriber.id)}>
                  X
                </Button>
              </HStack>
            ))}
            <VStack w="100%">
              <Input
                placeholder="First Name"
                value={newSubscriber.first_name}
                name="first_name"
                onChange={e => setNewSubscriber({ ...newSubscriber, first_name: e.target.value })}
              />
              <Input
                placeholder="Last Name"
                value={newSubscriber.last_name}
                name="last_name"
                onChange={e => setNewSubscriber({ ...newSubscriber, last_name: e.target.value })}
              />
              <Input
                placeholder="Email"
                value={newSubscriber.email}
                name="email"
                onChange={e => setNewSubscriber({ ...newSubscriber, email: e.target.value })}
              />
              <Stack pl={6} mt={1} spacing={1}>
                {isSubscriptionsLoading ? <Text>Loading subscriptions...</Text> : subscriptions.map(subscription => (
                  <Checkbox 
                    key={subscription.id} 
                    onChange={e => handleSubscriptionChange(subscription.id, e.target.checked)}
                  >
                    {subscription.name}
                  </Checkbox>
                ))}
              </Stack>
              <Button colorScheme="blue" onClick={handleAdd}>Add</Button>
            </VStack>
          </VStack>
        </Box>
      </Center>
    );
  };
  
  export default Subscribers;