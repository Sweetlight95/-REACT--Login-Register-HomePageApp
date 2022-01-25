import React from 'react';
import { Box } from '@chakra-ui/layout';
import AuthContainer from '../../components/auth/AuthContainer';

const Auth = () => {
  return (
      <Box display="flex" justifyContent="center" alignItems="center" bg="white" height="100vh">
            <AuthContainer/>
      </Box>
  );
};

export default Auth;
