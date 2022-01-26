import React from 'react';
import Greetings from './Greetings'
import { Box } from "@chakra-ui/layout"
import BreadCrumbLink from './BreadCrumbLink';
import card1 from '../../../../../assets/card1.svg'
import card2 from '../../../../../assets/card2.svg'
import card3 from '../../../../../assets/card3.svg'
import card4 from '../../../../../assets/card4.svg'


const OverviewContainer = () => {

    const details = [
        {
            img: card1,
            value: "35,000",
            text: "All Reg. Natives"
        },
        {
            img: card2,
            value: "35,000",
            text: "All Reg. Natives"
        },
        {
            img: card3,
            value: "35,000",
            text: "All Reg. Natives"
        },
        {
            img: card4,
            value: "65%",
            text: "All Reg. Natives"
        }
    ]

  return (
    <Box paddingTop="3%" paddingLeft="9%">
        <Greetings/>
        <BreadCrumbLink/>
        <Box>
            {}
        </Box>
    </Box>
  )
};

export default OverviewContainer;
