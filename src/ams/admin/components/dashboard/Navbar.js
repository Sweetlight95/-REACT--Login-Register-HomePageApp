import React, { useState } from 'react';
import { Box, Button, Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { FaQrcode } from 'react-icons/fa'
import searching from '../../../../assets/search.svg'
import boxing from '../../../../assets/box.svg'
import bell from '../../../../assets/bell.svg'
import { FiUsers, FiSettings, FiChevronDown } from 'react-icons/fi'


const Navbar = () => {
  
    const [tabRoute, setTabRoute] =useState("overview")

    function setTabIndex(route) {
        setTabRoute(route.name)
    }

    const routes = [
        {
            name: "overview",
            route: "/overview",
            icon: FaQrcode
        },
        {
            name: "natives",
            route: "/natives",
            icon: FiUsers, FiChevronDown

        }, 
        {
            name: "settings",
            route: "/settings",
            icon: FiSettings
        }
    ]
  return (
      <Box display="flex" justifyContent="space-around"     alignItems="center" bg="white" height="8vh">
            <Text fontSize="16px" fontWeight="bold">Attendance</Text>
            <Box display="flex" justifyContent="space-between" alignItems="center"  height="100%">
                {routes.map((route, index) => (
                    <Button onClick={() => setTabIndex(route)} cursor="pointer" key={index} leftIcon={<route.icon/>} p={4} height="100%" bg="white" mr="4rem" color="black" fontsize="14.5px" border="unset"  fontWeight={tabRoute === route.name ? "bold" : "100"} borderBottom={tabRoute === route.name ? "3px solid black" : "none"} width="100%">{route.name}</Button>
                ))}
            </Box>
              {/* <Button leftIcon={<FiUsers/>} p={4} height="30px" bg="white" color="black" mx="4rem" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Natives</Button>
              <Button leftIcon={<FiSettings/>} p={4} height="30px" bg="white" color="black" fontsize="14px" border="unset" borderBottom="2px solid black" width="100%">Settings</Button>
           */}
          <Box display="flex" alignItems="center">
              <Image src={searching} height="100%"/>
              <Image src={boxing} height="100%" mx="2rem"/>
              <Image src={bell} height="100%"/>
          </Box>
      </Box>
  )
};

export default Navbar;
