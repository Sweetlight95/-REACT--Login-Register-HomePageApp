import React from 'react';
import { Box } from '@chakra-ui/react'
import Navbar from '../../components/dashboard/Navbar';
import OverviewContainer from '../../components/dashboard/overview/OverviewContainer';

const Dashboard = () => {
  return (
      <Box>
          <Navbar/>
          <OverviewContainer/>
      </Box>
  );
};

export default Dashboard;
