import React from 'react';
import Banner from '../Components/About/Banner';
import Foot from "../Components/Foot";
import FootO from '../Components/FootO';
import Line from '../Components/About/Line';
import TextDiv from '../Components/About/TextDiv';
import Text from '../Components/About/Text';



const about = () => {
  return (
    <div>
    
        <Banner/>
        <Line/>
        <TextDiv/>
        <Text/>
        <FootO/>
        <Foot/>
    </div>
  )
}

export default about