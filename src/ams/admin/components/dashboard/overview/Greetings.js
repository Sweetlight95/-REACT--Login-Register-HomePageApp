import React from 'react';
import { Image } from '@chakra-ui/react'
import { Box, Text } from "@chakra-ui/layout"
import waveing from '../../../../../assets/wave.svg'

const Greetings = () => {
  return (
      <Box display="flex" justifyContent="space-between" width="18vw">
          <Image src={waveing} />
          <Box>
              <Text marginBottom="2px" marginTop="0" fontWeight="bold" fontSize="24px">Hi Patience</Text>
              <Text marginBottom="0" marginTop="2px" fontSize="11px">Welcome to your Admin Dashboard</Text>
          </Box>
      </Box>
  )
};

export default Greetings;
