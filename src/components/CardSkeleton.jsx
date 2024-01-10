import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Box
    maxW='xl'    
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    p='1'
    >
        <Skeleton height='300px' />
        <Box p='4'>
            <Skeleton height='20px' mb='4' />
            <SkeletonText mt='4' noOfLines={3} spacing='4' />
        </Box>
    </Box>
  );
};

export default CardSkeleton