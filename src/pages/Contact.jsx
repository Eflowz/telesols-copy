import React from 'react';
import Glik from '../Components/Contact/Glik';
import Gline from '../Components/Contact/Gline';
import FootO from '../Components/FootO';
import Foot from '../Components/Foot';
import ContactForm from '../Components/Contact/ContactForm';
import ContactDet from '../Components/Contact/ContactDet';


const Contact = () => {
  return (
    <div>
      <Glik/>
      <Gline/>
      <ContactDet/>
      <ContactForm/>
      <FootO/>
      <Foot/>
    </div>
  )
}

export default Contact