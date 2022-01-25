import { Box } from '@chakra-ui/react';
import { Image, Text, Badge, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { FiEye } from 'react-icons/fi'
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
      <FormControl mt='2rem'>
      <FormLabel htmlFor='password'>Password</FormLabel>
        <InputGroup>   
          <Input _focusVisible={{outline : "#6e7391 auto 1px"}} px={12} id="password" type='password' borderRadius='8px' height='40px' width='100%' border='0.34px solid #cccccc' mt='4px'/>
          <InputRightElement children={<FiEye width="20px" color="#cccccc" />}  height="50px" mr={10}/>
          </InputGroup>
          <Text mt={1} color="#6e7391" fontSize="10px">Upto 8 characters with an Uppercase, symbol and number</Text>
      </FormControl>
      <Button bg="black" color="white" border="none" borderRadius="6px" mt="1rem" width="100%" p={6} height="45px">Create Account</Button>
    </Box>  
  );
};

export default AuthContainer;
