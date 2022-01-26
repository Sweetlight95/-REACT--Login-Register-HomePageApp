import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import wave from '../../../../../assets/wave.svg'

const Greetings = () => {
  return (
      <Box display="flex">
          <Image src={wave}/>
          <Box>
              <Text>Hi Patience</Text>
              
          </Box>
      </Box>
  )
};

export default Greetings;
