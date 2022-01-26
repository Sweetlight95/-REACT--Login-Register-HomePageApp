import React from 'react';
// import Auth from './views/auth/Auth';
import { Box } from '@chakra-ui/react'
import Dashboard from './views/dashboard/Dashboard';

const App = () => {
  return (
      <Box bg="#f5f5f5" height="100vh">
           {/* Admin
      <Auth /> */}
      <Dashboard/>
      </Box>
  )
   
      
  
};

export default App;
