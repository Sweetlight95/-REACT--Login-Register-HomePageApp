import { Box, Text, Badge } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import icon from '../../../../assets/wave.svg'
import React from 'react';

const AuthContainer = () => {
  return (
      <Box p={6}>
        <Image src={icon} />
        <Text fontSize={23} mt={6} mb={5} fontWeight="bold" color="black">Hi Patience,</Text>
        <Badge py={5} px={12} variant="outline" border="0.34px solid #cccccc" borderRadius="6px" >patience.admin@semicolon.africa</Badge>
        <Box mt={13}>
            <Text color="#595959" fontSize="14" m={0} fontWeight="500">Welcome to the Attendance Management</Text>
            <Text color="#595959" fontSize="14" m="2" fontWeight="500">Create a Password to complete your Registration</Text>
      </Box>
    </Box>  
  );
};

export default AuthContainer;
