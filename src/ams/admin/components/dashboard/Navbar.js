import React, { useState } from 'react';
import { Box, Button,  } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { FaQrcode } from 'react-icons/fa'
import { FiUsers, FiSettings } from 'react-icons/fi'


const Navbar = () => {
    const setTabIndex = (index) => {
        console.log(index)
    }
    const [tabRoute, setTabRoute] =useState("overview")

    const routes = [
        {
            name: "overview",
            route: "/overview"
        },
        {
            name: "natives",
            route: "/natives"
        }, 
        {
            name: "settings",
            route: "/settings"
            
        }
    ]
  return (
      <Box display="flex" justifyContent="space-around" alignItems="center">
          <Text fontSize="16px" fontWeight="bold">
            Attendance
          </Text>
          <Box display="flex" justifyContent="space-around" alignItems="center" width="10%">
              <Button leftIcon={<FaQrcode/>} p={4} height="30px" bg="white" color="black" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%"> Overview</Button>
              <Button leftIcon={<FiUsers/>} p={4} height="30px" bg="white" color="black" mx="4rem" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Natives</Button>
              <Button leftIcon={<FiSettings/>} p={4} height="30px" bg="white" color="black" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Settings</Button>
          </Box>
           <Box>

           </Box>
          <Box>
              <Text fontSize="12px" fontWeight="bold">Hi.</Text>
          </Box>
      </Box>
  )
};

export default Navbar;
