import React, { useEffect} from 'react';
// import image1 from "../assets/pics/side_img1.jpg";
// import image2 from "../assets/pics/side_img2.jpg";
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10} from '../assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const  Sech = () => {
  useEffect(() => {
    AOS.init({ duration: 1800, once: false });
  }, []);


    return (
    <div className="flex flex-col md:flex-row items-center justify-between py-2 mr-10 " >
    <div className="hidden md:block md:w-1/2 relative" data-aos="fade-right" >
    <img 
        src={image6} 
        alt="Description" 
        className="w-[240px] h-[240px]  absolute top-[-100px] left-40 z-10 rounded-lg" 
    />
    <img 
        src={image9} 
        alt="Description" 
        className="w-[250px] h-[240px] absolute top-[-70px] right-[80px] z-20 rounded-lg" 
    />
    </div>
    <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-10 md:ml-[-90px]" data-aos="fade-left">
    <p className="text-2xl text-black text-left ml-3">Welcome to</p>
    <h2 className="text-5xl font-bold text-blue-700 text-left ml-3">IMG Energies Limited</h2>
    <p className="mt-4 text-black text-left ml-3 text-[17px]">
        We deliver high-quality products and expert solutions tailored to the oil and gas industry. We bring our expertise to ensure your company's needs are met with precision. with a focus on excellence and safety. 
        <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> optimize operations to meet your company's needs seamlessly.
        <p className='mt-2'>
          Contact our representative today to get started!
        </p>
      </p>
    </div>
  </div>  
  );
};

export default Sech;
