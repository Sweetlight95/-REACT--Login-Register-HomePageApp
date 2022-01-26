import React from 'react';
import { Box, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/imaage"

const CardDisplay = ({ cardDetails }) => {
  return (
      <Box display="flex" justifyContent="space-around" bg="white" borderRadius="4px" px="1.5rem" py="0.5rem" width="20%">
          <Image src={cardDetails.img} />
          <Box>
              <Text fontSize="24px" fontWeight="bold">{cardDetails.value}</Text>
              <Text fontSize="12px" color="gray">{cardDetails.text}</Text>
          </Box>
      </Box>
  );
};

export default CardDisplay;
