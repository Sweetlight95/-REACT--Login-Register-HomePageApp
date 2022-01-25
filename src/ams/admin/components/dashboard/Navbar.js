import React from 'react';
import { Box, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const Navbar = () => {
    const setTabIndex = (index) => {
        console.log(index)
    }
  return (
      <Box display="flex" justifyContent="space-around" alignItems="center">
          <Text fontSize="16px" fontWeight="bold">
            Attendance
          </Text>
          <Box display="flex" justifyContent="space-around" alignItems="center" width="10%">
              <Button p={4} height="30px" bg="white" color="black" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Overview</Button>
              <Button p={4} height="30px" bg="white" color="black" mx="4rem" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Natives</Button>
              <Button p={4} height="30px" bg="white" color="black" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Settings</Button>
          </Box>

          <Box>
              <Text fontSize="12px" fontWeight="bold">Hi.</Text>
          </Box>
      </Box>
  )
};

export default Navbar;
