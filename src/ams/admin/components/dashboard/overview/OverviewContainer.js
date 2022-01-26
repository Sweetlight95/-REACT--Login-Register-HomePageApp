import React from 'react';
import Greetings from './Greetings'
import { Box } from "@chakra-ui/layout"
import BreadCrumbLink from './BreadCrumbLink';

const OverviewContainer = () => {
  return (
    <Box paddingTop="3%" paddingLeft="9%">
        <Greetings/>
        <BreadCrumbLink/>
    </Box>
  )
};

export default OverviewContainer;
