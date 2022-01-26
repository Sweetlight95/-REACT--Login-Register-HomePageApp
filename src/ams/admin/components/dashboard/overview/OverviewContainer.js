import React from 'react';
import Greetings from './Greetings'
import { Box } from "@chakra-ui/layout"
import BreadCrumbLink from './BreadCrumbLink';
import card1 from '../../../../../assets/card1.svg'
import card2 from '../../../../../assets/card2.svg'
import card3 from '../../../../../assets/card3.svg'
import card4 from '../../../../../assets/card4.svg'
import CardDisplay from './CardDisplay';


const OverviewContainer = () => {

    const details = [
        {
            img: card1,
            value: "35,000",
            text: "All Reg. Natives"
        },
        {
            img: card2,
            value: "13,000",
            text: "Present Natives"
        },
        {
            img: card3,
            value: "22,000",
            text: "Absent Natives"
        },
        {
            img: card4,
            value: "65%",
            text: "% Attendance"
        }
    ]

  return (
    <Box paddingTop="3%" paddingLeft="9%" paddingRight="9%">
        <Greetings/>
        <BreadCrumbLink/>
        <Box display="flex" justifyContent="space-between" width="100%" >
            {details.map((detail, index) => (
                <CardDisplay key={index} cardDetails={detail}/>
            ))}
        </Box>
    </Box>
  )
};

export default OverviewContainer;
