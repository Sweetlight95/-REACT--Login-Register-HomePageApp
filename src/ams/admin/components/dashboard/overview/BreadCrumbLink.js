import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import { FiChevronRight } from 'react-icons'

const BreadCrumbLink = () => {
  return (
    <Breadcrumb spacing="8px" separator={<FiChevronRight/>}>
    <BreadcrumbItem color="grey">
      <BreadcrumbLink href='#'>Home</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#'>About</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  );
};

export default BreadCrumbLink;
